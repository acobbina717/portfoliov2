"use client";

import {
  Container,
  Title,
  Text,
  Stack,
  SimpleGrid,
  Paper,
  Box,
} from "@mantine/core";
import { SkillsGrid } from "./SkillsGrid";
import classes from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section id="about" className={classes.section}>
      <Container size="xl">
        <Stack gap={64}>
          {/* Section Header */}
          <Stack gap="md" align="center" ta="center">
            <Title order={2} c="white" className={classes.sectionTitle}>
              About Me
            </Title>
            <div className={classes.titleUnderline}></div>
          </Stack>

          {/* Bio and Image */}
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={48}>
            {/* Profile Image Placeholder */}
            <Box className={classes.imageContainer}>
              <Paper
                className={classes.imagePlaceholder}
                p="xl"
                radius="md"
                withBorder
              >
                <Stack align="center" justify="center" h="100%">
                  <Text size="xl" c="dimmed" fw={500}>
                    Profile Image
                  </Text>
                  <Text size="sm" c="dimmed">
                    Add your photo here
                  </Text>
                </Stack>
              </Paper>
            </Box>

            {/* Bio Content */}
            <Stack gap="lg" justify="center">
              <Text size="lg" c="dimmed" className={classes.bioText}>
                I'm a passionate full-stack developer with a keen eye for design
                and user experience. With several years of experience in web
                development, I specialize in building modern, responsive, and
                performant applications.
              </Text>
              <Text size="md" c="dimmed" className={classes.bioText}>
                My approach combines clean code, best practices, and attention to
                detail to create exceptional digital experiences. I love solving
                complex problems and turning ideas into reality through code.
              </Text>
              <Text size="md" c="dimmed" className={classes.bioText}>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source projects, or sharing knowledge with
                the developer community.
              </Text>
            </Stack>
          </SimpleGrid>

          {/* Skills Section */}
          <Stack gap="xl">
            <Title order={3} c="white" ta="center">
              Skills & Technologies
            </Title>
            <SkillsGrid />
          </Stack>
        </Stack>
      </Container>
    </section>
  );
}
