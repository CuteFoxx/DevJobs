export interface JobInterface {
  website: string;
  apply: string;
  company: string;
  contract: string;
  description: string;
  id: number;
  location: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}
