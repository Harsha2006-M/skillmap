---
name: Professional Career Transition System
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#464555'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#712ae2'
  on-secondary: '#ffffff'
  secondary-container: '#8a4cfc'
  on-secondary-container: '#fffbff'
  tertiary: '#474751'
  on-tertiary: '#ffffff'
  tertiary-container: '#5f5f69'
  on-tertiary-container: '#dbdae5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5a00c6'
  tertiary-fixed: '#e3e1ed'
  tertiary-fixed-dim: '#c7c5d1'
  on-tertiary-fixed: '#1a1b23'
  on-tertiary-fixed-variant: '#46464f'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style

This design system is built to evoke a sense of calm confidence, clarity, and upward mobility. Target users are professionals navigating significant life changes; therefore, the UI must feel both encouraging and highly organized.

The aesthetic follows a **Modern Minimalist** movement with a "Premium SaaS" edge. It prioritizes generous whitespace to reduce cognitive load during the career search process. Visual interest is generated through high-fidelity gradients and subtle depth rather than decorative clutter. The brand personality is poised, expert, and relentlessly focused on the user's future.

## Colors

The palette revolves around a sophisticated transition from deep Indigo to Violet, symbolizing growth and transformation. 

- **Primary & Secondary:** These colors are used for high-impact moments: primary buttons, active progress states, and key brand accents.
- **Surface & Backgrounds:** We utilize "Soft White" (#FAFAFE) for the main canvas and "Pastel Violet" (#F5F3FF) for subtle grouping of content, such as card backgrounds or secondary sections.
- **Neutrals:** A slate-based neutral palette ensures text remains highly readable while maintaining a premium feel. Pure black is avoided in favor of deep navy-grays to keep the interface soft.

## Typography

This design system utilizes **Inter** exclusively to leverage its exceptional legibility and neutral, modern character. 

Hierarchy is established through weight and scale. Headlines use a tighter letter-spacing and semi-bold weights to appear "locked-in" and authoritative. Body copy uses a standard weight with a generous line height (1.5x-1.6x) to ensure long-form career advice or job descriptions are easy to digest. Labels and small metadata utilize a slightly higher font weight to maintain legibility against pastel backgrounds.

## Layout & Spacing

The system employs a **Fixed Grid** philosophy for desktop layouts to maintain a premium, editorial feel, while transitioning to a fluid model for mobile.

- **Grid:** A 12-column grid with 24px gutters is the standard for complex dashboards.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **White Space:** For "Premium" layouts, vertical section spacing should default to `lg` (40px) or `xl` (64px) to allow the content to breathe and signify a high-end user experience.

## Elevation & Depth

Depth is communicated through **Ambient Shadows** and **Tonal Layers** rather than harsh borders.

- **Surface Levels:** The base background is the lowest level. Cards and containers sit on "Level 1" with a soft, diffused shadow (15% opacity primary tint).
- **Shadow Character:** Shadows should have a large blur radius (20px-30px) and a subtle Y-offset to simulate a natural light source from above.
- **Glassmorphism:** For overlays like navigation bars or modal backdrops, a subtle background blur (8px-12px) with a semi-transparent white fill creates a sense of layering and high-end finish.

## Shapes

The shape language is approachable and modern, defined by **Rounded** corners. 

Standard components (buttons, inputs) use a 0.5rem (8px) radius. Larger containers, such as profile cards or featured content blocks, must use `rounded-lg` (16px) to emphasize the soft, premium aesthetic. Progress bar tracks and "pills" utilize fully rounded (pill-shaped) caps to differentiate them from structural layout elements.

## Components

### Cards
Cards are the primary container. They feature a white background, a 16px corner radius, and a soft shadow. On **hover**, cards should subtly lift (increase shadow spread) and scale (1.02x) with a `300ms cubic-bezier(0.4, 0, 0.2, 1)` transition.

### Buttons
- **Primary:** Features the Indigo-to-Violet gradient with white text.
- **Secondary:** Transparent background with a 1px soft-indigo border or a light pastel fill.
- **Shape:** 8px rounded corners for a professional look.

### Chips & Tags
Used for skills and categories. These use a 12px rounded corner (or pill-shape) with a `tertiary` pastel background and `primary` color text. No shadows on chips to keep them secondary to main cards.

### Progress Bars
Tracks are soft gray or pastel violet. The "fill" uses the brand gradient. The height should be thin (8px) for a minimal look, with a label indicating percentage progress placed above the bar.

### Input Fields
Inputs use a soft-white background with a subtle 1px border that glows into the primary indigo color when focused. Use a 12px corner radius to match the premium card style.