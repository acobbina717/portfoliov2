"use client";

import {
  Container,
  Group,
  Text,
  ActionIcon,
  Stack,
  Divider,
  Anchor,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandTwitter,
  IconArrowUp,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: IconBrandGithub,
      label: "GitHub",
      href: "https://github.com/yourusername",
    },
    {
      icon: IconBrandLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
    },
    {
      icon: IconMail,
      label: "Email",
      href: "mailto:your.email@example.com",
    },
    {
      icon: IconBrandTwitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
    },
  ];

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className={classes.footer}>
      <Container size="xl">
        <Stack gap="xl">
          {/* Main Footer Content */}
          <Group justify="space-between" align="flex-start" wrap="wrap">
            {/* Brand Section */}
            <Stack gap="sm" style={{ flex: 1, minWidth: "200px" }}>
              <Text size="xl" fw={600} className={classes.brandText}>
                Your Name
              </Text>
              <Text size="sm" c="dimmed" maw={300}>
                Full Stack Developer crafting beautiful and functional web
                experiences.
              </Text>
            </Stack>

            {/* Quick Links */}
            <Stack gap="sm" style={{ minWidth: "120px" }}>
              <Text size="sm" fw={600} c="white">
                Quick Links
              </Text>
              {footerLinks.map((link) => (
                <Anchor
                  key={link.href}
                  size="sm"
                  c="dimmed"
                  className={classes.footerLink}
                  onClick={() => scrollToSection(link.href)}
                >
                  {link.label}
                </Anchor>
              ))}
            </Stack>

            {/* Social Links */}
            <Stack gap="sm" style={{ minWidth: "120px" }}>
              <Text size="sm" fw={600} c="white">
                Connect
              </Text>
              <Group gap="xs">
                {socialLinks.map((social) => (
                  <ActionIcon
                    key={social.label}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    radius="md"
                    variant="subtle"
                    color="gray"
                    className={classes.socialIcon}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </ActionIcon>
                ))}
              </Group>
            </Stack>
          </Group>

          <Divider color="dark.5" />

          {/* Copyright Section */}
          <Group justify="space-between" wrap="wrap">
            <Text size="sm" c="dimmed">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </Text>
            <Group gap="md">
              <Text size="sm" c="dimmed">
                Built with Next.js & Mantine
              </Text>
            </Group>
          </Group>
        </Stack>
      </Container>

      {/* Back to Top Button */}
      <ActionIcon
        size={48}
        radius="md"
        variant="filled"
        color="teal"
        className={classes.backToTop}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <IconArrowUp size={24} />
      </ActionIcon>
    </footer>
  );
}
