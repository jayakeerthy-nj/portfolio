# N J Jayakeerthy — Developer Portfolio

A modern, brutalist, code-editor inspired personal portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**, featuring an authentic terminal/IDE aesthetic (inspired by *Fine Thought* and modern developer interfaces) tailored for **N J Jayakeerthy**, an undergraduate Artificial Intelligence & Machine Learning Engineering student (CGPA: 9.13) at **B.M.S. Institute of Technology and Management, Bengaluru**.

---

## ⚡ Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📁 Why `/components/ui` Matters (Shadcn Architecture)

Following the standard Shadcn UI and enterprise frontend architecture, components are decoupled into:
- **`src/components/ui/`**: Headless, low-level design primitives and interactive objects (such as `glass-folder-cards.tsx` and `tumble-deck-showcase.tsx`). These are reusable across any page, independent of specific business logic.
- **`src/components/`**: Composite sections (such as `ProjectsSection.tsx`, `Hero.tsx`, `AboutProfile.tsx`) that orchestrate content, business data, and state using the primitive building blocks.
- **`@/*` Path Aliasing**: Configured in `tsconfig.json` and `vite.config.ts` so imports like `@/components/ui/glass-folder-cards` resolve cleanly without relative `../../` clutter.

---

## 🎨 Featured UI & 3D Interactive Systems

1. **3D Glass Folder Cards (`src/components/ui/glass-folder-cards.tsx`)**:
   - Drawn as physical interactive objects on a technical blueprint grid.
   - Front panel: frosted smoked glass that physically blurs elements behind it.
   - Artwork: domain-warped procedural noise fields (`aurora`, `ember`, `glacier`, `verdant`).
   - Dynamic interaction: leans forward on hover; fans out clickable project files on click.
2. **3D Scroll-Driven Tumble Deck (`src/components/ui/tumble-deck-showcase.tsx`)**:
   - Website/project cards standing on edge along a 3D perspective floor line.
   - Cards tumble 90° forward and land flat on the floor driven by scroll wheel, touch drag, or keyboard arrows.
3. **Fine Thought Brutalist Data Matrix**:
   - Code-editor data tables with dashed borders and hover states.
   - Split preview console featuring syntax-highlighted code alongside interactive live simulators (AI Vaidya RAG retriever, POLARIS risk classifier, AI Chess Rival minimax tree, IBM Granite budget optimizer, and CampusHire candidate filter).
4. **Interactive Terminal Drawer**:
   - Press `Ctrl + ~` or click **Terminal** in the navbar to open an interactive terminal emulator supporting `help`, `about`, `skills`, `projects`, `awards`, `contact`, and `resume`.
5. **Interactive Resume Modal**:
   - Clean view with print and download capability highlighting N J Jayakeerthy's 9.13 CGPA, BMSIT Placement Coordinator role, and 1st Place Hackathon / IEEE awards.
