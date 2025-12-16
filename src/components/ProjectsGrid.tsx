"use client";
import { SimpleGrid, Box } from "@mantine/core";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/types/project";
import classes from "./ProjectsGrid.module.css";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box ref={ref}>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {projects.map((project, index) => (
          <Box
            key={project.id}
            className={classes.projectCardWrapper}
            data-visible={isIntersecting}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <ProjectCard project={project} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
