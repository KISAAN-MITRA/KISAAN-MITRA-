// Enhanced mock data with e-commerce functionality

// Previous exports remain the same
export const productSpecs = [
  { parameter: "Battery Backup", specification: "5–6 hours" },
  { parameter: "Charging Time", specification: "~4.5 hours" },
  { parameter: "Cutting Height", specification: "1.5–3 inches" },
  { parameter: "Machine Weight", specification: "142–178 kg" },
  { parameter: "Power Supply", specification: "Standard 3-pin socket" },
  { parameter: "Battery Type", specification: "Swappable" },
];

export const supportedCrops = [
  "Wheat",
  "Paddy",
  "Maize",
  "Soybean",
  "Chickpea",
  "Jowar",
  "Millets",
  "Coriander",
];

export const keyBenefits = [
  "Reduce harvesting cost up to 75%",
  "Faster harvesting cycles",
  "Operates without diesel",
  "Low maintenance",
];

export const valueMetrics = [
  { value: "₹1,200 / acre", label: "vs ₹5,000 manual" },
  { value: "4-5 Acres / Charge", label: "Single operator" },
  { value: "21,000+", label: "Livelihoods impacted" },
];

export const unitEconomics = [
  { metric: "Manual Harvest Cost", value: "₹5,000 / acre" },
  { metric: "Kisaan Mitra Cost", value: "₹1,200 / acre" },
  { metric: "Savings", value: "₹3,800 / acre" },
];

export const impactMetrics = [
  { value: "21,000+", label: "Livelihoods Impacted" },
  { value: "1.12 Cr", label: "Litres Diesel Savings/Year" },
  { value: "2.85 Cr kg", label: "CO₂ Reduction/Year" },
  { value: "45 Lakh", label: "Acres Parali Burning Reduction" },
];

// Updated Why Kisaan Mitra
export const whyKisaanMitra = [
  {
    title: "Built for 85% small farmers in India",
    description: "Designed specifically for sub-5 acre plots.",
  },
  {
    title: "Modular hardware platform",
    description: "Expandable SKUs for multiple farming needs.",
  },
  {
    title: "EV-first → policy aligned",
    description: "Zero emissions, zero diesel dependency.",
  },
  {
    title: "Future-ready with AI",
    description: "Smart sensors and autonomous capabilities.",
  },
];

export const ownVsRentPoints = [
  "Guaranteed availability during peak season",
  "Lower long-term cost",
  "Opportunity to generate rental income",
  "No dependency on external operators",
];

export const problemPoints = [
  "Labour shortages",
  "High harvesting costs",
  "Large machines unsuitable for small farms",
  "Harvest delays reduce income",
];

export const solutionPoints = [
  "Affordable EV-powered reaper",
  "Designed for small landholdings",
  "Reduces labour dependency",
  "Fast and efficient harvesting",
];

// E-COMMERCE DATA
export const products = {
  reaper: {
    id: "ev-reaper-base",
    name: "KISAAN MITRA EV Reaper",
    tagline: "Base Platform",
    price: 220000,
    gstPercent: 12,
    description: "India's first compact EV reaper for small farms",
    image: "https://customer-assets.emergentagent.com/job_kisaan-mitra-rebuild/artifacts/zg968nxs_ChatGPT%20Image%20Mar%2023%2C%202026%2C%2009_42_08%20AM.png",
    features: [
      "5-6 hour battery backup",
      "Multi-crop compatible",
      "142-178 kg lightweight design",
      "4-5 acres/charge capacity",
      "Swappable battery system",
    ],
    inStock: true,
  },
};

export const modularAttachments = [
  {
    id: "sprayer",
    name: "T-Shape Sprayer",
    icon: "Droplet",
    status: "coming_soon",
    description: "Precision spraying attachment",
  },
  {
    id: "tiller",
    name: "Tiller",
    icon: "Settings",
    status: "coming_soon",
    description: "Soil preparation module",
  },
  {
    id: "rotavator",
    name: "Rotavator",
    icon: "Settings",
    status: "coming_soon",
    description: "Advanced soil tilling",
  },
  {
    id: "mulcher",
    name: "Mulching Unit",
    icon: "Leaf",
    status: "coming_soon",
    description: "Crop residue management",
  },
];

