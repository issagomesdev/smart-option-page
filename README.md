<p align="center">
  <b>🇺🇸 English</b> |
  <a href="./README.pt-BR.md">🇧🇷 Português</a> |
  <a href="./README.es.md">🇪🇸 Español</a>
</p>

# 🌐 Smart Option — Landing Page

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)

<p align="center">
  <a href="#about">About</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#sections">Sections</a> •
  <a href="#stack">Stack</a> •
  <a href="#structure">Structure</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#docker">Docker</a> •
  <a href="#environment">Environment Variables</a> •
  <a href="#scripts">Scripts</a> •
  <a href="#code-quality">Code Quality</a> •
  <a href="#related-projects">Related Projects</a>
</p>

> ⚠️ This project is a **technical portfolio** piece — not a commercial product. The goal is to showcase professional-grade architecture, code quality, and user experience around the Smart Option ecosystem.

<h2 id="about">📌 About</h2>

**Smart Option** is an **automated investment platform** that combines the convenience of a **Telegram bot** with a dedicated **admin panel** for managing the operation. Integrated with **PIX** through **Asaas**, the platform lets users make **deposits**, purchase **yield plans**, track their **earnings** and **financial transactions**, manage an **affiliate network** with up to **three commission tiers**, and request **withdrawals** — all quickly and without ever leaving **Telegram**.

This repository holds the official **landing page** for **Smart Option**, built to introduce the platform, what sets it apart, and the experience it offers users. With a strong focus on **design**, **performance**, **responsiveness**, and **user experience**, the app walks through the product's main flows using interactive interfaces, animations, and mockups built in **React** — without depending on the backend or using real data. The only external integration is the API that provides the résumé list shown in the download modal.

<h2 id="architecture">🏗️ Frontend Architecture</h2>

Even as a landing page, this project applies the same care for organization, scalability, and separation of concerns as the rest of the Smart Option ecosystem. The structure is organized by artifact type rather than by page, which favors reuse, maintenance, and continuous evolution.

### Architectural decisions

- **Organized by responsibility:** components, hooks, animations, constants, utilities, types, and assets each get their own directory, reducing coupling and making code easy to find.
- **Every section is an independent module:** the landing sections (`sections/`) only orchestrate smaller, reusable, single-purpose components, favoring composition over monolithic components.
- **Decoupled background system:** grids, particles, glows, auroras, blueprints, wireframes, and other visual elements are independent components (`components/background/`), so each section can have its own identity without duplicating code.
- **Centralized animations:** every animation is defined in a single module (`animations/`), keeping the visuals consistent and avoiding animation logic scattered across components.
- **Observer-based navigation sync:** the active section is detected with `IntersectionObserver` (`useActiveSection`), which keeps the header and mobile menu in sync automatically — no continuous scroll listeners, and better performance.
- **Decoupled résumé modal:** the résumé selection flow is split into `services` (requests), `hooks` (state and cache), `components` (UI), and `utils`, so each layer can be tested and evolved independently.
- **Centralized configuration:** URLs, static content, links, navigation, and other settings live in constants and configuration files, instead of being scattered across the project.
- **Standalone frontend:** the landing page doesn't depend on the backend, the admin panel, or the bot at runtime. The entire experience is reproduced with React components and hand-built mockups; only the résumé modal makes an HTTP call, to fetch the list of files available for download.

<h2 id="sections">🧩 Landing Page Sections</h2>

| Section                | Anchor                 | Description                                                                                                                       |
| ---------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Hero**               | Top of the page        | Platform introduction, value proposition, key differentiators, CTAs, and a visual composition inspired by the product experience. |
| **About**              | `#sobre`               | Overview of the Smart Option ecosystem, showing how users, the Telegram bot, payments, automations, and the admin panel connect.  |
| **Features**           | `#funcionalidades`     | A tour of the main capabilities of the Telegram bot, the admin panel, and the integration between all platform modules.           |
| **Architecture**       | `#arquitetura`         | Ecosystem architecture diagram, the modules that make up the solution, and the technologies used at each layer.                   |
| **Demo**               | `#demonstracao`        | Video of the project in action, plus links to the public demos of the bot and the admin panel.                                    |
| **Behind the Project** | `#por-tras-do-projeto` | Introduction to the developer, the development approach, quality principles, technologies, and professional channels.             |
| **Contact**            | `#contato`             | Contact options, résumé downloads, project repositories, and other professional channels.                                         |

