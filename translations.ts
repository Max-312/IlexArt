
import { Material, PortfolioItem } from "./types";

interface TranslationData {
  nav: {
    home: string;
    portfolio: string;
    materials: string;
    calculator: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    calculateBtn: string;
    portfolioBtn: string;
  };
  aboutSection: {
    title: string;
    button: string;
    text: string;
  };
  advantages: {
    quality: { title: string; text: string };
    delivery: { title: string; text: string };
    design: { title: string; text: string };
  };
  homeCategories: {
    title: string;
    subtitle: string;
    viewAll: string;
    explore: string;
    names: { 
      abstract: string; 
      nature: string; 
      urban: string;
      classic: string;
      minimalism: string;
      textures: string;
    };
  };
  statsSection: {
    projects: { label: string; number: number; suffix: string; subtext: string };
    warranty: { title: string; description: string };
    service: { title: string; description: string };
    team: { label: string; number: number; suffix: string; subtext: string };
  };
  testimonials: {
    title: string;
    items: {
      id: number;
      name: string;
      role: string;
      text: string;
      rating: number;
      avatar: string;
    }[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    all: string;
    categories: { Nature: string; Abstract: string; Art: string; Kids: string };
  };
  materials: {
    title: string;
    subtitle: string;
    faqTitle: string;
    pricePerSqm: string;
    items: Material[];
    faqs: { question: string; answer: string }[];
  };
  calculator: {
    title: string;
    subtitle: string;
    width: string;
    height: string;
    material: string;
    uploadTitle: string;
    uploadText: string;
    uploadHint: string;
    summaryTitle: string;
    dimensions: string;
    area: string;
    estimatedTotal: string;
    requestBtn: string;
    disclaimer: string;
  };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    studio: string;
    phone: string;
    email: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formMessage: string;
    sendBtn: string;
    success: string;
  };
  footer: {
    brandText: string;
    navTitle: string;
    infoTitle: string;
    contactTitle: string;
    privacy: string;
    terms: string;
    faq: string;
    rights: string;
  };
  ai: {
    header: string;
    status: string;
    placeholder: string;
    initialMsg: string;
    responses: string[];
  };
  portfolioItems: PortfolioItem[];
}

