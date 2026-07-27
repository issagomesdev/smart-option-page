<p align="center">
  <a href="./README.md">🇺🇸 English</a> |
  <a href="./README.pt-BR.md">🇧🇷 Português</a> |
  <b>🇪🇸 Español</b>
</p>

# 🌐 Smart Option — Landing Page

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)

<p align="center">
  <a href="#acerca">Acerca del proyecto</a> •
  <a href="#arquitectura">Arquitectura</a> •
  <a href="#secciones">Secciones</a> •
  <a href="#stack">Stack</a> •
  <a href="#estructura">Estructura</a> •
  <a href="#primeros-pasos">Primeros pasos</a> •
  <a href="#docker">Docker</a> •
  <a href="#entorno">Variables de entorno</a> •
  <a href="#scripts">Scripts</a> •
  <a href="#calidad">Calidad de código</a> •
  <a href="#proyectos-relacionados">Proyectos relacionados</a>
</p>

> ⚠️ Este proyecto es una pieza de **portafolio técnico**, no un producto comercial. El objetivo es demostrar arquitectura, calidad de código y experiencia de usuario de nivel profesional en torno al ecosistema Smart Option.

<h2 id="acerca">📌 Acerca del proyecto</h2>

**Smart Option** es una **plataforma de inversiones automatizadas** que combina la practicidad de un **bot de Telegram** con un **panel administrativo** dedicado a la gestión de la operación. Integrada con **PIX** a través de **Asaas**, la plataforma permite que los usuarios realicen **depósitos**, adquieran **planes de rendimiento**, hagan seguimiento de sus **rendimientos** y **movimientos financieros**, gestionen una **red de afiliados** con hasta **tres niveles de comisión** y soliciten **retiros**, todo de forma simple, rápida y sin salir de **Telegram**.

Este repositorio contiene la **landing page oficial** de **Smart Option**, creada para presentar la plataforma, sus diferenciales y la experiencia que ofrece a los usuarios. Construida con foco en **diseño**, **rendimiento**, **responsividad** y **experiencia de usuario**, la aplicación muestra visualmente los principales flujos del producto mediante interfaces interactivas, animaciones y mockups desarrollados en **React**, sin depender del backend ni usar datos reales. La única integración externa es la API que proporciona la lista de currículums que aparece en el modal de descarga.

<h2 id="arquitectura">🏗️ Arquitectura del frontend</h2>

Aunque se trate de una landing page, el proyecto mantiene la misma preocupación por la organización, la escalabilidad y la separación de responsabilidades que el resto de los repositorios del ecosistema Smart Option. La estructura se organiza por tipo de artefacto y no por páginas, lo que favorece la reutilización, el mantenimiento y la evolución continua.

### Decisiones de arquitectura

- **Organización por responsabilidad:** componentes, hooks, animaciones, constantes, utilidades, tipos y assets tienen sus propios directorios, lo que reduce el acoplamiento y facilita encontrar el código.
- **Cada sección es un módulo independiente:** las secciones de la landing (`sections/`) solo orquestan componentes más pequeños, reutilizables y con una única responsabilidad, siguiendo principios de composición en lugar de componentes monolíticos.
- **Sistema de fondos desacoplado:** grillas, partículas, glows, auroras, blueprints, wireframes y demás elementos visuales son componentes independientes (`components/background/`), lo que permite dar una identidad distinta a cada sección sin duplicar código.
- **Animaciones centralizadas:** todas las animaciones se definen en un único módulo (`animations/`), lo que mantiene la consistencia visual y evita lógica de animación dispersa por los componentes.
- **Navegación sincronizada por observación:** la sección activa se detecta con `IntersectionObserver` (`useActiveSection`), lo que sincroniza automáticamente el header y el menú móvil sin listeners continuos de scroll y con mejor rendimiento.
- **Modal de currículums desacoplado:** el flujo de selección de currículums se divide en `services` (peticiones), `hooks` (estado y caché), `components` (interfaz) y `utils`, lo que permite probar y evolucionar cada capa de forma independiente.
- **Configuración centralizada:** URLs, contenidos estáticos, enlaces, navegación y demás ajustes se concentran en constantes y archivos de configuración, en lugar de estar dispersos por el proyecto.
- **Frontend independiente:** la landing no depende del backend, del panel administrativo ni del bot en tiempo de ejecución. Toda la experiencia se reproduce con componentes React y mockups hechos a mano; solo el modal de currículums realiza una llamada HTTP para obtener la lista de archivos disponibles para descargar.

