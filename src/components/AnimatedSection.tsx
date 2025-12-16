"use client";

import { Box } from "@mantine/core";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import classes from "./AnimatedSection.module.css";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      ref={elementRef}
      className={`${classes.section} ${isVisible ? classes.visible : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Box>
  );
}