export const translations: Record<'en' | 'ru', TranslationData> = {
  en: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      materials: 'Materials',
      calculator: 'Calculator',
      contact: 'Contact',
    },
    hero: {
      title: 'Art on Your Wall',
      subtitle: 'Premium wall printing that transforms your environment into a masterpiece of digital craftsmanship.',
      calculateBtn: 'Calculate Cost',
      portfolioBtn: 'View Portfolio',
    },
    aboutSection: {
      title: 'It takes vision to create atmosphere',
      button: 'Our Story',
      text: 'Creative courage fuels breathtaking interior designs. We help homeowners and businesses find what makes their space unique and capture that story through large-format wall printing.',
    },
    advantages: {
      quality: { title: 'Premium Quality', text: 'Museum-grade materials and high-definition printing technology.' },
      delivery: { title: 'Fast Delivery', text: 'From production to your doorstep in 3-5 business days.' },
      design: { title: 'Unique Design', text: 'Customizable sizes and exclusive collections.' },
    },
    homeCategories: {
      title: 'Popular Categories',
      subtitle: 'Explore our most sought-after collections.',
      viewAll: 'View All',
      explore: 'Explore Collection',
      names: { 
        abstract: 'Abstract', 
        nature: 'Nature', 
        urban: 'Urban',
        classic: 'Classic Art',
        minimalism: 'Minimalism',
        textures: 'Textures'
      },
    },
    statsSection: {
      projects: { label: "Produced by us", number: 1243, suffix: "", subtext: "art installations" },
      warranty: { title: "Lifetime Warranty", description: "Our prints are resistant to fading and mechanical damage. We guarantee the preservation of color vibrancy for 20 years in interior spaces." },
      service: { title: "Premium Service", description: "From free consultation to white-glove installation. We handle the entire process." },
      team: { label: "Experience", number: 10, suffix: "+", subtext: "years in design" },
    },
    testimonials: {
      title: 'What Our Clients Say',
      items: [
        {
          id: 1,
          name: "Sarah Jenkins",
          role: "Interior Designer",
          text: "Ilex Art transformed my client's penthouse. The digital fresco texture is indistinguishable from hand-painted art. Truly a premium service.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
          id: 2,
          name: "Michael Chen",
          role: "Hotel Owner",
          text: "We needed a durable solution for our lobby that still looked artistic. The vinyl prints are incredible—washable yet vibrant. Fast delivery too.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          id: 3,
          name: "Elena Vostrova",
          role: "Homeowner",
          text: "The AI assistant helped me calculate the exact cost, and the result is exactly like the preview. My living room finally feels complete.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
      ]
    },
    portfolio: {
      title: 'Our Gallery',
      subtitle: 'Discover our curated collection of wall art designs. Each piece is printed with precision to bring life to your space.',
      all: 'All',
      categories: { Nature: 'Nature', Abstract: 'Abstract', Art: 'Art', Kids: 'Kids' },
    },
    materials: {
      title: 'Technology & Materials',
      subtitle: 'We use only the finest substrates and state-of-the-art printing technology to ensure your art stands the test of time.',
      faqTitle: 'Frequently Asked Questions',
      pricePerSqm: '/ m²',
      items: [
        {
          id: "canvas",
          name: "Premium Canvas",
          description: "High-quality textured cotton canvas, perfect for artistic reproductions.",
          pricePerSqm: 45,
          features: ["Textured surface", "Museum quality", "Matte finish"],
        },
        {
          id: "vinyl",
          name: "Self-Adhesive Vinyl",
          description: "Durable and washable material, ideal for modern interiors and commercial spaces.",
          pricePerSqm: 30,
          features: ["Smooth finish", "Water resistant", "Easy to clean"],
        },
        {
          id: "fresco",
          name: "Digital Fresco",
          description: "Plaster-effect material that mimics traditional wall painting techniques.",
          pricePerSqm: 65,
          features: ["Plaster texture", "Unique look", "Premium feel"],
        },
        {
          id: "non-woven",
          name: "Non-Woven Wallpaper",
          description: "Eco-friendly breathable material, easy to apply and remove.",
          pricePerSqm: 35,
          features: ["Eco-friendly", "Breathable", "Easy application"],
        },
      ],
      faqs: [
        { question: 'How durable are the prints?', answer: 'Our prints use UV-resistant inks that prevent fading for up to 20 years indoors.' },
        { question: 'Can I clean the wallpaper?', answer: 'Yes, our Vinyl and Non-Woven materials are washable with a damp soft cloth.' },
        { question: 'Is the material eco-friendly?', answer: 'We use non-toxic, latex-based inks and offer PVC-free material options safe for nurseries.' },
        { question: 'Do I need professional installation?', answer: 'While our materials are designed for easy application, we recommend professional installation for large panoramic walls to ensure seamless alignment.' }
      ]
    },
    calculator: {
      title: 'Estimate Your Project',
      subtitle: 'Enter your wall dimensions and choose a material to get an instant price estimate.',
      width: 'Width (m)',
      height: 'Height (m)',
      material: 'Material',
      uploadTitle: 'Upload Your Image (Optional)',
      uploadText: 'Click to upload or drag and drop',
      uploadHint: 'JPG, PNG up to 10MB',
      summaryTitle: 'Order Summary',
      dimensions: 'Dimensions',
      area: 'Total Area',
      estimatedTotal: 'Estimated Total',
      requestBtn: 'Request Quote',
      disclaimer: '*Final price may vary based on image quality adjustments and shipping.',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a custom project in mind? Our team of specialists is ready to help you bring your vision to life.',
      infoTitle: 'Contact Information',
      studio: 'Our Studio',
      phone: 'Phone',
      email: 'Email',
      formName: 'Name',
      formEmail: 'Email',
      formPhone: 'Phone',
      formMessage: 'Message',
      sendBtn: 'Send Message',
      success: 'Message sent successfully! We\'ll get back to you soon.',
    },
    footer: {
      brandText: 'Transforming spaces into immersive art experiences. Premium quality wall printing for homes and offices.',
      navTitle: 'Navigation',
      infoTitle: 'Information',
      contactTitle: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      faq: 'FAQ',
      rights: 'Ilex Art. All rights reserved.',
    },
    ai: {
      header: 'Ilex Assistant',
      status: 'Online',
      placeholder: 'Ask about materials...',
      initialMsg: "Hello! I'm Ilex AI. How can I help you transform your space today?",
      responses: [
        "That's a great choice! Our premium canvas material would look stunning for that.",
        "Production usually takes 3-5 business days. Do you need express shipping?",
        "I can help you with the dimensions. Have you checked our Calculator page?",
        "We offer a 100% satisfaction guarantee on all our art prints."
      ]
    },
    portfolioItems: [
      { id: 1, title: "Misty Forest", category: "Nature", imageUrl: "https://picsum.photos/id/10/800/600" },
      { id: 2, title: "Urban Dreams", category: "Abstract", imageUrl: "https://picsum.photos/id/11/600/800" },
      { id: 3, title: "Golden Era", category: "Art", imageUrl: "https://picsum.photos/id/12/800/800" },
      { id: 4, title: "Wonderland", category: "Kids", imageUrl: "https://picsum.photos/id/13/800/500" },
      { id: 5, title: "Ocean Breeze", category: "Nature", imageUrl: "https://picsum.photos/id/14/600/900" },
      { id: 6, title: "Geometric Flow", category: "Abstract", imageUrl: "https://picsum.photos/id/15/800/600" },
      { id: 7, title: "Classic Portrait", category: "Art", imageUrl: "https://picsum.photos/id/16/600/600" },
      { id: 8, title: "Space Explorer", category: "Kids", imageUrl: "https://picsum.photos/id/17/800/600" },
      { id: 9, title: "Mountain Peak", category: "Nature", imageUrl: "https://picsum.photos/id/18/800/400" },
    ]
  },
  ru: {
    nav: {
      home: 'Главная',
      portfolio: 'Портфолио',
      materials: 'Материалы',
      calculator: 'Калькулятор',
      contact: 'Контакты',
    },
    hero: {
      title: 'Искусство на стене',
      subtitle: 'Премиальная стеновая печать, превращающая ваше пространство в шедевр цифрового мастерства.',
      calculateBtn: 'Рассчитать',
      portfolioBtn: 'В портфолио',
    },
    aboutSection: {
      title: 'Нужно видение, чтобы создать атмосферу',
      button: 'О студии',
      text: 'Творческая смелость питает выдающиеся интерьеры. Мы помогаем найти уникальность вашего пространства и запечатлеть эту историю с помощью широкоформатной печати.',
    },
    advantages: {
      quality: { title: 'Премиум Качество', text: 'Материалы музейного уровня и технологии печати высокой четкости.' },
      delivery: { title: 'Быстрая Доставка', text: 'От производства до вашей двери за 3-5 рабочих дней.' },
      design: { title: 'Уникальный Дизайн', text: 'Индивидуальные размеры и эксклюзивные коллекции.' },
    },
    homeCategories: {
      title: 'Популярные категории',
      subtitle: 'Исследуйте наши самые востребованные коллекции.',
      viewAll: 'Все работы',
      explore: 'Смотреть коллекцию',
      names: { 
        abstract: 'Абстракция', 
        nature: 'Природа', 
        urban: 'Урбан',
        classic: 'Классика',
        minimalism: 'Минимализм',
        textures: 'Текстуры'
      },
    },
    statsSection: {
      projects: { label: "Нами произведено", number: 1243, suffix: "", subtext: "арт-инсталляций" },
      warranty: { title: "Пожизненная гарантия", description: "Наши принты устойчивы к выцветанию и механическим воздействиям. Мы гарантируем сохранение яркости цветов на протяжении 20 лет." },
      service: { title: "Сервисное обслуживание", description: "От бесплатной консультации до монтажа в белых перчатках. Мы берем на себя весь процесс." },
      team: { label: "Опыт команды", number: 10, suffix: "+", subtext: "лет в дизайне" },
    },
    testimonials: {
      title: 'Отзывы клиентов',
      items: [
        {
          id: 1,
          name: "Сара Дженкинс",
          role: "Дизайнер интерьеров",
          text: "Ilex Art преобразили пентхаус моего клиента. Текстура цифровой фрески неотличима от ручной росписи. По-настоящему премиальный сервис.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
          id: 2,
          name: "Михаил Чен",
          role: "Владелец отеля",
          text: "Нам нужно было долговечное решение для лобби, которое выглядело бы художественно. Виниловые принты невероятны — моющиеся, но яркие. И быстрая доставка.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          id: 3,
          name: "Елена Вострова",
          role: "Домовладелец",
          text: "AI-ассистент помог мне рассчитать точную стоимость, и результат точно такой же, как на превью. Моя гостиная наконец-то кажется завершенной.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
      ]
    },
    portfolio: {
      title: 'Наша Галерея',
      subtitle: 'Откройте для себя нашу коллекцию настенного искусства. Каждая работа напечатана с точностью, чтобы оживить ваше пространство.',
      all: 'Все',
      categories: { Nature: 'Природа', Abstract: 'Абстракция', Art: 'Арт', Kids: 'Детские' },
    },
    materials: {
      title: 'Технологии и Материалы',
      subtitle: 'Мы используем только лучшие основы и передовые технологии печати, чтобы ваше искусство выдержало испытание временем.',
      faqTitle: 'Часто задаваемые вопросы',
      pricePerSqm: '/ м²',
      items: [
        {
          id: "canvas",
          name: "Премиум Холст",
          description: "Высококачественный хлопковый холст с текстурой, идеально подходит для художественных репродукций.",
          pricePerSqm: 45,
          features: ["Текстурная поверхность", "Музейное качество", "Матовый финиш"],
        },
        {
          id: "vinyl",
          name: "Самоклеящийся Винил",
          description: "Прочный и моющийся материал, идеально подходит для современных интерьеров и коммерческих помещений.",
          pricePerSqm: 30,
          features: ["Гладкое покрытие", "Водостойкий", "Легко моется"],
        },
        {
          id: "fresco",
          name: "Цифровая Фреска",
          description: "Материал с эффектом штукатурки, имитирующий традиционные техники настенной росписи.",
          pricePerSqm: 65,
          features: ["Текстура штукатурки", "Уникальный вид", "Премиальные ощущения"],
        },
        {
          id: "non-woven",
          name: "Флизелиновые Обои",
          description: "Экологичный дышащий материал, легко наносится и снимается.",
          pricePerSqm: 35,
          features: ["Экологичность", "Дышащий материал", "Легкое нанесение"],
        },
      ],
      faqs: [
        { question: 'Насколько долговечна печать?', answer: 'Мы используем УФ-стойкие чернила, которые предотвращают выцветание до 20 лет в помещении.' },
        { question: 'Можно ли мыть обои?', answer: 'Да, наши виниловые и флизелиновые материалы можно мыть влажной мягкой тканью.' },
        { question: 'Экологичен ли материал?', answer: 'Мы используем нетоксичные чернила на латексной основе и предлагаем варианты без ПВХ, безопасные для детских комнат.' },
        { question: 'Нужен ли профессиональный монтаж?', answer: 'Хотя наши материалы просты в нанесении, мы рекомендуем профессиональный монтаж для больших панорамных стен для идеального стыка.' }
      ]
    },
    calculator: {
      title: 'Рассчитать проект',
      subtitle: 'Введите размеры стены и выберите материал, чтобы получить мгновенную оценку стоимости.',
      width: 'Ширина (м)',
      height: 'Высота (м)',
      material: 'Материал',
      uploadTitle: 'Загрузить изображение (опционально)',
      uploadText: 'Нажмите для загрузки или перетащите файл',
      uploadHint: 'JPG, PNG до 10МБ',
      summaryTitle: 'Итог заказа',
      dimensions: 'Размеры',
      area: 'Общая площадь',
      estimatedTotal: 'Примерная стоимость',
      requestBtn: 'Запросить расчет',
      disclaimer: '*Окончательная цена может варьироваться в зависимости от качества изображения и доставки.',
    },
    contact: {
      title: 'Связаться с нами',
      subtitle: 'У вас есть индивидуальный проект? Наша команда специалистов готова помочь воплотить ваше видение в жизнь.',
      infoTitle: 'Контактная информация',
      studio: 'Наш офис',
      phone: 'Телефон',
      email: 'Email',
      formName: 'Имя',
      formEmail: 'Email',
      formPhone: 'Телефон',
      formMessage: 'Сообщение',
      sendBtn: 'Отправить',
      success: 'Сообщение успешно отправлено! Мы скоро свяжемся с вами.',
    },
    footer: {
      brandText: 'Превращаем пространства в иммерсивный опыт искусства. Премиальная настенная печать для домов и офисов.',
      navTitle: 'Навигация',
      infoTitle: 'Информация',
      contactTitle: 'Контакты',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      faq: 'FAQ',
      rights: 'Ilex Art. Все права защищены.',
    },
    ai: {
      header: 'Ассистент Ilex',
      status: 'Онлайн',
      placeholder: 'Спросите о материалах...',
      initialMsg: "Здравствуйте! Я Ilex AI. Как я могу помочь вам преобразить ваше пространство сегодня?",
      responses: [
        "Отличный выбор! Наш премиальный холст будет смотреться потрясающе.",
        "Производство обычно занимает 3-5 рабочих дней. Вам нужна экспресс-доставка?",
        "Я могу помочь с размерами. Вы уже пробовали наш Калькулятор?",
        "Мы предоставляем 100% гарантию качества на все наши художественные принты."
      ]
    },
    portfolioItems: [
      { id: 1, title: "Туманный Лес", category: "Природа", imageUrl: "https://picsum.photos/id/10/800/600" },
      { id: 2, title: "Городские Мечты", category: "Абстракция", imageUrl: "https://picsum.photos/id/11/600/800" },
      { id: 3, title: "Золотая Эра", category: "Арт", imageUrl: "https://picsum.photos/id/12/800/800" },
      { id: 4, title: "Страна Чудес", category: "Детские", imageUrl: "https://picsum.photos/id/13/800/500" },
      { id: 5, title: "Океанский Бриз", category: "Природа", imageUrl: "https://picsum.photos/id/14/600/900" },
      { id: 6, title: "Геометрический Поток", category: "Абстракция", imageUrl: "https://picsum.photos/id/15/800/600" },
      { id: 7, title: "Классический Портрет", category: "Арт", imageUrl: "https://picsum.photos/id/16/600/600" },
      { id: 8, title: "Космический Странник", category: "Детские", imageUrl: "https://picsum.photos/id/17/800/600" },
      { id: 9, title: "Горная Вершина", category: "Природа", imageUrl: "https://picsum.photos/id/18/800/400" },
    ]
  }
};
