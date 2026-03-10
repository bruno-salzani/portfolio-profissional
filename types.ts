
export interface Project {
  title: string;
  date: string;
  link: string;
  category: 'QA' | 'Web' | 'Other';
  description?: string;
}

export interface Certification {
  title: string;
  date: string;
  issuer: string;
  link: string;
  category: string;
}

export interface Technology {
  name: string;
  icon?: string;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  description: string[];
  logo?: string;
}