<h2 id="secciones">🧩 Secciones de la landing page</h2>

| Sección                 | Ancla                       | Descripción                                                                                                                                         |
| ----------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hero**                | Parte superior de la página | Presentación de la plataforma, propuesta de valor, principales diferenciales, CTAs y composición visual inspirada en la experiencia del producto.   |
| **Acerca de**           | `#sobre`                    | Visión general del ecosistema Smart Option, que ilustra cómo se conectan usuarios, bot de Telegram, pagos, automatizaciones y panel administrativo. |
| **Funcionalidades**     | `#funcionalidades`          | Panorama de las principales capacidades del bot de Telegram, del panel administrativo y de la integración entre todos los módulos de la plataforma. |
| **Arquitectura**        | `#arquitetura`              | Diagrama de la arquitectura del ecosistema, los módulos que componen la solución y las tecnologías usadas en cada capa.                             |
| **Demostración**        | `#demonstracao`             | Video del proyecto en funcionamiento, además de enlaces a las demostraciones públicas del bot y del panel administrativo.                           |
| **Detrás del proyecto** | `#por-tras-do-projeto`      | Presentación de la desarrolladora, su enfoque de desarrollo, pilares de calidad, tecnologías y canales profesionales.                               |
| **Contacto**            | `#contato`                  | Formas de contacto, acceso a los currículums, repositorios del proyecto y demás canales profesionales.                                              |

> Las anclas anteriores son los fragmentos de URL reales del sitio publicado y se mantienen en portugués en todas las versiones de este documento.

### Recursos compartidos

- **Modal de currículums** — se carga bajo demanda (_lazy loading_), consulta una API para listar los currículums disponibles, mantiene una caché en memoria e implementa funciones de accesibilidad como _focus trap_ y navegación por teclado.
- **Header** — navegación sincronizada automáticamente con la sección visible de la página, con menú responsive y resaltado de la sección activa.
- **Footer** — navegación complementaria, enlaces a redes sociales y acceso a los proyectos relacionados del ecosistema Smart Option.

<h2 id="stack">🛠️ Stack</h2>

