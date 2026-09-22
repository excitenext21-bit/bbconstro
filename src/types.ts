export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  suitability: string[];
}

export interface AMCPlan {
  id: string;
  name: string;
  visits: string;
  coverage: string;
  details: string[];
  recommendedFor: string;
  badge?: string;
  popular?: boolean;
}

export interface CaseStudy {
  id: string;
  number: string;
  client: string;
  location: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  areaCovered: string;
  capacity: string;
  image: string;
  featuredStat: {
    label: string;
    value: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  rating: number;
  projectType: string;
  avatar: string;
}

export interface ClientLogo {
  name: string;
  sector: string;
  symbol: string;
  accentColor: string;
}

export interface BookingFormData {
  bookingId?: string;
  serviceCategory: 'emergency' | 'repair' | 'amc' | 'new_install' | 'consultancy';
  systemType: string;
  puneArea: string;
  urgency: 'immediate' | 'today' | 'flexible';
  clientName: string;
  companyName?: string;
  phone: string;
  email: string;
  address: string;
  preferredDate: string;
  preferredTimeSlot: string;
  description: string;
  estimatedTonnage?: string;
}

export interface StatutoryInfo {
  companyName: string;
  director: string;
  natureOfBusiness: string;
  registeredAddress: string;
  officeAddress: string;
  teamSize: string;
  pan: string;
  gstin: string;
  empCode: string;
  pfEstId: string;
  phone: string;
  email: string;
  website: string;
  bankDetails: {
    bankName: string;
    accountNo: string;
    ifsc: string;
    branch: string;
  };
}

export type ActivePage = 'home' | 'about' | 'services' | 'projects' | 'amc' | 'faqs' | 'contact' | 'privacy' | 'terms' | 'statutory';
