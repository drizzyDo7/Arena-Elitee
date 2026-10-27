# Arena de Elite 🏆

![Preview](./apps/web/public/preview.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

Plataforma de bolão para palpites de partidas de futebol. Os usuários fazem palpites nos placares das partidas, e o sistema calcula automaticamente os pontos e rankings quando as partidas são finalizadas.

> 🚀 **Projeto Open Source** - Contribuições são bem-vindas!

## 📱 Comunidade

Participe da nossa comunidade no WhatsApp para tirar dúvidas, trocar ideias e acompanhar as novidades do projeto:

[![WhatsApp](https://img.shields.io/badge/WhatsApp-Comunidade-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/K6Ni8HK72Bw2us79Erk0t6)

**[👉 Entrar no Grupo da Comunidade](https://chat.whatsapp.com/K6Ni8HK72Bw2us79Erk0t6)**

## 📋 Sobre o Projeto

Arena de Elite é uma aplicação full-stack que permite aos usuários:

- 🎯 Fazer palpites em partidas de futebol
- 💰 Pagar via PIX (integração com Mercado Pago)
- 🏅 Competir no ranking de pontuação
- 📊 Acompanhar estatísticas e resultados

## 🏗️ Estrutura do Projeto

Este é um monorepo gerenciado com [Turborepo](https://turbo.build/repo) e [pnpm workspaces](https://pnpm.io/workspaces).

```
arena-de-elite/
├── apps/
│   ├── api/          # API REST Spring Boot (Java 21)
│   └── web/          # Frontend Next.js (React 19)
├── turbo.json        # Configuração Turborepo
└── pnpm-workspace.yaml
```

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
|--------|------------|
| Frontend | Next.js 15, React 19, TypeScript, TailwindCSS, shadcn/ui |
| Backend | Spring Boot 3.4, Java 21, Spring Data JPA |
| Banco de Dados | PostgreSQL 16 |
| Migrations | Flyway |
| Pagamento | Mercado Pago PIX |
| API Externa | API-Football |

## ⚡ Pré-requisitos

- Node.js 20+
- pnpm 9+
- Java 21
- Maven 3.9+
- PostgreSQL 16
- Docker (opcional)

## 🚀 Começando

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/arena-de-elite.git
cd arena-de-elite
```

### 2. Configure as variáveis de ambiente

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
```

**API (`apps/api/.env`):**

| Variável | Descrição |
|----------|-----------|
| `DB_URL` | String de conexão PostgreSQL |
| `DB_USERNAME` | Usuário do banco |
| `DB_PASSWORD` | Senha do banco |
| `API_FOOTBALL_KEY` | Chave de acesso API-Football |
| `MERCADO_PAGO_ACCESS_TOKEN` | Credenciais Mercado Pago |

**Web (`apps/web/.env.local`):**

| Variável | Descrição |
|----------|-----------|
| `NEXT_PUBLIC_API_URL` | URL da API backend |

### 3. Inicie o banco de dados

```bash
# Usando Docker
docker run -d \
  --name arena-db \
  -e POSTGRES_USER=arena \
  -e POSTGRES_PASSWORD=arena123 \
  -e POSTGRES_DB=arena \
  -p 5432:5432 \
  postgres:16
```

### 4. Execute a aplicação

**Backend (API):**

```bash
cd apps/api
mvn spring-boot:run
```

A API estará disponível em `http://localhost:3001`.

**Frontend (Web):**

```bash
pnpm install
pnpm dev
```

A aplicação web estará disponível em `http://localhost:3000`.

## 📚 Documentação

### Principais Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/v1/rounds` | Listar todas as rodadas |
| GET | `/api/v1/rounds/:id` | Obter detalhes da rodada |
| POST | `/api/v1/rounds/sync` | Sincronizar rodadas da API-Football |
| POST | `/api/v1/bets` | Submeter novo palpite |
| GET | `/api/v1/bets/:ticketCode` | Buscar palpite por bilhete |
| POST | `/api/v1/payments` | Gerar pagamento PIX |
| POST | `/api/v1/payments/webhook` | Webhook de pagamento |

### Documentação Detalhada

- 📖 [Arquitetura da API](apps/api/README.md)
- 📖 [Arquitetura do Web](apps/web/README.md)

## 🤝 Como Contribuir

Adoramos contribuições da comunidade! Veja como você pode ajudar:

1. 🍴 Faça um fork do projeto
2. 🔧 Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. 💾 Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. 📤 Push para a branch (`git push origin feature/nova-feature`)
5. 🔃 Abra um Pull Request

Por favor, leia nosso [Guia de Contribuição](CONTRIBUTING.md) para mais detalhes.

### Ideias de Contribuição

- 🐛 Correção de bugs
- ✨ Novas features
- 📝 Melhorias na documentação
- 🎨 Melhorias de UI/UX
- 🧪 Testes automatizados
- 🌍 Tradução para outros idiomas

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE) - veja o arquivo LICENSE para detalhes.

## 💬 Suporte

Tem alguma dúvida ou sugestão?

- 💬 [Entre no grupo do WhatsApp](https://chat.whatsapp.com/K6Ni8HK72Bw2us79Erk0t6)
- 🐛 [Abra uma issue](https://github.com/seu-usuario/arena-de-elite/issues)

---

Feito com ❤️ pela comunidade Arena de Elite
