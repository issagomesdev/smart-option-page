# 🌐 Smart Option — Landing Page

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#arquitetura">Arquitetura</a> •
  <a href="#secoes">Seções</a> •
  <a href="#stack">Stack</a> •
  <a href="#estrutura">Estrutura</a> •
  <a href="#comecando">Começando</a> •
  <a href="#docker">Docker</a> •
  <a href="#ambientes">Variáveis de Ambiente</a> •
  <a href="#scripts">Scripts</a> •
  <a href="#qualidade">Qualidade de Código</a> •
  <a href="#related-projects">Projetos Relacionados</a>
</p>

> ⚠️ Este projeto é uma peça de **portfólio técnico** — não um produto comercial. O objetivo é demonstrar arquitetura, qualidade de código e experiência de usuário de nível profissional em torno do ecossistema Smart Option.

<h2 id="sobre">📌 Sobre</h2>

Esta é a **landing page** do **Smart Option**, uma plataforma de investimento automatizado composta por **bot do Telegram**, **API REST**, **painel administrativo** e **integração PIX via Asaas**. Em vez de uma página de vendas, esta landing apresenta o projeto como um estudo de caso: arquitetura em camadas, componentização disciplinada e uma experiência visual equivalente à de produtos SaaS de referência (Stripe, Vercel, Linear, Raycast, Clerk).

Este repositório contém **apenas o frontend estático da landing** — não depende do backend, do bot ou do painel em tempo de execução; toda a "demonstração" é recriada visualmente através de mockups (chat do Telegram, pagamento PIX, dashboard administrativo) construídos em React/CSS, sem capturas de tela reais nem dados de usuários de verdade. A única chamada de rede real é a API que alimenta o modal de seleção de currículos.

### Estado atual

- ✅ **Header** — navegação com seção ativa sincronizada por scroll (`IntersectionObserver`), efeito glass ao rolar a página e menu mobile animado em tela cheia
- ✅ **Hero** — badge, título, diferenciais, CTAs e mockups de celular/PIX/dashboard com camadas de fundo animadas
- ✅ **Sobre** — diagrama do ecossistema e os principais diferenciais da plataforma
- ✅ **Funcionalidades** — Telegram Bot, Painel Administrativo e a integração entre os dois
- ✅ **Arquitetura** — diagrama dos módulos do sistema e a stack utilizada no ecossistema
- ✅ **Demonstração** — vídeo do projeto em funcionamento + acesso às demos ao vivo do bot e do painel
- ✅ **Por Trás do Projeto** — apresentação da desenvolvedora, pilares de trabalho e tecnologias
- ✅ **Contato** — canais de contato e modal de seleção de currículos
- ✅ **Footer**

<h2 id="arquitetura">🏗️ Arquitetura do Frontend</h2>

Estrutura organizada por tipo de artefato, não por tela — componentes, hooks, constantes, tipos e animações têm cada um seu próprio diretório, e os componentes de UI ficam agrupados por escopo de reuso.

### Princípios arquiteturais

- **Uma composição por seção:** cada seção da landing (`sections/`) monta seu próprio conteúdo, camadas de fundo e animações a partir de peças menores e independentes — nenhum componente "faz tudo".
- **Camadas de fundo desacopladas:** cada seção tem sua própria composição de camadas decorativas (`components/background/`) — grid, partículas, glow, aurora, blueprint, wireframe, entre outras — combinadas de forma independente por seção.
- **Currículo como Clean Architecture em miniatura:** o modal de seleção de currículos separa `services/` (fetch puro), `hooks/` (estado + cache em nível de módulo), `components/` (UI) e `utils/`, cada camada testável isoladamente.
- **Navegação ativa via `IntersectionObserver`:** `useActiveSection` observa todas as seções e sincroniza Header/MobileMenu sem depender de listeners de scroll custosos.
- **Zero dependência de backend em runtime:** toda a "demonstração" é recriada visualmente em React/CSS; a única integração de rede real é a API de currículos, configurável por variável de ambiente.

<h2 id="secoes">🧩 Seções da Página</h2>

