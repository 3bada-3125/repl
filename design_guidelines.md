# MRC Jordan - Minoan Robotsports Competition Design Guidelines

## Design Approach
**Reference-Based Approach**: Modern robotics/sports competition website with energetic, youth-friendly vibe. NOT formal or corporate - think dynamic, sporty, and fun.

## Brand Identity & Colors

**Primary Palette:**
- Primary Red: `#d32f2f` (main brand color, used for CTAs, highlights, accents)
- Black: `#000000` (text, strong contrast elements)
- Dark Gray: `#1f1f1f` (footer, secondary backgrounds)
- Yellow Accent: `#fbc02d` (energy highlights, hover states, accent details)
- Light Background: `#f6f6f6` (main page background, clean sections)

**Color Usage:**
- Red for primary buttons, hero highlights, and category card accents
- Yellow for energy bursts, hover effects, and small accent details
- Dark gray/black for footers and text
- Light background for main content areas

## Typography

**Font Families:**
- **Headings**: Orbitron (robotic, futuristic feel)
- **Body Text**: Inter (clean, modern, readable)

**Hierarchy:**
- Hero title: Very large, bold, with red highlighted text portions
- Section headings: Orbitron, prominent sizing
- Body text: Inter, comfortable reading size
- Category cards: Bold titles with Orbitron

## Layout System

**Spacing**: Use Tailwind spacing units of 4, 6, 8, 12, 16, 20 for consistent rhythm

**Container Strategy:**
- Max-width containers for content sections
- Full-width hero and footer sections
- Comfortable padding on all sections (py-16 to py-20)

## Component Library

### Navigation
- Sticky navbar with smooth scroll behavior
- Simple, modern design with MRC branding
- Clean navigation links
- Transparent to slightly tinted background

### Hero Section
- Large, bold title with red accent text highlights
- Prominent call-to-action button (red background)
- Robot illustration placeholder (right side or integrated)
- Geometric shapes/patterns in background
- Energetic entrance animations

### About Section
- Clean, centered layout
- Short, engaging paragraph
- Subtle background patterns

### Categories Section (4 Cards)
- Marathon
- Wrestling 1kg
- Wrestling 3kg
- Pentathlon Arena

**Card Design:**
- Rounded corners (rounded-xl or rounded-2xl)
- Soft shadows
- Hover animations: scale effect (scale-105)
- Yellow accent on hover
- Icons or small graphics for each category
- Grid layout: 2x2 on desktop, stack on mobile

### Rules Section
- Bullet points list
- "Download Rulebook" button with hover effect
- Clean, scannable layout

### Sponsors Section
- Dashed border placeholder slot for main sponsor
- Multiple smaller partner tag elements
- Grid or flex layout

### Contact Section
- Phone numbers
- Email address
- Clean, accessible presentation

### Footer
- Minimal design
- Dark background (dark gray #1f1f1f)
- Essential links and copyright info

## Visual Elements

**Geometric Patterns:**
- Subtle robotic patterns in backgrounds (circuit lines, geometric grids)
- Light opacity, non-intrusive
- Scattered throughout sections for visual interest

**Cards & Shadows:**
- Rounded corners on all cards (rounded-lg to rounded-2xl)
- Soft box shadows (shadow-md to shadow-lg)
- Hover states with increased shadow

**Animations:**
- Anime.js for entrance animations
- Smooth transitions on all interactive elements
- Scale effects on hover (transform scale-105)
- Fade-in effects for section reveals
- Smooth scroll behavior

## Responsive Design

**Breakpoints:**
- Mobile: Stack all cards, full-width elements
- Tablet: 2-column grids where appropriate
- Desktop: Full 4-column category grid, multi-column layouts

**Mobile Optimizations:**
- Simplified navigation (hamburger menu if needed)
- Stacked card layouts
- Adjusted font sizes
- Maintained button prominence

## Images

**Hero Section:**
- Robot illustration placeholder (can be SVG graphic or image)
- Position: Right side of hero or integrated into design
- Style: Modern, sporty, energetic robot character

**Background Elements:**
- Geometric shapes and robotic patterns (subtle, low opacity)
- Circuit board inspired graphics (optional background texture)

## Interactive Elements

**Buttons:**
- Primary CTA: Red background (#d32f2f), white text, rounded
- Hover: Slight scale, yellow accent glow
- Download button: Similar treatment with download icon

**Cards:**
- Hover: Scale up slightly, increase shadow, yellow accent border/glow
- Smooth transitions (duration-300)

## Overall Vibe
Modern, energetic, robotic sports competition. Youth-friendly with clean design, smooth animations, and sporty energy. NOT corporate or overly formal - think dynamic tech meets athletics.