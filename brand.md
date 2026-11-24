# BRAND & DESIGN SPECIFICATION: JAYAKEERTHY PORTFOLIO
**Architecture, Aesthetics, Typography, Motion Physics & Creative Manifesto**

---

## 1. Executive Thesis & Creative Manifesto

The portfolio of **Jayakeerthy (AIML Engineer & Full Stack Developer)** rejects cookie-cutter AI templates, generic SaaS landing pages, and AI visual clichés (neon purple outer glows, pulsing gradients, generic rounded cards with arbitrary dropshadows). 

Instead, the design embodies **High-Contrast Editorial Typography meets Brutalist Unix IDE Chrome & Physical Glass Simulations**.

### Core Pillars
1. **Technical Brutalism with Elegance**: 
   The interface feels like an advanced dark-mode development environment (macOS window controls, monospace ASCII headers, comment syntax `// 01. INITIALIZE`, line numbers, and file tabs) juxtaposed with haute-couture editorial serif typography.
2. **Physical Object Simulations**:
   Rather than static cards, key portfolio artifacts are rendered as **physical frosted glass folders**. Real files rest inside real glass panels that frost, lean on hover with genuine perspective hinge physics, and spring-fan open upon interaction.
3. **Authentic Telemetry**:
   Every metric reflects verified academic and engineering benchmarks (CGPA 9.13, BMSIT Batch 2028, RAG retrieval accuracy 96.4%, query latency 142ms, IEEE 4th place honors).
4. **Quiet, High-Density Ergonomics**:
   Deep charcoal and graphite surfaces (`#111113`, `#161619`) provide high contrast for reading without retinal fatigue.

---

## 2. Color System & Surface Matrix

The palette is anchored in an ultra-refined, non-harsh dark spectrum. True black (`#000000`) is avoided in favor of textured graphite, obsidian, and slate.

### Surface Hierarchy
| Token | Hex Value | Usage / Semantic Role |
| :--- | :--- | :--- |
| `graphite-deep` | `#0d0d0e` | Terminal drawer background, inner code viewports, backdrop overlays |
| `graphite-bg` | `#111113` | Canvas page foundation, hero background, main body |
| `graphite-card` | `#161619` | Primary component cards, IDE header bars, project inspection frames |
| `graphite-surface` | `#1c1c20` | Secondary metric cards, active tab surfaces, status chips |
| `graphite-raised` | `#212126` | Interactive buttons, inputs, slider tracks, clickable elements |
| `graphite-hover` | `#28282f` | Hover state for interactive controls and pills |

### Border & Grid Tokens
| Token | Value | Visual Purpose |
| :--- | :--- | :--- |
| `border-hairline` | `rgba(255, 255, 255, 0.08)` | Default card and panel perimeter border |
| `border-dashed-code` | `rgba(255, 255, 255, 0.12)` | Code-editor section separators (dashed `3px 3px`) |
| `border-interactive` | `rgba(255, 255, 255, 0.18)` | Hover/focus state on interactive cards |
| `bg-ascii-grid` | `rgba(255, 255, 255, 0.02)` | 32px × 32px technical alignment grid |

### Typography & Text Spectrum
| Token | Hex Value | Application |
| :--- | :--- | :--- |
| `text-primary` | `#ededed` | Headlines, active values, high-contrast serif statements |
| `text-secondary` | `#a1a1a6` | Subtitles, body descriptions, code snippets, active labels |
| `text-muted` | `#9ca3af` / `#71717a` | File paths, line numbers, ASCII comments, inactive tabs |

### Semantic Technical Accents
| Accent | Hex / Class | Meaning & Use Cases |
| :--- | :--- | :--- |
| **Emerald Engine** | `#10b981` / `#34d399` | Online status indicator, CGPA 9.13 badge, passing guards, optimal health |
| **Cobalt Data** | `#3b82f6` / `#60a5fa` | Hyperlinks, active navigation indicator, download actions |
| **Amber Honor** | `#f59e0b` / `#fbbf24` | IEEE award badges, hackathon honors, high-severity telemetry |
| **Amethyst Intelligence** | `#8b5cf6` / `#a78bfa` | RAG, Vector search, and Generative AI project markers |
| **Rose Systems** | `#f43f5e` / `#fb7185` | Campus coordination pipelines, slider accent handles |

---

## 3. Typography Architecture

The typographic identity relies on a high-contrast clash between an 18th-century Didone serif and cutting-edge monospaced/sans developer typefaces.

### The Typefaces
1. **Display & Editorial Serif**:
   - `LTC Bodoni 175` (Primary) with fallbacks `Bodoni Moda`, `Libre Bodoni`, `Didot`.
   - Applied to: Major hero statements, section headings (`Featured Engineering Projects`), and massive background watermark typography.
   - Characterized by extreme vertical contrast, razor-thin horizontal serifs, and high-fashion geometric precision.
   - Paired with *italicized emphasis* for technical terminology (e.g., `code & machine learning.`).
2. **Technical Monospace**:
   - `Geist Mono`, `JetBrains Mono`, `Fira Code`.
   - Applied to: Code blocks, IDE tabs (`jayakeerthy.tsx`, `projects.py`), line numbering, telemetry values, terminal CLI, and ASCII comment brackets.
