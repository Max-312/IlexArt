
export type Language = 'en' | 'ru';

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Material {
  id: string;
  name: string;
  description: string;
  pricePerSqm: number;
  features: string[];
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface NavLink {
  path: string;
  label: string;
}