export const purchaseOptions = [
  {
    id: "full-purchase",
    title: "Direct Purchase",
    description: "Own the equipment outright",
    amount: 220000,
    type: "full",
  },
  {
    id: "vle-token",
    title: "VLE Program",
    description: "Village Level Entrepreneur - Token deposit",
    amount: 50000,
    type: "token",
    badge: "For Entrepreneurs",
  },
  {
    id: "financing",
    title: "Request Financing",
    description: "Flexible payment options available",
    type: "financing",
  },
];

// Gen-2 Features
export const gen2Features = [
  {
    title: "Soil Sensing System",
    description: "Real-time soil type detection",
    icon: "Microscope",
  },
  {
    title: "Adaptive Motor Control",
    description: "Auto-adjusts based on soil conditions",
    icon: "Cpu",
  },
  {
    title: "Dynamic Wheel Speed",
    description: "Optimal speed for terrain type",
    icon: "Gauge",
  },
  {
    title: "Crop-Specific Tuning",
    description: "Performance optimized per crop",
    icon: "Sliders",
  },
  {
    title: "Semi-Autonomous Navigation",
    description: "AI-powered path planning",
    icon: "Navigation",
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Ramesh Patil",
    location: "Nanded District, Maharashtra",
    avatar: "RP",
    rating: 5,
    text: "KISAAN MITRA transformed my farming. I save ₹15,000 every harvest season and complete work 3x faster than manual labor.",
    acres: "4-5 acres",
    crop: "Wheat & Soybean",
    videoUrl: "#", // Placeholder
  },
  {
    id: 2,
    name: "Sunita Deshmukh",
    location: "Nanded District, Maharashtra",
    avatar: "SD",
    rating: 5,
    text: "No more dependency on laborers. I can harvest at the right time and my yield quality has improved significantly.",
    acres: "3 acres",
    crop: "Paddy",
    videoUrl: "#", // Placeholder
  },
  {
    id: 3,
    name: "Vijay Kharat",
    location: "Nanded District, Maharashtra",
    avatar: "VK",
    rating: 5,
    text: "Best investment for small farmers. The EV technology means zero diesel cost and the machine pays for itself in 2 seasons.",
    acres: "5 acres",
    crop: "Maize",
    videoUrl: "#", // Placeholder
  },
];

// SDG Goals
export const sdgGoals = [
  { number: 2, name: "Zero Hunger", color: "#DDA63A" },
  { number: 7, name: "Clean Energy", color: "#FCC30B" },
  { number: 8, name: "Economic Growth", color: "#A21942" },
  { number: 13, name: "Climate Action", color: "#3F7E44" },
];

// Mock functions
export const submitDemoRequest = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Demo request submitted:", formData);
      resolve({ success: true, message: "Demo request submitted successfully!" });
    }, 1000);
  });
};

export const submitPartnerRequest = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Partner request submitted:", formData);
      resolve({ success: true, message: "Partnership request submitted successfully!" });
    }, 1000);
  });
};

export const createOrder = async (orderData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order created:", orderData);
      resolve({
        success: true,
        orderId: `ORD${Date.now()}`,
        message: "Order created successfully!",
      });
    }, 1000);
  });
};

export const calculateSavings = (landSize, cropsPerYear = 2) => {
  const savingsPerAcre = 3800;
  const annualSavings = landSize * savingsPerYear * cropsPerYear;
  const roi = Math.ceil((220000 + (220000 * 0.18)) / annualSavings);
  return {
    annualSavings,
    monthlyEquivalent: Math.ceil(annualSavings / 12),
    roi,
    breakEvenMonths: roi * 12,
  };
};

// WhatsApp
export const WHATSAPP_NUMBER = "917400543121";
export const WHATSAPP_MESSAGE = "Hi, I'm interested in KISAAN MITRA EV Reaper. Please provide more details.";

// Contact Info
export const CONTACT_INFO = {
  email: "queries@kisaanmitra.in",
  phone: "+91 7400543121",
  whatsapp: "917400543121",
  linkedin: "https://www.linkedin.com/company/111980153",
};
