"use client";

import { useEffect, useState, useRef } from "react";
import {
  Group,
  Burger,
  Drawer,
  Stack,
  Anchor,
  Text,
  Container,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navigation.module.css";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [activeSection, setActiveSection] = useState("home");

  // Use ref to avoid recreating observer when activeSection changes
  const activeSectionRef = useRef(activeSection);

  // Keep ref in sync with state
  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  // Track which section is currently in view while scrolling
  useEffect(() => {
    const sections = navLinks.map((link) => ({
      id: link.href.substring(1),
      element: document.getElementById(link.href.substring(1)),
    }));

    // Store all currently intersecting entries
    const intersectingEntries = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        // Update the map with current intersection states
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingEntries.set(entry.target.id, entry);
          } else {
            intersectingEntries.delete(entry.target.id);
          }
        });

        // Find the section with the highest intersection ratio (most visible)
        let maxRatio = 0;
        let mostVisibleSection = activeSectionRef.current; // Use ref instead of state

        intersectingEntries.forEach((entry, id) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = id;
          }
        });

        // Only update if we found an intersecting section and it's different
        if (
          intersectingEntries.size > 0 &&
          mostVisibleSection !== activeSectionRef.current
        ) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        rootMargin: "-100px 0px -66% 0px", // Section must be in top third
        threshold: [0, 0.25, 0.5, 0.75, 1.0], // Reduced thresholds for better performance
      }
    );

    sections.forEach((section) => {
      if (section.element) {
        observer.observe(section.element);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.element) {
          observer.unobserve(section.element);
        }
      });
      intersectingEntries.clear();
    };
  }, []); // Empty dependency array - observer created only once!

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      close();
    }
  };

  return (
    <>
      <header className={classes.header}>
        <Container size="xl">
          <Group justify="space-between" h={64}>
            <Text
              size="xl"
              fw={600}
              c="white"
              className={classes.logo}
              onClick={() => handleNavClick("#home")}
              style={{ cursor: "pointer" }}
            >
              Your Name
            </Text>

            {/* Desktop Navigation */}
            <Group gap="xl" visibleFrom="sm">
              {navLinks.map((link) => (
                <Anchor
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={classes.navLink}
                  data-active={activeSection === link.href.substring(1)}
                  c="dimmed"
                >
                  {link.label}
                </Anchor>
              ))}
            </Group>

            {/* Mobile Burger */}
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              color="var(--mantine-color-text)"
            />
          </Group>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title={
          <Text size="xl" fw={600} c="white">
            Menu
          </Text>
        }
        hiddenFrom="sm"
        zIndex={1000}
      >
        <Stack gap="lg" mt="xl">
          {navLinks.map((link) => (
            <Anchor
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={classes.mobileNavLink}
              data-active={activeSection === link.href.substring(1)}
              size="lg"
              c="dimmed"
            >
              {link.label}
            </Anchor>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
