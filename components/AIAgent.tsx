import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, Language } from '../types';
import { translations } from '../translations';

interface AIAgentProps {
  isDarkMode: boolean;
  language: Language;
}

// DeepSeek API Configuration
const DEEPSEEK_API_KEY = 'sk-cc06679029604f1d8502bfb6c18edcbd';
const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions';

const SYSTEM_INSTRUCTION = `
You are the intelligent virtual assistant for "Ilex Art", a premium wall printing company.
Your goal is to assist customers with choosing materials, estimating prices, and navigating the website.

**Company Profile:**
- Name: Ilex Art
- Vibe: Premium, artistic, modern, sophisticated technology.
- Services: High-definition wall printing, custom murals, art reproduction.
- Location: 123 Art Avenue, Design District, NY 10012.
- Contact: +1 (555) 123-4567, hello@ilexart.com.
- Hours: Mon-Fri, 9am - 6pm EST.

**Products & Pricing (Currency: USD):**
1. **Premium Canvas**: $45/m². (Textured cotton, museum quality, matte).
2. **Self-Adhesive Vinyl**: $30/m². (Durable, washable, smooth, good for commercial).
3. **Digital Fresco**: $65/m². (Plaster texture, mimics traditional wall painting, unique).
4. **Non-Woven Wallpaper**: $35/m². (Eco-friendly, breathable, easy to apply/remove).

**Pricing Formula:**
- Total Cost = (Width * Height * PricePerSqm) + $50 Base Processing Fee.
- Example: 2m x 3m Canvas = (6 * 45) + 50 = $320.

**Shipping & Production:**
- Production time: 3-5 business days.
- Shipping available worldwide.

**Tone of Voice:**
- Professional but warm.
- Artistic and appreciative of design.
- Helpful and concise.

**Guidelines:**
- If a user asks for a price, ask for their wall dimensions (width and height) and preferred material, then calculate it for them using the formula above.
- If a user asks about the portfolio, encourage them to visit the Portfolio page.
- If a user wants to order, guide them to the Calculator or Contact page.
- ALWAYS reply in the same language the user is speaking (English or Russian).
`;

const AIAgent: React.FC<AIAgentProps> = ({ isDarkMode, language }) => {
  const t = translations[language].ai;
  
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Chat Session with Greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        { id: '1', text: t.initialMsg, sender: 'bot', timestamp: new Date() }
      ]);
    }
  }, [language, messages.length, t.initialMsg]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const getLocalResponse = (text: string) => {
    const lower = text.toLowerCase();
    
    // Simple keyword matching for fallback logic
    if (lower.includes('price') || lower.includes('cost') || lower.includes('much') || lower.includes('quote') || lower.includes('цена') || lower.includes('стоит')) {
      return language === 'en' 
        ? "Prices depend on the material and size. For example, Premium Canvas is $45/m². You can use our Calculator page for an exact quote, or tell me your wall dimensions!"
        : "Цена зависит от материала и размера. Например, Премиум Холст стоит $45/м². Вы можете использовать Калькулятор для точного расчета или скажите мне размеры вашей стены!";
    }
    
    if (lower.includes('material') || lower.includes('vinyl') || lower.includes('canvas') || lower.includes('материал') || lower.includes('холст')) {
      return language === 'en'
        ? "We offer 4 premium materials: Premium Canvas, Self-Adhesive Vinyl, Digital Fresco, and Non-Woven Wallpaper. Canvas is great for art, while Vinyl is durable and washable."
        : "Мы предлагаем 4 премиальных материала: Холст, Винил, Фреска и Флизелин. Холст идеален для картин, а Винил — прочный и моющийся.";
    }
    
    if (lower.includes('delivery') || lower.includes('ship') || lower.includes('time') || lower.includes('доставка') || lower.includes('срок')) {
      return language === 'en'
        ? "Standard production time is 3-5 business days. We ship worldwide!"
        : "Стандартный срок производства 3-5 рабочих дней. Мы доставляем по всему миру!";
    }
    
    if (lower.includes('contact') || lower.includes('phone') || lower.includes('email') || lower.includes('контакт') || lower.includes('телефон')) {
      return language === 'en'
        ? "You can reach us at +1 (555) 123-4567 or hello@ilexart.com. Or visit the Contact page."
        : "Вы можете связаться с нами по телефону +1 (555) 123-4567 или email hello@ilexart.com.";
    }

    if (lower.includes('hello') || lower.includes('hi') || lower.includes('привет')) {
      return language === 'en'
        ? "Hello! How can I help you transform your walls today?"
        : "Здравствуйте! Как я могу помочь вам преобразить ваши стены сегодня?";
    }

    // Return a random default response from translations if no keywords match
    return t.responses[Math.floor(Math.random() * t.responses.length)];
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    // Optimistically update UI
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInputText('');
    setIsTyping(true);

    try {
      // Prepare messages for DeepSeek API (OpenAI compatible format)
      const apiMessages = updatedMessages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));

      // Prepend System Instruction
      const fullConversation = [
        { role: "system", content: SYSTEM_INSTRUCTION },
        ...apiMessages
      ];

      const response = await fetch(DEEPSEEK_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: fullConversation,
          stream: false
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        // Log specifically if it's a balance issue
        if (data.error?.message?.includes('Insufficient Balance') || response.status === 402) {
            console.warn("DeepSeek API: Insufficient Balance. Switching to local fallback.");
        }
        throw new Error(data.error?.message || 'API request failed');
      }

      const botText = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);

    } catch (error) {
      console.warn("Using local fallback due to API error:", error);
      
      // Artificial delay for realism in fallback mode
      await new Promise(resolve => setTimeout(resolve, 800));

      const fallbackText = getLocalResponse(userMsg.text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: fallbackText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className={`mb-4 w-80 md:w-96 rounded-2xl shadow-2xl overflow-hidden transition-all transform origin-bottom-right ${
          isDarkMode ? 'bg-slate-800 border border-white/10' : 'bg-white border border-slate-200'
        } flex flex-col`} style={{ height: '400px' }}>
          
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center text-slate-900">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <i className="fas fa-robot text-sm text-slate-900"></i>
              </div>
              <div>
                <h4 className="font-bold text-sm">{t.header}</h4>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-green-600"></span>
                  <span className="text-xs opacity-80 font-medium">{t.status}</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-900/60 hover:text-slate-900">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages */}
          <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                  msg.sender === 'user' 
                    ? 'bg-primary text-slate-900 font-medium rounded-br-none' 
                    : (isDarkMode ? 'bg-slate-700 text-slate-100 rounded-bl-none' : 'bg-white text-slate-800 rounded-bl-none')
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className={`rounded-2xl px-4 py-3 shadow-sm rounded-bl-none flex space-x-1 items-center ${
                   isDarkMode ? 'bg-slate-700' : 'bg-white'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className={`p-4 border-t ${isDarkMode ? 'border-white/10 bg-slate-800' : 'border-slate-100 bg-white'}`}>
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={t.placeholder}
                className={`flex-1 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                  isDarkMode ? 'bg-slate-900 text-white placeholder-slate-500' : 'bg-slate-100 text-slate-900 placeholder-slate-400'
                }`}
              />
              <button 
                type="submit"
                className="w-9 h-9 rounded-full bg-primary text-slate-900 flex items-center justify-center hover:bg-yellow-600 transition-colors shadow-lg"
              >
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-slate-900 shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
      >
        <i className={`fas ${isOpen ? 'fa-chevron-down' : 'fa-robot'} text-xl group-hover:rotate-12 transition-transform`}></i>
      </button>
    </div>
  );
};

export default AIAgent;