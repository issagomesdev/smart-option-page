<p align="center">
  <a href="./README.md">🇺🇸 English</a> |
  <b>🇧🇷 Português</b> |
  <a href="./README.es.md">🇪🇸 Español</a>
</p>

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

**Smart Option** é uma **plataforma de investimentos automatizados** que combina a praticidade de um **bot do Telegram** com um **painel administrativo** dedicado ao gerenciamento da operação. Integrada ao **PIX** por meio do **Asaas**, a plataforma permite que os usuários realizem **depósitos**, adquiram **planos de rendimento**, acompanhem seus **rendimentos** e **movimentações financeiras**, gerenciem uma **rede de afiliados** com até **três níveis de comissão** e solicitem **saques**, tudo de forma simples, rápida e sem sair do **Telegram**.

Este repositório reúne a **landing page oficial** do **Smart Option**, desenvolvida para apresentar a plataforma, seus diferenciais e a experiência proposta aos usuários. Construída com foco em **design**, **performance**, **responsividade** e **experiência do usuário**, a aplicação demonstra visualmente os principais fluxos do produto por meio de interfaces interativas, animações e mockups desenvolvidos em **React**, sem depender do backend ou utilizar dados reais. A única integração externa presente é a API responsável por fornecer a lista de currículos exibida no modal de download.

<h2 id="arquitetura">🏗️ Arquitetura do Frontend</h2>

Embora seja uma landing page, o projeto segue a mesma preocupação com organização, escalabilidade e separação de responsabilidades aplicada aos demais repositórios do ecossistema Smart Option. A estrutura é organizada por tipo de artefato e não por páginas, favorecendo reutilização, manutenção e evolução contínua.

### Decisões de arquitetura

- **Organização por responsabilidade:** componentes, hooks, animações, constantes, utilitários, tipos e assets possuem diretórios próprios, reduzindo acoplamento e facilitando a localização do código.
- **Cada seção é um módulo independente:** as seções da landing (`sections/`) apenas orquestram componentes menores, reutilizáveis e focados em uma única responsabilidade, seguindo princípios de composição em vez de componentes monolíticos.
- **Sistema de fundos desacoplado:** grades, partículas, glows, auroras, blueprints, wireframes e demais elementos visuais são componentes independentes (`components/background/`), permitindo criar identidades diferentes para cada seção sem duplicação de código.
- **Animações centralizadas:** todas as animações são definidas em um único módulo (`animations/`), mantendo consistência visual e evitando lógica de animação espalhada pelos componentes.
- **Navegação sincronizada por observação:** a identificação da seção ativa utiliza `IntersectionObserver` (`useActiveSection`), sincronizando automaticamente Header e menu mobile sem listeners contínuos de scroll, proporcionando melhor desempenho.
- **Modal de currículos desacoplado:** o fluxo de seleção de currículos é dividido em `services` (requisições), `hooks` (estado e cache), `components` (interface) e `utils`, permitindo testar e evoluir cada camada de forma independente.
- **Configuração centralizada:** URLs, conteúdos estáticos, links, navegação e demais configurações ficam concentrados em constantes e arquivos de configuração, evitando valores espalhados pelo projeto.
- **Frontend independente:** a landing não depende do backend, do painel administrativo ou do bot durante a execução. Toda a experiência é reproduzida por meio de componentes React e mockups desenvolvidos manualmente; apenas o modal de currículos realiza uma chamada HTTP para obter a lista de arquivos disponível para download.

<h2 id="secoes">🧩 Seções da Landing Page</h2>

| Seção                   | Âncora                 | Descrição                                                                                                                                       |
| ----------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hero**                | Topo da página         | Apresentação da plataforma, proposta de valor, principais diferenciais, CTAs e composição visual inspirada na experiência do produto.           |
| **Sobre**               | `#sobre`               | Visão geral do ecossistema Smart Option, ilustrando como usuários, bot do Telegram, pagamentos, automações e painel administrativo se conectam. |
| **Funcionalidades**     | `#funcionalidades`     | Panorama das principais funcionalidades do Telegram Bot, do Painel Administrativo e da integração entre todos os módulos da plataforma.         |
| **Arquitetura**         | `#arquitetura`         | Diagrama da arquitetura do ecossistema, módulos que compõem a solução e tecnologias utilizadas em cada camada.                                  |
| **Demonstração**        | `#demonstracao`        | Vídeo do projeto em funcionamento, além de links para as demonstrações públicas do bot e do painel administrativo.                              |
| **Por Trás do Projeto** | `#por-tras-do-projeto` | Apresentação da desenvolvedora, abordagem de desenvolvimento, pilares de qualidade, tecnologias dominadas e canais profissionais.               |
| **Contato**             | `#contato`             | Formas de contato, acesso aos currículos, repositórios do projeto e demais canais profissionais.                                                |

### Recursos compartilhados