| Seção               | Âncora                 | Descrição                                                                                                                                                      |
| ------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero                | topo da página         | Badge, título, diferenciais, CTAs e composição de mockups (chat do Telegram, pagamento PIX, dashboard administrativo).                                         |
| Sobre               | `#sobre`               | Diagrama do ecossistema (Usuário, Telegram, PIX, Painel, Monitoramento, Automação) e 8 diferenciais da plataforma.                                             |
| Funcionalidades     | `#funcionalidades`     | Três blocos — Telegram Bot, Painel Administrativo e Ecossistema Integrado — cada um com mockup próprio e lista de funcionalidades.                             |
| Arquitetura         | `#arquitetura`         | Diagrama dos 8 módulos do sistema (Telegram Bot → API → Asaas/Redis/BullMQ → MySQL → Dashboard) e grid com a stack completa do ecossistema.                    |
| Demonstração        | `#demonstracao`        | Vídeo mostrando o projeto em funcionamento, com estado "Coming Soon" enquanto o vídeo final não é publicado, além dos botões "Demo do Bot" e "Demo do Painel". |
| Por Trás do Projeto | `#por-tras-do-projeto` | Apresentação da desenvolvedora, 6 pilares de trabalho, principais tecnologias, filosofia de desenvolvimento e redes sociais.                                   |
| Contato             | `#contato`             | Cards de contato (email, LinkedIn, GitHub, portfólio, currículo) e CTAs para o repositório e o LinkedIn.                                                       |

**Recursos transversais:**

- **Modal de Currículo** — carregado sob demanda (lazy) apenas no primeiro clique em qualquer botão "Currículo"; busca a lista de currículos de uma API configurável, com cache em nível de módulo e focus trap para acessibilidade.
- **Footer** — navegação e redes sociais, reaproveitando os mesmos links configurados por variável de ambiente.

<h2 id="stack">🛠️ Stack</h2>

