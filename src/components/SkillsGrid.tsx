"use client";

import { Badge, SimpleGrid, Paper, Group } from "@mantine/core";
import classes from "./SkillsGrid.module.css";

// Define skill categories
const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Styling",
    skills: ["Mantine UI", "Tailwind", "CSS Modules", "Sass"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Vercel", "REST APIs"],
  },
];

export function SkillsGrid() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
      {skillCategories.map((category, idx) => (
        <Paper
          key={category.category}
          p="lg"
          radius="md"
          withBorder
          className={classes.categoryCard}
          style={{
            animationDelay: `${idx * 0.1}s`,
          }}
        >
          <Group gap="xs" mb="md">
            <Badge color="teal" variant="light" size="lg">
              {category.category}
            </Badge>
          </Group>
          <Group gap="xs">
            {category.skills.map((skill) => (
              <Badge
                key={skill}
                color="gray"
                variant="dot"
                size="md"
                className={classes.skillBadge}
              >
                {skill}
              </Badge>
            ))}
          </Group>
        </Paper>
      ))}
    </SimpleGrid>
  );
}
