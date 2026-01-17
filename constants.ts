import { Material, PortfolioItem } from "./types";

export const MATERIALS: Material[] = [
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
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: "Misty Forest", category: "Nature", imageUrl: "https://picsum.photos/id/10/800/600" },
  { id: 2, title: "Urban Dreams", category: "Abstract", imageUrl: "https://picsum.photos/id/11/600/800" },
  { id: 3, title: "Golden Era", category: "Art", imageUrl: "https://picsum.photos/id/12/800/800" },
  { id: 4, title: "Wonderland", category: "Kids", imageUrl: "https://picsum.photos/id/13/800/500" },
  { id: 5, title: "Ocean Breeze", category: "Nature", imageUrl: "https://picsum.photos/id/14/600/900" },
  { id: 6, title: "Geometric Flow", category: "Abstract", imageUrl: "https://picsum.photos/id/15/800/600" },
  { id: 7, title: "Classic Portrait", category: "Art", imageUrl: "https://picsum.photos/id/16/600/600" },
  { id: 8, title: "Space Explorer", category: "Kids", imageUrl: "https://picsum.photos/id/17/800/600" },
  { id: 9, title: "Mountain Peak", category: "Nature", imageUrl: "https://picsum.photos/id/18/800/400" },
];