> The anchors above are the live URL fragments of the published site, kept in Portuguese in every language version of this document.

### Shared resources

- **Résumé modal** — lazy-loaded, fetches the available résumés from an API, keeps an in-memory cache, and implements accessibility features such as focus trap and keyboard navigation.
- **Header** — navigation that stays in sync with the section currently in view, including a responsive menu and active-section highlighting.
- **Footer** — supporting navigation, social links, and access to the related projects in the Smart Option ecosystem.

<h2 id="stack">🛠️ Stack</h2>

| Category                 | Technologies                                                                                                                           |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**            | [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/)                                                       |
| **Build**                | [Vite](https://vite.dev/)                                                                                                              |
| **Styling**              | [Tailwind CSS 4](https://tailwindcss.com/)                                                                                             |
| **Animations**           | [Framer Motion](https://motion.dev/)                                                                                                   |
| **Scrolling experience** | [Lenis](https://lenis.darkroom.engineering/) (smooth scrolling)                                                                        |
| **Icons**                | [Lucide React](https://lucide.dev/)                                                                                                    |
| **Typography**           | [Inter](https://fonts.google.com/specimen/Inter) and [Manrope](https://fonts.google.com/specimen/Manrope) (self-hosted variable fonts) |
| **Code quality**         | ESLint, Prettier, Husky, and lint-staged                                                                                               |
| **Infrastructure**       | Multi-stage Docker, Docker Compose, and Nginx                                                                                          |

<h2 id="structure">📁 Structure</h2>

```text
src/
├─ app/                      # Application root composition (Providers and App)
├─ sections/                 # Landing page sections
│
├─ components/
│  ├─ ui/                    # Reusable UI components
│  ├─ layout/                # Header, Footer, Logo, Container, and navigation
│  ├─ background/            # Reusable visual layers (grid, glow, aurora, particles, blueprint...)
│  ├─ hero/                  # Hero mockups and components
│  ├─ about/                 # About section components
│  ├─ features/              # Features section components
│  ├─ architecture/          # Architecture section diagrams and components
│  ├─ demo/                  # Video and demos
│  ├─ developer/             # Behind the Project section components
│  ├─ contact/               # Contact cards and details
│  ├─ curriculum/            # Résumé selection modal
│  └─ common/                # Shared components
│
├─ hooks/                    # Custom hooks
├─ services/                 # External API communication
├─ lib/                      # Shared libraries and initialization
├─ animations/               # Framer Motion variants and helpers
├─ constants/                # Application content and configuration
├─ types/                    # Shared types
├─ utils/                    # Utility functions
├─ styles/                   # Global styles and theme tokens
└─ assets/                   # Static assets
```

<h2 id="getting-started">▶️ Getting Started</h2>

### Requirements

- **Node.js 22+** (only for running locally)
- **Docker** and **Docker Compose** (recommended)

### Running with Docker

```bash
git clone <repository-url> smart-option-page
cd smart-option-page

cp .env.example .env

npm run docker:up
```

The app will be available at:

```text
http://localhost:3002
```

> You can change the port through the `APP_PORT` variable in the `.env` file.

The environment ships with **hot reload**, so changes under `src/` show up automatically.

To stop the containers:

```bash
npm run docker:down
```

### Running locally

```bash
git clone <repository-url> smart-option-page
cd smart-option-page

cp .env.example .env

npm install
npm run dev
```

<h2 id="docker">🐳 Docker</h2>

The project has separate environments for **development** and **production**, each tuned for its purpose.

| File                      | Description                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------- |
| `Dockerfile.dev`          | Development environment with hot reload through Vite.                               |
| `Dockerfile.prod`         | Optimized multi-stage build for production, serving the static files through Nginx. |
| `docker-compose.dev.yml`  | Starts the development environment.                                                 |
| `docker-compose.prod.yml` | Starts the production build of the application.                                     |

### Development

```bash
npm run docker:up
```

To stop it:

```bash
npm run docker:down
```

### Production

```bash
npm run docker:build

docker compose -f docker-compose.prod.yml up -d
```

The port used by the application is set through the `APP_PORT` variable, so you can change environments without touching the source code.

<h2 id="environment">⚙️ Environment Variables</h2>

Every variable needed to run the application is documented in **`.env.example`**.

```bash
cp .env.example .env
```

| Variable                   | Description                                                        |
| -------------------------- | ------------------------------------------------------------------ |
| `APP_PORT`                 | Port used by the development server and the Docker containers.     |
| `VITE_GITHUB_URL`          | Project repository shown in the UI.                                |
| `VITE_BOT_DEMO_URL`        | Link to the Telegram bot demo.                                     |
| `VITE_ADMIN_DEMO_URL`      | Link to the admin panel demo.                                      |
| `VITE_LINKEDIN_URL`        | The developer's LinkedIn profile.                                  |
| `VITE_PORTFOLIO_URL`       | Link to the personal portfolio.                                    |
| `VITE_DEVELOPER_EMAIL`     | Email address shown in the contact section.                        |
| `VITE_DEVELOPER_PHOTO_URL` | Photo used in the "Behind the Project" section.                    |
| `VITE_CURRICULUM_API_URL`  | Endpoint that provides the list of résumés available for download. |

> **Note**
>
> Vite only exposes variables prefixed with **`VITE_`** to the frontend. Variables without that prefix stay available only during the build process or in the server configuration — which is the case for `APP_PORT`.

<h2 id="scripts">📜 Scripts</h2>

| Script                 | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| `npm run dev`          | Starts the development environment.                     |
| `npm run build`        | Runs the type check and generates the production build. |
| `npm run preview`      | Serves the production build locally.                    |
| `npm run docker:up`    | Starts the development environment with Docker Compose. |
| `npm run docker:down`  | Stops the development containers.                       |
| `npm run docker:build` | Builds the production-optimized Docker image.           |
| `npm run lint`         | Runs static analysis with ESLint.                       |
| `npm run lint:fix`     | Auto-fixes the issues ESLint can resolve.               |
| `npm run format`       | Formats the whole project with Prettier.                |
| `npm run format:check` | Checks formatting without modifying files.              |
| `npm run typecheck`    | Runs the TypeScript type check only.                    |

> Every script relies on cross-platform tooling (`Vite`, `TypeScript`, `ESLint`, `Prettier`, and `Docker Compose`), so behavior is identical on **Windows**, **Linux**, and **macOS**.

<h2 id="code-quality">✅ Code Quality</h2>

The project was built with **readability**, **maintainability**, **performance**, **accessibility**, and **visual consistency** in mind, following modern React best practices.

- **Static analysis:** ESLint (flat config) with `typescript-eslint`, React Hooks/React Compiler rules, and Prettier integration to keep the codebase consistent.
- **Automatic formatting:** all formatting is centralized in Prettier, removing style differences between contributions.
- **Git hooks:** Husky and lint-staged run ESLint and Prettier automatically, on changed files only, before each commit.
- **Strict TypeScript:** rigorous typing, import aliases, and extra checks to catch errors during development.
- **Composition-based architecture:** each landing section is made of small, reusable, single-purpose components, favoring low coupling and independent evolution.
- **Accessibility:** full keyboard navigation, focus management, ARIA attributes, proper contrast, and respect for the user's reduced-motion preference.
- **Performance:** lazy loading, self-hosted fonts, icon tree-shaking, GPU-accelerated animations, `IntersectionObserver`-based navigation, and optimized renders to avoid unnecessary work.
- **User experience:** smooth animations, a fully responsive interface, consistent transitions, and uniform behavior across devices and screen sizes.

<h2 id="related-projects">🔗 Related Projects</h2>

**Smart Option** was built as an ecosystem of independent applications, each with a clear responsibility. Splitting it across repositories keeps things organized, makes parallel development easier, and results in a more modular, scalable architecture.

| Project                   | Description                                                                                                                            | GitHub                                             |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| ⚙️ Backend (API + Bot)    | The API and Telegram bot behind the business rules, authentication, payments, notifications, and integrations used by the admin panel. | https://github.com/issagomesdev/smart-option       |
| 👑 Admin Panel (Frontend) | The administrative interface for managing the Smart Option platform.                                                                   | https://github.com/issagomesdev/smart-option-admin |
