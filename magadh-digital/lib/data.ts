import type { LucideIcon } from "lucide-react";
import {
  Brush,
  Camera,
  Car,
  Clapperboard,
  Code2,
  Film,
  Globe2,
  Megaphone,
  MousePointerClick,
  Orbit,
  Sparkles,
  Target
} from "lucide-react";

export type PortfolioCategory =
  | "All"
  | "Restaurants"
  | "Cafes"
  | "Automotive"
  | "Corporate"
  | "Branding";

export type PortfolioProject = {
  title: string;
  category: Exclude<PortfolioCategory, "All">;
  image: string;
  client: string;
  year: string;
  format: string;
  mood: string;
  description: string;
  stats: string[];
};

export type Service = {
  title: string;
  icon: LucideIcon;
  description: string;
  accent: string;
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Automotive", href: "#automotive" },
  { label: "Contact", href: "#contact" }
];

export const services: Service[] = [
  {
    title: "Social Media Management",
    icon: Orbit,
    accent: "from-electric to-violet",
    description:
      "Campaign calendars, brand voice, visual systems and daily publishing for premium local brands."
  },
  {
    title: "Reel Editing",
    icon: Film,
    accent: "from-orange to-violet",
    description:
      "Cinematic edits with rhythm, pacing, typography and color that turn scrolls into attention."
  },
  {
    title: "Branding",
    icon: Brush,
    accent: "from-violet to-orange",
    description:
      "Identity, launch visuals, menu systems and content direction built for instant recall."
  },
  {
    title: "Website Development",
    icon: Code2,
    accent: "from-electric to-orange",
    description:
      "High-performance digital experiences with motion, responsive craft and conversion flows."
  },
  {
    title: "Meta Ads",
    icon: MousePointerClick,
    accent: "from-orange to-electric",
    description:
      "Audience strategy, creative testing and performance campaigns for measurable growth."
  },
  {
    title: "Automotive Shoots",
    icon: Car,
    accent: "from-violet to-electric",
    description:
      "Low-angle, speed-driven, cinematic car and motorcycle content with dramatic post-production."
  }
];

export const stats = [
  { value: 35, suffix: "+", label: "campaign assets shipped" },
  { value: 12, suffix: "+", label: "brands and launches shaped" },
  { value: 6, suffix: "x", label: "faster short-form content cycles" },
  { value: 1, suffix: "studio", label: "from Patna, building globally" }
];