| Categoria          | Tecnologias                                                                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Framework**      | [React 19](https://react.dev/), [TypeScript 6](https://www.typescriptlang.org/)                                                                                                                              |
| **Build**          | [Vite 8](https://vite.dev/) (`@vitejs/plugin-react`)                                                                                                                                                         |
| **Estilo**         | [Tailwind CSS 4](https://tailwindcss.com/) (config CSS-first via `@theme`, sem `tailwind.config.js`)                                                                                                         |
| **Animação**       | [Framer Motion](https://motion.dev/) (entradas, hover, tilt por ponteiro, `prefers-reduced-motion` global)                                                                                                   |
| **Scroll**         | [Lenis](https://lenis.darkroom.engineering/) (rolagem suave, desativada automaticamente quando o visitante prefere menos movimento)                                                                          |
| **Ícones**         | [Lucide React](https://lucide.dev/)                                                                                                                                                                          |
| **Fontes**         | [Inter](https://fonts.google.com/specimen/Inter) + [Manrope](https://fonts.google.com/specimen/Manrope) — variable fonts auto-hospedadas via `@fontsource-variable` (sem requisição externa ao Google Fonts) |
| **Qualidade**      | ESLint (flat config + `typescript-eslint` + regras do React Compiler via `eslint-plugin-react-hooks`), Prettier, Husky + lint-staged                                                                         |
| **Infraestrutura** | Docker multi-stage, Docker Compose, Nginx (produção)                                                                                                                                                         |

<h2 id="estrutura">📁 Estrutura</h2>

```text
src/
├─ app/                    # Composição raiz (App.tsx, Providers — Lenis + MotionConfig)
├─ sections/                # Uma composição por seção da landing (Hero, About, Features, Architecture, Demo, Developer, Contact)
│
├─ components/
│  ├─ ui/                  # Átomos reutilizáveis (Button, Badge, Chip, AnimatedCard, ícones de marca)
│  ├─ layout/              # Header, MobileMenu, Footer, Logo, Container
│  ├─ background/          # ~30 camadas decorativas independentes, combinadas por seção (grid, partículas, glow, aurora, blueprint, wireframe...)
│  ├─ hero/                # Mockups de celular/PIX/dashboard e telas do chat do Telegram
│  ├─ about/                # EcosystemDiagram, FeatureCard, AboutContent
│  ├─ features/             # Blocos Telegram Bot / Painel / Ecossistema + mockups
│  ├─ architecture/         # Diagrama de arquitetura (desktop + mobile), ModuleCard, TechStackGrid
│  ├─ demo/                 # VideoPlayer, DemoContent
│  ├─ developer/            # Foto, pilares, tech grid, filosofia, redes sociais
│  ├─ contact/               # Cards de contato
│  ├─ curriculum/            # Modal de seleção de currículos
│  └─ common/                 # Reveal — wrapper de entrada animada reutilizado por toda seção
│
├─ hooks/                    # useActiveSection, useCurriculumModal, useCurriculums, useFocusTrap, useInterval, useLenis, usePointerTilt, useScrolled, useViewportTier
├─ services/                  # curriculum.service.ts — client HTTP puro (fetch), sem estado
├─ lib/                        # lenis.ts — configuração/instanciação do Lenis (sem React)
├─ animations/                 # variants.ts — variants do Framer Motion reutilizados
├─ constants/                   # Copy e conteúdo de cada seção
├─ types/                        # Tipos compartilhados por domínio
├─ utils/                         # cn, formatação de data, nome de currículo
├─ styles/globals.css              # Import do Tailwind, tokens de tema (`@theme`), estilos base
└─ assets/                          # Imagens/ícones estáticos
```

<h2 id="comecando">▶️ Começando</h2>

### Pré-requisitos

- Node.js **22+** (necessário só para rodar fora do Docker)
- Docker + Docker Compose (caminho recomendado)

### Com Docker (recomendado)

```bash
git clone <url-do-repositorio> smart-option-page
cd smart-option-page

cp .env.example .env
npm run docker:up
```

A aplicação sobe em `http://localhost:3002` (ou na porta definida em `APP_PORT` no `.env`), com hot reload — qualquer alteração em `src/` reflete no navegador sem rebuild da imagem.

Para encerrar:

```bash
npm run docker:down
```

### Sem Docker

```bash
git clone <url-do-repositorio> smart-option-page
cd smart-option-page

npm install
cp .env.example .env

npm run dev
```

<h2 id="docker">🐳 Docker</h2>

O projeto tem imagens **separadas para desenvolvimento e produção** — não é a mesma imagem com variáveis diferentes.

| Arquivo                   | Propósito                                                                                                                                                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Dockerfile.dev`          | Instala dependências e roda `vite` diretamente; o código-fonte é montado via bind mount pelo `docker-compose.dev.yml` para hot reload.                                                                           |
| `Dockerfile.prod`         | Build multi-stage: compila o bundle estático (`npm run build`) num estágio com Node.js e o serve a partir de um **Nginx Alpine** mínimo — a imagem final não contém Node.js, código-fonte nem `devDependencies`. |
| `docker-compose.dev.yml`  | Sobe o app em modo desenvolvimento, porta publicada a partir de `APP_PORT`.                                                                                                                                      |
| `docker-compose.prod.yml` | Builda a imagem de produção (repassando as variáveis `VITE_*` como build args, já que o Vite as embute no bundle em tempo de build) e publica `APP_PORT` mapeado para a porta 80 do Nginx.                       |

```bash
# Desenvolvimento
npm run docker:up      # sobe com hot reload
npm run docker:down    # encerra

# Produção (build local da imagem final)
npm run docker:build
docker compose -f docker-compose.prod.yml up -d
```

A porta nunca é fixa no código — tanto o Vite (dev/preview) quanto o mapeamento de portas do Compose leem `APP_PORT` do `.env`. O `Dockerfile.prod` expõe um endpoint `/health` (usado pelo `HEALTHCHECK` da imagem) e aplica cache de longa duração para os assets com hash gerados pelo build, mantendo `index.html` sempre revalidado.

<h2 id="ambientes">⚙️ Variáveis de Ambiente</h2>

[.env.example](.env.example) é o único arquivo de referência — reúne todas as variáveis com valores sugeridos e, nos comentários, o que muda entre desenvolvimento e produção (hoje, só `APP_PORT`). Copie para `.env` em qualquer um dos dois ambientes:

```bash
cp .env.example .env
```

| Variável                   | Descrição                                                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `APP_PORT`                 | Porta do servidor Vite (dev/preview) e porta publicada pelo Docker Compose. Nunca hardcoded.                     |
| `VITE_GITHUB_URL`          | URL do repositório exibida no botão "GitHub" da Hero e nas seções Contato / Por Trás do Projeto.                 |
| `VITE_BOT_DEMO_URL`        | Link do bot do Telegram, usado pelo botão "Demo do Bot" do Header e da seção Demonstração.                       |
| `VITE_ADMIN_DEMO_URL`      | URL do painel administrativo, usado pelo botão "Demo do Painel" do Header e da seção Demonstração.               |
| `VITE_LINKEDIN_URL`        | Perfil do LinkedIn exibido em Por Trás do Projeto e no Footer.                                                   |
| `VITE_PORTFOLIO_URL`       | URL do portfólio pessoal exibida em Por Trás do Projeto, Contato e no Footer.                                    |
| `VITE_DEVELOPER_EMAIL`     | Email de contato exibido em Por Trás do Projeto e Contato.                                                       |
| `VITE_DEVELOPER_PHOTO_URL` | Foto da desenvolvedora em Por Trás do Projeto. Em branco mantém o placeholder ("Foto em breve").                 |
| `VITE_CURRICULUM_API_URL`  | Endpoint que alimenta o modal de seleção de currículos (botões "Currículo" do Contato e de Por Trás do Projeto). |

Todas com prefixo `VITE_` obrigatório — é a convenção do Vite para expor uma variável ao código do navegador.

> Variáveis sem o prefixo `VITE_` (como `APP_PORT`) só existem no `vite.config.ts` (Node/build-time) — nunca chegam ao bundle do navegador.

<h2 id="scripts">📜 Scripts</h2>

| Script                 | Descrição                                               |
| ---------------------- | ------------------------------------------------------- |
| `npm run dev`          | Inicia o servidor de desenvolvimento (Vite).            |
| `npm run build`        | Verifica tipos (`tsc -b`) e gera o build de produção.   |
| `npm run preview`      | Serve o build de produção localmente, para conferência. |
| `npm run docker:up`    | Sobe o ambiente de desenvolvimento via Docker Compose.  |
| `npm run docker:down`  | Encerra os containers de desenvolvimento.               |
| `npm run docker:build` | Builda a imagem de produção via Docker Compose.         |
| `npm run lint`         | Analisa o código com ESLint.                            |
| `npm run lint:fix`     | Corrige automaticamente o que for possível.             |
| `npm run format`       | Formata o projeto inteiro com Prettier.                 |
| `npm run format:check` | Verifica formatação sem alterar arquivos (usado em CI). |
| `npm run typecheck`    | Verificação de tipos isolada, sem gerar build.          |

Todos os scripts usam apenas comandos Node/CLI multiplataforma (`vite`, `tsc`, `eslint`, `prettier`, `docker compose`) — nenhum depende de sintaxe de shell específica, então funcionam de forma idêntica no Windows, Linux e macOS.

<h2 id="qualidade">✅ Qualidade de Código</h2>

- **ESLint** (flat config) com `typescript-eslint`, as regras de Hooks/React Compiler de `eslint-plugin-react-hooks` (inclui checagens de pureza, imutabilidade e uso correto de memoização) e `eslint-plugin-react-refresh`; `eslint-config-prettier` desliga qualquer regra de estilo que colidiria com o Prettier.
- **Prettier** cuida de 100% da formatação — sem aspas/ponto-e-vírgula/trailing comma decididos manualmente.
- **Husky + lint-staged**: todo commit roda ESLint (com `--fix`) e Prettier apenas nos arquivos staged, nunca no repositório inteiro.
- **TypeScript estrito**: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch` habilitados; path alias `@/*` aponta para `src/*`.
- **Responsabilidade única por componente**: nenhum componente "faz tudo" — cada uma das sete seções da landing é a composição de várias peças independentes (conteúdo, camadas de fundo, mockups), cada uma testável e substituível isoladamente.
- **Acessibilidade**: navegação por teclado (`Escape` fecha o menu mobile e o modal de Currículo, foco visível em todo elemento interativo, focus trap no modal), `aria-label`/`aria-hidden` corretos, contraste AA na paleta escura, e toda animação passa pelo `<MotionConfig reducedMotion="user">` do Framer Motion — quando o visitante prefere menos movimento, isso é respeitado globalmente, sem precisar de checagem manual em cada componente.
- **Performance**: fontes auto-hospedadas (sem requisição externa bloqueante), ícones importados individualmente (tree-shaking via `lucide-react`), animações contínuas usam `transform`/`opacity` (aceleradas por GPU, nunca propriedades que disparam layout), listas com posições pseudo-aleatórias são geradas de forma determinística e memoizadas, navegação ativa via `IntersectionObserver` (sem scroll listeners custosos), e o modal de Currículo carrega seu próprio chunk sob demanda, apenas no primeiro clique.

<h2 id="related-projects">🔗 Projetos Relacionados</h2>

| Projeto                  | Descrição                                                                                                                        | Repositório                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| ⚙️ Backend (API + Bot)   | API e bot do Telegram responsáveis pelas regras de negócio, autenticação, pagamentos, notificações e integrações do ecossistema. | https://github.com/issagomesdev/smart-option       |
| 📊 Painel Administrativo | Painel usado pela equipe para gerenciar usuários, aprovar solicitações financeiras e acompanhar a rede de afiliados.             | https://github.com/issagomesdev/smart-option-admin |

---

<p align="center">Construído como demonstração técnica do ecossistema <a href="https://github.com/issagomesdev/smart-option">Smart Option</a>.</p>
