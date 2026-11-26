# BRAND & DESIGN SPECIFICATION: JAYAKEERTHY PORTFOLIO
**Botanical Slate & Lime Editorial — Architecture, Typography, Motion Physics & Creative Manifesto**

---

## 1. Executive Thesis & Creative Manifesto

The portfolio of **Jayakeerthy (AIML Engineer & Full-Stack Developer)** is built around **Quiet Botanical Precision**: a crisp, daylight-first editorial workspace that lets real engineering artifacts, clean typography, and tactile physical simulations speak without visual noise.

### Core Pillars
1. **Editorial Clarity Over Visual Noise**:
   Inspired by architectural print and modern engineering studios, the interface pairs classic Didone serif headlines (`LTC Bodoni 175` / `Bodoni Moda`) with clean geometric sans-serif (`Plus Jakarta Sans`) and monospaced code metadata (`JetBrains Mono`).
2. **Restrained 4-Color Palette**:
   No arbitrary rainbows, no neon purple glows, no scattered gradients. Every surface, border, and interaction is derived from four calibrated colors.
3. **Purposeful Motion & Scroll Choreography**:
   Scroll-linked progress hairline, smooth exponential ease-out reveal transitions (`[0.16, 1, 0.3, 1]`), an interactive cursor-reactive dot wave canvas in the hero, and physical frosted-glass folder mechanics.
4. **Portfolio-First Information Architecture**:
   Projects lead immediately after the introduction, followed by a row-wise symbol toolkit, concise bio, milestones, credentials, and direct contact.

---

## 2. Color System & Surface Matrix

The visual system is strictly anchored to four core colors:

| Role | Hex Value | Usage & Application |
| :--- | :--- | :--- |
| **Warm Alabaster Sage** | `#F4F6F0` | Primary page canvas background, input backgrounds, nested summary panels |
| **Pure Crisp White** | `#FFFFFF` | Elevated cards, folder desk, profile card, row containers, modal frames |
| **Botanical Slate** | `#485550` | Primary structural accents, primary buttons, borders (`12%–20%` opacity), secondary copy, icon containers |
| **Deep Slate Ink** | `#1E2623` | High-contrast body headlines, active values, primary text (`>= 12:1` contrast on `#F4F6F0` and `#FFFFFF`) |
| **Muted Slate** | `#5C6B65` | Captions, file paths, inactive IDE tabs, metadata labels |
| **Botanical Lime** | `#C0EB6A` | Signature highlight accent: active status indicators, CGPA badge, award pills, hover tile highlights, cursor wave accent (always paired with `#1E2623` text for high WCAG contrast) |

---

## 3. Typography Architecture

1. **Primary Display & Interface Sans (`Neue Montreal`)**:
   - `PP Neue Montreal`, `Neue Montreal`, `DM Sans`, `system-ui`
   - Used for Hero display headlines (`h1`), section titles (`h2`), body descriptions, and readable prose in high-contrast `#111614` ink.
2. **Pixel Accent Display (`NeueBit`)**:
   - `PP NeueBit`, `NeueBit`, `Pixelify Sans`, `monospace`
   - Paired inline inside headlines (`font-pixel`) with a crisp `#C0EB6A` lime underline against `#111614` ink, creating a sharp neo-grotesque + bitmap pairing contrast.
3. **Technical Monospace**:
   - `JetBrains Mono`
   - Used for IDE navigation tabs (`projects.py`, `skills.json`), line numbers, telemetry metrics, and action buttons.

---

## 4. Motion Graphics & Scroll Animations

- **Top Scroll-Progress Indicator** (`Navbar.tsx`):
  `framer-motion` `useScroll` + `useSpring` driving a 2.5px hairline bar in `#485550` across the top edge.
- **Scroll-Triggered Section Reveals** (`MotionReveal.tsx`):
  Clean exponential ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`) fade-and-rise transitions (`viewport={{ once: true, amount: 0.12 }}`) with subtle staggered timing across sibling rows and cards.
- **Interactive Dot-Wave Field** (`ShapeWaves.tsx`):
  HTML5 Canvas particle matrix in `#485550` that ripples gently and shifts toward `#C0EB6A` lime around the user's cursor.
- **Physical Milk-Glass Folders** (`glass-folder-cards.tsx`):
  `tone="light"` milk-glass front panel over custom Botanical Slate & Lime procedural noise canvas art (`THEME_ART_GENAI`, `THEME_ART_ML`, `THEME_ART_FULLSTACK`). Leaning forward on hover and fanning project files on click.

---

## 5. Page Structure & Section Order

1. **Hero (`jayakeerthy.tsx`)**: Editorial introduction, rotating specialization pill, verified hackathon/IEEE honors, primary & secondary actions, and Profile Card.
2. **Projects (`projects.py`)**: Interactive Glass Folders / 3D Deck / Index views paired with Project Summary + Screenshot Preview + GitHub Repository link.
3. **Toolkit (`skills.json`)**: Row-wise official brand symbols (`react-icons`) grouped into *Languages & Web*, *AI, ML & Data*, and *Tooling*, with hover/focus tooltips.
4. **About (`about.md`)**: Concise academic & engineering summary with 3 key metric cards.
5. **Timeline (`journey.log`)**: Chronological academic and competitive milestones.
6. **Credentials**: Verified certifications and achievements.
7. **Contact (`contact.sh`)**: Direct channels (Email, LinkedIn, GitHub, Location) and message dispatch form.
