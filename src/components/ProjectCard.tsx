"use client";

import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  Stack,
  Anchor,
  Box,
} from "@mantine/core";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import { Project } from "@/types/project";
import classes from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, thumbnail, techStack, links, featured } = project;

  return (
    <Card
      shadow="sm"
      padding={0}
      radius="md"
      withBorder
      className={classes.card}
    >
      {featured && (
        <Badge
          color="amber"
          variant="filled"
          size="sm"
          className={classes.featuredBadge}
        >
          Featured
        </Badge>
      )}
      <Card.Section className={classes.imageSection}>
        <Box className={classes.imageWrapper}>
          <Image
            // src={thumbnail}
            height={200}
            alt={title}
            fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect width='400' height='200' fill='%231E2329'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%238A9099'%3EProject Image%3C/text%3E%3C/svg%3E"
            className={classes.image}
          />
          <Box className={classes.imageOverlay}>
            <Group gap="md" justify="center">
              {links?.demo && (
                <Anchor
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.overlayLink}
                >
                  <IconExternalLink size={24} />
                </Anchor>
              )}
              {links?.github && (
                <Anchor
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.overlayLink}
                >
                  <IconBrandGithub size={24} />
                </Anchor>
              )}
            </Group>
          </Box>
        </Box>
      </Card.Section>

      <Stack gap="md" p="lg">
        <Text fw={600} size="lg" c="white" className={classes.title}>
          {title}
        </Text>

        <Text
          size="sm"
          c="dimmed"
          lineClamp={3}
          className={classes.description}
        >
          {description}
        </Text>

        <Group gap="xs" className={classes.techStack}>
          {techStack.map((tech, index) => (
            <Badge
              key={index}
              color="teal"
              variant="light"
              size="sm"
              className={classes.badge}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {tech}
            </Badge>
          ))}
        </Group>

        {links && (links.github || links.demo || links.caseStudy) && (
          <Group gap="md" mt="xs" className={classes.links}>
            {links.github && (
              <Anchor
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                c="teal"
                className={classes.link}
              >
                GitHub
              </Anchor>
            )}
            {links.demo && (
              <Anchor
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                c="teal"
                className={classes.link}
              >
                Live Demo
              </Anchor>
            )}
            {links.caseStudy && (
              <Anchor
                href={links.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                c="teal"
                className={classes.link}
              >
                Case Study
              </Anchor>
            )}
          </Group>
        )}
      </Stack>
    </Card>
  );
}
