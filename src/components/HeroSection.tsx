"use client";

import { Container, Stack, Title, Text, Button, Group } from "@mantine/core";
import classes from "./HeroSection.module.css";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={classes.hero}>
      <Container size="xl">
        <Stack gap="xl" align="center" ta="center" className={classes.content}>
          <Title order={1} className={classes.gradientTitle}>
            Your Name
          </Title>

          <Text size="xl" c="dimmed" maw={600} className={classes.subtitle}>
            Full Stack Developer & Designer
          </Text>

          <Text size="md" c="dimmed" maw={700} className={classes.description}>
            Building modern web applications with clean code and beautiful
            design. Passionate about creating exceptional user experiences.
          </Text>

          <Group gap="md" mt="md" className={classes.ctaGroup}>
            <Button
              size="lg"
              color="teal"
              className={classes.primaryButton}
              onClick={() => scrollToSection("#projects")}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              color="teal"
              className={classes.secondaryButton}
              onClick={() => scrollToSection("#contact")}
            >
              Contact Me
            </Button>
          </Group>

          <div className={classes.scrollIndicator}>
            <div className={classes.mouse}>
              <div className={classes.wheel}></div>
            </div>
            <Text size="xs" c="dimmed" mt="xs">
              Scroll to explore
            </Text>
          </div>
        </Stack>
      </Container>
    </section>
  );
}
