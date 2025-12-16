import { Container, Title, Stack, Text } from "@mantine/core";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { projects } from "@/data/projects";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      <SectionDivider />

      {/* About Section */}
      <AboutSection />

      <SectionDivider />

      {/* Projects Section */}
      <section id="projects" className={classes.projectsSection}>
        <Container size="xl">
          <Stack gap={64}>
            <Stack gap="md" align="center" ta="center">
              <Title order={2} c="white" className={classes.sectionTitle}>
                Featured Projects
              </Title>
              <div className={classes.titleUnderline}></div>
              <Text size="lg" c="dimmed" maw={600}>
                A selection of my recent work and personal projects
              </Text>
            </Stack>
            <ProjectsGrid projects={projects} />
          </Stack>
        </Container>
      </section>

      <SectionDivider />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