3. **Interface Sans**:
   - `Geist Sans`, `Inter`, `system-ui`.
   - Applied to: Dense paragraphs, metadata descriptions, button labels, and accessibility tooltips.

### Typography Hierarchy Scale
- **Hero Display**: `text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.08]`
- **Section Headers**: `text-3xl sm:text-4xl lg:text-5xl font-serif font-normal`
- **Card Titles**: `text-base sm:text-lg font-semibold tracking-tight text-[#ededed]`
- **Technical Meta**: `text-xs font-mono text-[#a1a1a6]`
- **Micro Telemetry**: `text-[10px] sm:text-[11px] font-mono tracking-wider uppercase`

---

## 4. Physical Object Simulations: Glass Folder Cards

A signature element of the portfolio is the custom **Glass Folder Cards** component (`src/components/ui/glass-folder-cards.tsx`). It simulates a tangible, 3D frosted-glass organizer holding project artifacts.

### The 3 Layers (Back-to-Front)
```
[ BACK LAYER ]   Procedural Domain-Warped Liquid Noise Canvas (Unique per category)
       |
[ MIDDLE LAYER ] Physical Project File Cards (with staggered heights & metadata)
       |
[ FRONT LAYER ]  Frosted Smoked Glass Panel (Backdrop-filter blur, hairline border, tab notch)
```

### Motion & Interaction Physics
- **Resting State**: The files peek just above the frosted lip (depth-of-field simulation).
- **Hover / Focus**: 
  - The front glass panel pivots toward the viewer along its bottom hinge (`rotateX(-12deg)` perspective).
  - Internal files lift subtly out of the pocket (`translateY(-8px)`).
- **Open State (Click / Enter)**:
  - The front glass panel leans forward (`rotateX(-24deg)`).
  - The files fan outward in an organic spread (`-14deg` to `+14deg` rotation angle).
  - Each sheet becomes an interactive button displaying file metadata (`ai-vaidya-rag.py`, `polaris-engine.py`, `campushire-portal.tsx`).
- **Procedural Canvas Art**:
  - Generated live on an HTML5 `<canvas>` via fractional Brownian motion (fBm) with a Mulberry32 PRNG seed.
  - Zero external bitmap assets or heavy video files; 100% computed mathematics.

### Folder Presets & Color Themes
- **GenAI & RAG Folder**: Obsidian violet and steel streak (`#0b0b0f` -> `#181424` -> `#281e42` -> `#381a5a`).
- **ML & Predictive Systems Folder**: Charcoal teal marble (`#090b0d` -> `#131f24` -> `#23383e` -> `#3a5961`).
- **Full Stack Systems Folder**: Smoked slate and bronze streak (`#0d0e12` -> `#181b22` -> `#222733` -> `#2e3547`).

---

## 5. IDE Chrome & Interactive Developer Experience

### 1. The IDE Top Bar & File Navigation
- Emulates a modern code editor with three macOS window control dots (`#3a3a40`).
- Interactive tab switcher:
  - `jayakeerthy.tsx` -> Hero / Profile Introduction
  - `about.md` -> Academic & Background Overview
  - `skills.json` -> Technical Competency Matrix
  - `projects.py` -> Verified Artifacts & Code Inspection
  - `interests.ai` -> Research & Systems Exploration
  - `journey.log` -> Leadership & Academic Milestones
  - `contact.sh` -> Direct Communication Channels

### 2. Interactive Terminal Drawer
- Invoked via `>_ Terminal` button in header or `~` shortcut.
- Simulates an actual Unix terminal emulator supporting:
  - `help`: Lists all available commands.
  - `skills`: Prints categorized technology matrix in ASCII table format.
  - `projects`: Lists active repositories with status flags.
  - `contact`: Outputs communication coordinates.
  - `clear`: Clears shell history.

### 3. Integrated PDF Resume Viewer
- Modal with instant split view:
  - **Embedded PDF Engine**: Streams the official `jayakeerthy_resume.pdf` with zoom and scroll.
  - **Structured Markdown View**: Instant text-accessible summary of competencies, education, and credentials.
  - Dedicated "Open Tab" and "Download PDF" actions.

---

## 6. Engineering Integrity & Design Rules

To preserve the brand fidelity across future modifications, adhere to the following rules:

1. **No Clashing Light-Mode Elements**:
   All popups, tooltips, dialogs, scrollbars, and form controls must be styled in `#111113` / `#161619` with `rgba(255, 255, 255, 0.08)` borders.
2. **Preserve Editorial Contrast**:
   Never replace `LTC Bodoni 175` / `Bodoni Moda` on primary titles with generic sans-serif fonts. The tension between the classical serif and modern code typography is the core identity.
3. **Accurate Credentials**:
   - Degree: `BE in Artificial Intelligence and Machine Learning`
   - Institution: `B.M.S. Institute of Technology and Management (BMSIT), Bengaluru`
   - Batch: `Batch 2028`
   - CGPA: `9.13`
   - Specialization: `Unsupervised Learning, ML Algorithms, RAG`
4. **Accessible Micro-Interactions**:
   All interactive buttons and focusable elements must retain `focus-visible:ring-2 focus-visible:ring-emerald-400` or `focus-visible:ring-white/40`.