export const portfolioCategories: PortfolioCategory[] = [
  "All",
  "Restaurants",
  "Cafes",
  "Automotive",
  "Corporate",
  "Branding"
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Kritant Future Formula",
    category: "Corporate",
    image: "/portfolio/kritant-future-formula-glow.jpg",
    client: "Kritant Pvt Ltd",
    year: "2026",
    format: "Event campaign identity",
    mood: "Neon innovation, youth-first, high energy",
    description:
      "A futuristic launch visual system for a young-innovator platform, blending tech glow, product-thinking and clear registration hierarchy.",
    stats: ["Launch creative", "Poster system", "Event registration"]
  },
  {
    title: "Kritant Tech Poster",
    category: "Branding",
    image: "/portfolio/kritant-future-formula-tech.jpg",
    client: "Kritant Pvt Ltd",
    year: "2026",
    format: "Digital announcement",
    mood: "AI, robotics, electric blue interface",
    description:
      "A sharper sci-fi communication piece designed to make a regional innovation event feel expansive, modern and future-ready.",
    stats: ["Social creative", "Tech visual language", "QR-led CTA"]
  },
  {
    title: "Tao Bao Cafe Ramen",
    category: "Restaurants",
    image: "/portfolio/tao-bao-ramen.jpg",
    client: "Tao Bao Cafe Patna",
    year: "2026",
    format: "Food reel frame",
    mood: "Top-shot, vivid, appetite-led",
    description:
      "An overhead food composition built for reel pacing, menu desirability and fast social recall.",
    stats: ["Food styling", "Reel edit", "Menu storytelling"]
  },
  {
    title: "Cafe Zodiac Saguna",
    category: "Cafes",
    image: "/portfolio/cafe-zodiac-interior-dining.jpg",
    client: "Cafe Zodiac Saguna",
    year: "2026",
    format: "Dining experience content",
    mood: "Warm interior, lifestyle, premium casual",
    description:
      "Restaurant atmosphere and table content designed to make the venue feel active, polished and visit-worthy.",
    stats: ["Venue content", "Food reels", "Social media"]
  },
  {
    title: "Cafe Zodiac Kankarbagh",
    category: "Cafes",
    image: "/portfolio/cafe-zodiac-food-table.jpg",
    client: "Cafe Zodiac Kankarbagh",
    year: "2026",
    format: "Food campaign frame",
    mood: "Bright plates, sharp shadows, expressive food typography",
    description:
      "A punchy content direction for food discovery, using bold light and dish-first framing for social performance.",
    stats: ["Content shoot", "Reel overlays", "Cafe branding"]
  },
  {
    title: "Royal Enfield Road Reel",
    category: "Automotive",
    image: "/portfolio/royal-enfield-road.jpg",
    client: "Royal Enfield shoot",
    year: "2026",
    format: "Cinematic motorcycle reel",
    mood: "Low angle, moody road, motion tension",
    description:
      "A road-first cinematic motorcycle treatment with dark grade, punchy cuts and rider-led drama.",
    stats: ["Automotive reel", "Cinematic grade", "Motion cuts"]
  },
  {
    title: "Mahindra XUV Dust Shot",
    category: "Automotive",
    image: "/portfolio/mahindra-xuv-dust.jpg",
    client: "Mahindra XUV cinematic content",
    year: "2026",
    format: "SUV action reel",
    mood: "Dust, weight, impact, road presence",
    description:
      "An SUV power sequence built around ground-level composition, moving dust and commanding scale.",
    stats: ["SUV reel", "Location shoot", "Performance edit"]
  },
  {
    title: "Automobile Hero Frame",
    category: "Automotive",
    image: "/portfolio/royal-enfield-xuv-hero.jpg",
    client: "Automobile cinematic reels",
    year: "2026",
    format: "Hero campaign visual",
    mood: "Black machine, open road, Patna sun",
    description:
      "A high-impact hero composition pairing motorcycle attitude with SUV presence for cinematic brand recall.",
    stats: ["Hero frame", "Reel cover", "Automotive art direction"]
  }
];

export const testimonials = [
  {
    quote:
      "Magadh Digital made our campaign look bigger than the city. The visuals felt premium and the message stayed clear.",
    name: "Kritant Team",
    role: "Corporate campaign"
  },
  {
    quote:
      "Their food reels made the menu feel alive. The edits had pace, color and the right social energy.",
    name: "Cafe Zodiac",
    role: "Restaurant content"
  },
  {
    quote:
      "The automotive frames had that cinematic punch we wanted: road, speed, light and attitude.",
    name: "Automotive Client",
    role: "Cinematic shoot"
  }
];

export const capabilities = [
  { icon: Target, label: "Strategy-led creative systems" },
  { icon: Clapperboard, label: "Cinematic short-form production" },
  { icon: Camera, label: "On-ground shoots across Patna" },
  { icon: Globe2, label: "Modern websites and launch funnels" },
  { icon: Megaphone, label: "Growth campaigns and social presence" },
  { icon: Sparkles, label: "Brand worlds that feel expensive" }
];

export const contactLinks = {
  phone: "+91 6280200778",
  phoneHref: "tel:+916280200778",
  email: "magadhdigitalsolutions@gmail.com",
  mailto: "mailto:magadhdigitalsolutions@gmail.com",
  whatsapp: "https://wa.me/916280200778",
  instagram: "https://www.instagram.com/magadhdigital/"
};