- **Modal de Currículos** — carregado sob demanda (_lazy loading_), consulta uma API para listar os currículos disponíveis, mantém cache em memória e implementa recursos de acessibilidade como _focus trap_ e navegação por teclado.
- **Header** — navegação sincronizada automaticamente com a seção visível da página, incluindo menu responsivo e destaque da seção ativa.
- **Footer** — navegação complementar, links para redes sociais e acesso aos projetos relacionados do ecossistema Smart Option.

<h2 id="stack">🛠️ Stack</h2>

| Categoria                    | Tecnologias                                                                                                                              |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**                | [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/)                                                         |
| **Build**                    | [Vite](https://vite.dev/)                                                                                                                |
| **Estilização**              | [Tailwind CSS 4](https://tailwindcss.com/)                                                                                               |
| **Animações**                | [Framer Motion](https://motion.dev/)                                                                                                     |
| **Experiência de Navegação** | [Lenis](https://lenis.darkroom.engineering/) (rolagem suave)                                                                             |
| **Ícones**                   | [Lucide React](https://lucide.dev/)                                                                                                      |
| **Tipografia**               | [Inter](https://fonts.google.com/specimen/Inter) e [Manrope](https://fonts.google.com/specimen/Manrope) (variable fonts auto-hospedadas) |
| **Qualidade de Código**      | ESLint, Prettier, Husky e lint-staged                                                                                                    |
| **Infraestrutura**           | Docker multi-stage, Docker Compose e Nginx                                                                                               |

<h2 id="estrutura">📁 Estrutura</h2>

```text
src/
├─ app/                      # Composição raiz da aplicação (Providers e App)
├─ sections/                 # Seções da landing page
│
├─ components/
│  ├─ ui/                    # Componentes reutilizáveis de interface
│  ├─ layout/                # Header, Footer, Logo, Container e navegação
│  ├─ background/            # Camadas visuais reutilizáveis (grid, glow, aurora, partículas, blueprint...)
│  ├─ hero/                  # Mockups e componentes da Hero
│  ├─ about/                 # Componentes da seção Sobre
│  ├─ features/              # Componentes da seção Funcionalidades
│  ├─ architecture/          # Diagramas e componentes da seção Arquitetura
│  ├─ demo/                  # Vídeo e demonstrações
│  ├─ developer/             # Componentes da seção Por Trás do Projeto
│  ├─ contact/               # Cards e informações de contato
│  ├─ curriculum/            # Modal de seleção de currículos
│  └─ common/                # Componentes compartilhados
│
├─ hooks/                    # Hooks customizados
├─ services/                 # Comunicação com APIs externas
├─ lib/                      # Bibliotecas e inicializações compartilhadas
├─ animations/               # Variantes e utilitários do Framer Motion
├─ constants/                # Conteúdo e configurações da aplicação
├─ types/                    # Tipos compartilhados
├─ utils/                    # Funções utilitárias
├─ styles/                   # Estilos globais e tokens de tema
└─ assets/                   # Recursos estáticos
```

<h2 id="comecando">▶️ Começando</h2>

### Pré-requisitos

- **Node.js 22+** (apenas para execução local)
- **Docker** e **Docker Compose** (recomendado)

### Executando com Docker

```bash
git clone <url-do-repositorio> smart-option-page
cd smart-option-page

cp .env.example .env

npm run docker:up
```

A aplicação ficará disponível em:

```text
http://localhost:3002
```

> A porta pode ser alterada pela variável `APP_PORT` no arquivo `.env`.

O ambiente já possui **Hot Reload**, refletindo automaticamente alterações realizadas em `src/`.

Para encerrar os containers:

```bash
npm run docker:down
```

### Executando localmente

```bash
git clone <url-do-repositorio> smart-option-page
cd smart-option-page

cp .env.example .env

npm install
npm run dev
```

<h2 id="docker">🐳 Docker</h2>

O projeto possui ambientes independentes para **desenvolvimento** e **produção**, cada um otimizado para seu propósito.

| Arquivo                   | Descrição                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------- |
| `Dockerfile.dev`          | Ambiente de desenvolvimento com Hot Reload via Vite.                                        |
| `Dockerfile.prod`         | Build multi-stage otimizado para produção, servindo os arquivos estáticos através do Nginx. |
| `docker-compose.dev.yml`  | Inicializa o ambiente de desenvolvimento.                                                   |
| `docker-compose.prod.yml` | Inicializa a versão de produção da aplicação.                                               |

### Desenvolvimento

```bash
npm run docker:up
```

Para encerrar:

```bash
npm run docker:down
```

### Produção

```bash
npm run docker:build

docker compose -f docker-compose.prod.yml up -d
```

A porta utilizada pela aplicação é configurada pela variável `APP_PORT`, permitindo alterar o ambiente sem modificar o código-fonte.

<h2 id="ambientes">⚙️ Variáveis de Ambiente</h2>

Todas as variáveis necessárias para executar a aplicação estão documentadas em **`.env.example`**.

```bash
cp .env.example .env
```

| Variável                   | Descrição                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------- |
| `APP_PORT`                 | Porta utilizada pelo servidor de desenvolvimento e pelos containers Docker.        |
| `VITE_GITHUB_URL`          | Repositório do projeto exibido na interface.                                       |
| `VITE_BOT_DEMO_URL`        | Link para a demonstração do bot do Telegram.                                       |
| `VITE_ADMIN_DEMO_URL`      | Link para a demonstração do painel administrativo.                                 |
| `VITE_LINKEDIN_URL`        | Perfil do LinkedIn da desenvolvedora.                                              |
| `VITE_PORTFOLIO_URL`       | Link para o portfólio pessoal.                                                     |
| `VITE_DEVELOPER_EMAIL`     | Endereço de e-mail exibido na seção de contato.                                    |
| `VITE_DEVELOPER_PHOTO_URL` | Foto utilizada na seção "Por Trás do Projeto".                                     |
| `VITE_CURRICULUM_API_URL`  | Endpoint responsável por fornecer a lista de currículos disponíveis para download. |

> **Observação**
>
> O Vite expõe ao frontend apenas variáveis iniciadas com o prefixo **`VITE_`**. Variáveis sem esse prefixo permanecem disponíveis apenas durante o processo de build ou na configuração do servidor, como é o caso de `APP_PORT`.

<h2 id="scripts">📜 Scripts</h2>

| Script                 | Descrição                                                                     |
| ---------------------- | ----------------------------------------------------------------------------- |
| `npm run dev`          | Inicia o ambiente de desenvolvimento.                                         |
| `npm run build`        | Executa a verificação de tipos e gera o build de produção.                    |
| `npm run preview`      | Executa localmente a versão de produção gerada pelo build.                    |
| `npm run docker:up`    | Inicializa o ambiente de desenvolvimento utilizando Docker Compose.           |
| `npm run docker:down`  | Encerra os containers do ambiente de desenvolvimento.                         |
| `npm run docker:build` | Gera a imagem Docker otimizada para produção.                                 |
| `npm run lint`         | Executa a análise estática do código com ESLint.                              |
| `npm run lint:fix`     | Corrige automaticamente os problemas encontrados pelo ESLint quando possível. |
| `npm run format`       | Formata todo o projeto com Prettier.                                          |
| `npm run format:check` | Verifica a formatação do código sem modificar arquivos.                       |
| `npm run typecheck`    | Executa apenas a verificação de tipos do TypeScript.                          |

> Todos os scripts utilizam ferramentas multiplataforma (`Vite`, `TypeScript`, `ESLint`, `Prettier` e `Docker Compose`), garantindo o mesmo comportamento em **Windows**, **Linux** e **macOS**.

<h2 id="qualidade">✅ Qualidade de Código</h2>

O projeto foi desenvolvido priorizando **legibilidade**, **manutenibilidade**, **desempenho**, **acessibilidade** e **consistência visual**, seguindo boas práticas modernas do ecossistema React.

- **Análise estática:** ESLint (Flat Config) com `typescript-eslint`, regras do React Hooks/React Compiler e integração com Prettier para garantir um padrão consistente de código.
- **Formatação automática:** toda a formatação do projeto é centralizada no Prettier, eliminando diferenças de estilo entre contribuições.
- **Git Hooks:** Husky e lint-staged executam automaticamente ESLint e Prettier apenas nos arquivos modificados antes de cada commit.
- **TypeScript em modo estrito:** tipagem rigorosa, aliases de importação e verificações adicionais para reduzir erros em tempo de desenvolvimento.
- **Arquitetura baseada em composição:** cada seção da landing é formada por componentes pequenos, reutilizáveis e com responsabilidade única, favorecendo baixo acoplamento e evolução independente.
- **Acessibilidade:** suporte completo à navegação por teclado, gerenciamento de foco, atributos ARIA, contraste adequado e respeito às preferências de redução de movimento do usuário.
- **Performance:** carregamento sob demanda (_lazy loading_), fontes auto-hospedadas, tree-shaking de ícones, animações aceleradas por GPU, navegação baseada em `IntersectionObserver` e renderizações otimizadas para minimizar processamento desnecessário.
- **Experiência do usuário:** animações fluidas, interface totalmente responsiva, transições consistentes e comportamento uniforme entre dispositivos e tamanhos de tela.

<h2 id="related-projects">🔗 Projetos Relacionados</h2>

O **Smart Option** foi desenvolvido como um ecossistema composto por aplicações independentes, cada uma dedicada a uma responsabilidade específica. A divisão em múltiplos repositórios proporciona maior organização, facilita o desenvolvimento paralelo e torna a arquitetura mais modular e escalável.

| Projeto                    | Descrição                                                                                                                                           | GitHub                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| ⚙️ Backend (API + Bot)     | API e bot do Telegram responsáveis pelas regras de negócio, autenticação, pagamentos, notificações e integrações usadas pelo painel administrativo. | https://github.com/issagomesdev/smart-option       |
| 👑 Painel Admin (Frontend) | Interface administrativa para gerenciamento da plataforma Smart Option.                                                                             | https://github.com/issagomesdev/smart-option-admin |
