/**
 * Project type definition for portfolio projects
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  featured?: boolean;
  links?: {
    github?: string;
    demo?: string;
    caseStudy?: string;
  };
}