| Categoría                     | Tecnologías                                                                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**                 | [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/)                                                      |
| **Build**                     | [Vite](https://vite.dev/)                                                                                                             |
| **Estilos**                   | [Tailwind CSS 4](https://tailwindcss.com/)                                                                                            |
| **Animaciones**               | [Framer Motion](https://motion.dev/)                                                                                                  |
| **Experiencia de navegación** | [Lenis](https://lenis.darkroom.engineering/) (scroll suave)                                                                           |
| **Iconos**                    | [Lucide React](https://lucide.dev/)                                                                                                   |
| **Tipografía**                | [Inter](https://fonts.google.com/specimen/Inter) y [Manrope](https://fonts.google.com/specimen/Manrope) (variable fonts autoalojadas) |
| **Calidad de código**         | ESLint, Prettier, Husky y lint-staged                                                                                                 |
| **Infraestructura**           | Docker multi-stage, Docker Compose y Nginx                                                                                            |

<h2 id="estructura">📁 Estructura</h2>

```text
src/
├─ app/                      # Composición raíz de la aplicación (Providers y App)
├─ sections/                 # Secciones de la landing page
│
├─ components/
│  ├─ ui/                    # Componentes reutilizables de interfaz
│  ├─ layout/                # Header, Footer, Logo, Container y navegación
│  ├─ background/            # Capas visuales reutilizables (grid, glow, aurora, partículas, blueprint...)
│  ├─ hero/                  # Mockups y componentes del Hero
│  ├─ about/                 # Componentes de la sección Acerca de
│  ├─ features/              # Componentes de la sección Funcionalidades
│  ├─ architecture/          # Diagramas y componentes de la sección Arquitectura
│  ├─ demo/                  # Video y demostraciones
│  ├─ developer/             # Componentes de la sección Detrás del proyecto
│  ├─ contact/               # Tarjetas e información de contacto
│  ├─ curriculum/            # Modal de selección de currículums
│  └─ common/                # Componentes compartidos
│
├─ hooks/                    # Hooks personalizados
├─ services/                 # Comunicación con APIs externas
├─ lib/                      # Librerías e inicializaciones compartidas
├─ animations/               # Variantes y utilidades de Framer Motion
├─ constants/                # Contenido y configuración de la aplicación
├─ types/                    # Tipos compartidos
├─ utils/                    # Funciones utilitarias
├─ styles/                   # Estilos globales y tokens del tema
└─ assets/                   # Recursos estáticos
```

<h2 id="primeros-pasos">▶️ Primeros pasos</h2>

### Requisitos

- **Node.js 22+** (solo para ejecución local)
- **Docker** y **Docker Compose** (recomendado)

### Ejecutar con Docker

```bash
git clone <url-del-repositorio> smart-option-page
cd smart-option-page

cp .env.example .env

npm run docker:up
```

La aplicación estará disponible en:

```text
http://localhost:3002
```

> El puerto se puede cambiar con la variable `APP_PORT` en el archivo `.env`.

El entorno ya incluye **hot reload**, por lo que los cambios en `src/` se reflejan automáticamente.

Para detener los contenedores:

```bash
npm run docker:down
```

### Ejecutar localmente

```bash
git clone <url-del-repositorio> smart-option-page
cd smart-option-page

cp .env.example .env

npm install
npm run dev
```

<h2 id="docker">🐳 Docker</h2>

El proyecto tiene entornos independientes para **desarrollo** y **producción**, cada uno optimizado para su propósito.

| Archivo                   | Descripción                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `Dockerfile.dev`          | Entorno de desarrollo con hot reload mediante Vite.                                               |
| `Dockerfile.prod`         | Build multi-stage optimizado para producción, que sirve los archivos estáticos a través de Nginx. |
| `docker-compose.dev.yml`  | Levanta el entorno de desarrollo.                                                                 |
| `docker-compose.prod.yml` | Levanta la versión de producción de la aplicación.                                                |

### Desarrollo

```bash
npm run docker:up
```

Para detenerlo:

```bash
npm run docker:down
```

### Producción

```bash
npm run docker:build

docker compose -f docker-compose.prod.yml up -d
```

El puerto que usa la aplicación se configura con la variable `APP_PORT`, lo que permite cambiar de entorno sin modificar el código fuente.

<h2 id="entorno">⚙️ Variables de entorno</h2>

Todas las variables necesarias para ejecutar la aplicación están documentadas en **`.env.example`**.

```bash
cp .env.example .env
```

| Variable                   | Descripción                                                                  |
| -------------------------- | ---------------------------------------------------------------------------- |
| `APP_PORT`                 | Puerto que usan el servidor de desarrollo y los contenedores Docker.         |
| `VITE_GITHUB_URL`          | Repositorio del proyecto que se muestra en la interfaz.                      |
| `VITE_BOT_DEMO_URL`        | Enlace a la demostración del bot de Telegram.                                |
| `VITE_ADMIN_DEMO_URL`      | Enlace a la demostración del panel administrativo.                           |
| `VITE_LINKEDIN_URL`        | Perfil de LinkedIn de la desarrolladora.                                     |
| `VITE_PORTFOLIO_URL`       | Enlace al portafolio personal.                                               |
| `VITE_DEVELOPER_EMAIL`     | Dirección de correo que aparece en la sección de contacto.                   |
| `VITE_DEVELOPER_PHOTO_URL` | Foto utilizada en la sección "Detrás del proyecto".                          |
| `VITE_CURRICULUM_API_URL`  | Endpoint que proporciona la lista de currículums disponibles para descargar. |

> **Nota**
>
> Vite solo expone al frontend las variables que empiezan con el prefijo **`VITE_`**. Las variables sin ese prefijo quedan disponibles únicamente durante el proceso de build o en la configuración del servidor, como ocurre con `APP_PORT`.

<h2 id="scripts">📜 Scripts</h2>

| Script                 | Descripción                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| `npm run dev`          | Inicia el entorno de desarrollo.                                  |
| `npm run build`        | Ejecuta la verificación de tipos y genera el build de producción. |
| `npm run preview`      | Sirve localmente la versión de producción generada por el build.  |
| `npm run docker:up`    | Levanta el entorno de desarrollo con Docker Compose.              |
| `npm run docker:down`  | Detiene los contenedores del entorno de desarrollo.               |
| `npm run docker:build` | Genera la imagen Docker optimizada para producción.               |
| `npm run lint`         | Ejecuta el análisis estático del código con ESLint.               |
| `npm run lint:fix`     | Corrige automáticamente los problemas que ESLint puede resolver.  |
| `npm run format`       | Formatea todo el proyecto con Prettier.                           |
| `npm run format:check` | Verifica el formato del código sin modificar archivos.            |
| `npm run typecheck`    | Ejecuta únicamente la verificación de tipos de TypeScript.        |

> Todos los scripts usan herramientas multiplataforma (`Vite`, `TypeScript`, `ESLint`, `Prettier` y `Docker Compose`), lo que garantiza el mismo comportamiento en **Windows**, **Linux** y **macOS**.

<h2 id="calidad">✅ Calidad de código</h2>

El proyecto fue desarrollado priorizando **legibilidad**, **mantenibilidad**, **rendimiento**, **accesibilidad** y **consistencia visual**, siguiendo las buenas prácticas modernas del ecosistema React.

- **Análisis estático:** ESLint (flat config) con `typescript-eslint`, reglas de React Hooks/React Compiler e integración con Prettier para mantener un estándar consistente.
- **Formato automático:** todo el formato del proyecto se centraliza en Prettier, lo que elimina diferencias de estilo entre contribuciones.
- **Git hooks:** Husky y lint-staged ejecutan ESLint y Prettier automáticamente, solo sobre los archivos modificados, antes de cada commit.
- **TypeScript en modo estricto:** tipado riguroso, alias de importación y verificaciones adicionales para detectar errores durante el desarrollo.
- **Arquitectura basada en composición:** cada sección de la landing se compone de componentes pequeños, reutilizables y con una única responsabilidad, lo que favorece el bajo acoplamiento y la evolución independiente.
- **Accesibilidad:** navegación completa por teclado, manejo de foco, atributos ARIA, contraste adecuado y respeto por la preferencia de reducción de movimiento del usuario.
- **Rendimiento:** carga bajo demanda (_lazy loading_), fuentes autoalojadas, tree-shaking de iconos, animaciones aceleradas por GPU, navegación basada en `IntersectionObserver` y renderizados optimizados para evitar trabajo innecesario.
- **Experiencia de usuario:** animaciones fluidas, interfaz totalmente responsive, transiciones consistentes y comportamiento uniforme entre dispositivos y tamaños de pantalla.

<h2 id="proyectos-relacionados">🔗 Proyectos relacionados</h2>

**Smart Option** fue desarrollado como un ecosistema de aplicaciones independientes, cada una con una responsabilidad específica. Dividirlo en varios repositorios aporta orden, facilita el desarrollo en paralelo y da como resultado una arquitectura más modular y escalable.

| Proyecto                  | Descripción                                                                                                                                                  | GitHub                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| ⚙️ Backend (API + Bot)    | La API y el bot de Telegram responsables de las reglas de negocio, autenticación, pagos, notificaciones e integraciones que consume el panel administrativo. | https://github.com/issagomesdev/smart-option       |
| 👑 Panel Admin (Frontend) | La interfaz administrativa para gestionar la plataforma Smart Option.                                                                                        | https://github.com/issagomesdev/smart-option-admin |
