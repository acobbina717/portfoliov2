import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "example-project-1",
    title: "Example Project 1",
    description:
      "A modern web application built with cutting-edge technologies. This project demonstrates best practices in React development and API integration.",
    thumbnail: "/projects/file.png",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/username/project-1",
      demo: "https://project-1.demo.com",
    },
  },
  {
    id: "example-project-2",
    title: "Example Project 2",
    description:
      "Full-stack application with real-time features and responsive design. Showcases advanced state management and database integration.",
    thumbnail: "/projects/file.png",
    techStack: ["Node.js", "Express", "PostgreSQL", "Socket.io"],
    links: {
      github: "https://github.com/username/project-2",
    },
  },
  {
    id: "example-project-3",
    title: "Example Project 3",
    description:
      "Mobile-first PWA with offline capabilities and push notifications. Optimized for performance and user experience.",
    thumbnail: "/projects/file.png",
    techStack: ["PWA", "Service Workers", "IndexedDB", "Web APIs"],
    links: {
      demo: "https://project-3.demo.com",
    },
  },
];
