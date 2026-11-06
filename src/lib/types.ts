export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  year: string;
  role?: string;
  highlights?: string[];
}

export interface IProjectCard {
  project: IProject;
  index?: number;
}

export interface ICertificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  tags: string[];
  verifyUrl: string;
}
