/**
 * Mantine Theme Configuration
 *
 * Implements the design system specified in docs/design-system.txt
 * with minimal overrides - only customizing what differs from Mantine defaults.
 *
 * @see docs/design-system.txt - Source of truth for design specifications
 * @see .cursor/rules/styling.mdc - AI guidelines for using this theme
 */

import { createTheme, MantineColorsTuple } from "@mantine/core";

/**
 * Teal Color Palette - Primary Accent
 * Base: #4FA3A5 (from design-system.txt)
 * Usage: CTAs, links, focus states, interactive elements
 */
const teal: MantineColorsTuple = [
  "#e6f7f7", // 0: Lightest - hover backgrounds
  "#b3e5e6", // 1: Very light - subtle backgrounds
  "#80d3d4", // 2: Light - borders, dividers
  "#4dc1c3", // 3: Medium-light - hover states
  "#4fa3a5", // 4: Base color (design-system.txt accent-primary)
  "#3d8284", // 5: Medium-dark - active states
  "#2e6163", // 6: Dark - pressed states
  "#1f4142", // 7: Darker - disabled states
  "#0f2021", // 8: Very dark - text on teal
  "#000f10", // 9: Darkest - high contrast text
];

/**
 * Amber Color Palette - Secondary Accent
 * Base: #C2A25D (from design-system.txt)
 * Usage: Warnings, secondary highlights, special elements
 */
const amber: MantineColorsTuple = [
  "#faf5ed", // 0: Lightest - hover backgrounds
  "#f0e4c8", // 1: Very light - subtle backgrounds
  "#e6d3a3", // 2: Light - borders, dividers
  "#dcc27e", // 3: Medium-light - hover states
  "#c2a25d", // 4: Base color (design-system.txt accent-secondary)
  "#9b824a", // 5: Medium-dark - active states
  "#746138", // 6: Dark - pressed states
  "#4d4125", // 7: Darker - disabled states
  "#262013", // 8: Very dark - text on amber
  "#0d0a06", // 9: Darkest - high contrast text
];

/**
 * Main Theme Configuration
 */
export const theme = createTheme({
  /**
   * Color System
   * Using custom teal and amber palettes for brand identity
   */
  colors: {
    teal,
    amber,
  },
  primaryColor: "teal",

  /**
   * Dark Theme Colors
   * Override to match design-system.txt specifications
   * Background: #121417, Surface: #1E2329
   */
  black: "#121417", // Primary background
  white: "#E6E8EB", // Primary text color

  /**
   * Typography - Font Families
   * Primary: Inter / SF Pro / IBM Plex Sans
   * Headings: Instrument Sans / Space Grotesk (optional)
   */
  fontFamily:
    "Inter, SF Pro, IBM Plex Sans, -apple-system, BlinkMacSystemFont, sans-serif",
  headings: {
    fontFamily:
      "Instrument Sans, Space Grotesk, Inter, SF Pro, -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: "600", // Semibold for all headings
    sizes: {
      // Custom heading sizes from design-system.txt
      h1: {
        fontSize: "40px",
        lineHeight: "1.2",
      },
      h2: {
        fontSize: "32px",
        lineHeight: "1.2",
      },
      h3: {
        fontSize: "24px",
        lineHeight: "1.3",
      },
      // h4-h6 use Mantine defaults (appropriate for this hierarchy)
    },
  },

  /**
   * Font Sizes
   * Using Mantine defaults (xs: 12px, sm: 14px, md: 16px, lg: 18px, xl: 20px)
   * These align well with design-system.txt specifications
   */
  // No override needed - Mantine defaults match our needs

  /**
   * Line Height
   * Using Mantine default of 1.55 for body text
   * This matches design-system.txt spec of 1.5-1.6
   */
  // No override needed

  /**
   * Spacing - Strict 8px Grid
   * Override to enforce 8px base unit system from design-system.txt
   * xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px
   */
  spacing: {
    xs: "4px", // Half unit (rare usage)
    sm: "8px", // Base unit
    md: "16px", // 2 units (most common)
    lg: "24px", // 3 units
    xl: "32px", // 4 units
  },

  /**
   * Border Radius
   * Default to 8px as specified in design-system.txt (6-8px range)
   */
  radius: {
    xs: "4px",
    sm: "6px",
    md: "8px", // Default radius
    lg: "12px",
    xl: "16px",
  },
  defaultRadius: "md", // 8px default

  /**
   * Breakpoints
   * Using Mantine defaults (xs: 36em, sm: 48em, md: 62em, lg: 75em, xl: 88em)
   * These are standard and work well for responsive design
   */
  // No override needed

  /**
   * Component Defaults
   * Configure specific components to match design system
   */
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1200, // Max content width from design-system.txt (1100-1200px)
        },
      },
    },
    Button: {
      defaultProps: {
        // Buttons use teal primary color by default
        color: "teal",
      },
    },
  },

  /**
   * Focus Ring Enhancement
   * Enhanced focus states with glow effect for better accessibility
   */
  focusRing: "always",
  focusClassName: "",

  /**
   * Other Theme Properties
   *
   * Not overriding:
   * - Transitions: Mantine's 150ms matches design-system.txt (120-160ms range)
   * - Shadows: Mantine defaults are appropriate
   * - Focus ring: Enhanced via focusRing setting and global CSS
   */

  /**
   * Additional Theme Utilities
   * Gradients are defined in CSS variables and used throughout components
   */
  other: {
    gradients: {
      primary: "linear-gradient(135deg, #4FA3A5, #C2A25D)",
      radial: "radial-gradient(circle, #4FA3A5, #C2A25D)",
    },
  },
});
