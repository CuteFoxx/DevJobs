interface Job {
  apply: string;
  company: string;
  contract: string;
  description: string;
  id: number;
  location: string;
  logo: string;
  logoBackground: string;
  position: string;
  posted: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

export interface JobsState {
  value: Job[];
}
