export interface ServiceItem {
  id: string;
  title: string;
  points: string[];
  iconName: string;
  description: string;
  imageUrl?: string;
}

export interface PhysioGalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  highlight: string;
}

export interface ConditionItem {
  name: string;
  category: 'Neurological' | 'Orthopedic' | 'Pain Management' | 'Elderly & Mobility';
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  patientInitials: string;
  condition: string;
  locationArea: string;
  feedbackText: string;
  sessionCount: string;
  isPlaceholderNotice: boolean;
}

export interface BookingFormData {
  name: string;
  phone: string;
  requirement: string;
  preferredDate: string;
  preferredTime: string;
  addressArea?: string;
  notes?: string;
}
