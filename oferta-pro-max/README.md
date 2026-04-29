# Oferta Pro Max

Plataforma inteligente de promoções regionais e lista estratégica de compras, criada para conectar consumidores e empresas às melhores oportunidades comerciais da sua cidade.

## Visão do produto

O Oferta Pro Max é uma solução digital focada em transformar a forma como pessoas e negócios descobrem ofertas locais, planejam compras e economizam com inteligência.

A plataforma centraliza promoções de mercados e estabelecimentos regionais em uma experiência moderna, rápida e altamente escalável.

## Proposta de valor

* Descoberta simplificada de ofertas regionais
* Economia de tempo e dinheiro
* Planejamento inteligente de compras
* Experiência digital premium
* Canal de visibilidade para comércios locais
* Base tecnológica preparada para expansão multi-cidade

## Stack Técnico

### Frontend
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI + Lucide Icons
- **State Management:** React Hooks + Supabase Realtime
- **Animation:** Framer Motion
- **Forms & Validation:** Zod
- **PWA:** next-pwa ready

### Backend
- **Database:** Supabase PostgreSQL + RLS
- **Authentication:** Supabase Auth (magic link + email/password)
- **Storage:** Supabase Storage (imagens de ofertas)
- **Edge Functions:** Supabase Edge Functions
- **Realtime:** Supabase Realtime (atualizações live)

### Infraestrutura & DevOps
- **Hosting:** Vercel (frontend)
- **CI/CD:** GitHub Actions (lint + typecheck + build)
- **Version Control:** GitHub
- **Environments:** Production, Preview, Development
- **Security:** RLS obrigatório, HTTPS, CSP headers

## Getting Started

### Pré-requisitos
- Node.js 22+
- npm 10+
- Conta Supabase com projeto configurado
- Vercel conectado ao GitHub

### Setup Local

1. Clone e instale:
```bash
git clone https://github.com/mlvitorino1/Oferta-Pro-Max-RP.git
cd Oferta-Pro-Max-RP
npm install
```

2. Configure variáveis de ambiente:
```bash
cp .env.example .env.local
# Edite .env.local com suas chaves do Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

3. Rode em desenvolvimento:
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Comandos Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build otimizado para produção
npm run start        # Servidor de produção
npm run lint         # ESLint + TypeScript check
npm run typecheck    # Verificação de tipos TypeScript
npm run format       # Prettier (formatar código)
npm run format:check # Prettier (verificar formatação)
```

## Arquitetura do Projeto

```
app/
├── (marketing)/     # Landing page institucional
├── (auth)/          # Login, register, forgot-password
├── (app)/           # Rotas protegidas: dashboard, offers, shopping-list
├── admin/           # Painel administrativo (super_admin, operators)
├── api/             # API routes e webhooks
└── layout.tsx       # Root layout com PWA metadata

components/
├── ui/              # Shadcn UI + custom base components
├── layout/          # Header, footer, navigation
├── auth/            # Login/register forms
├── offers/          # OfferCard, OfferGrid, filters
├── shopping-list/   # ShoppingListCard, ItemList
├── admin/           # Admin CRUD components
└── shared/          # Shared utilities

lib/
├── supabase/        # Client, server, middleware (SSR)
├── utils/           # cn(), formatters, helpers
└── validations/     # Zod schemas

hooks/
├── use-auth.ts      # Session + profile + isPro

types/
├── database.ts      # TypeScript types do schema
└── supabase.ts      # Supabase generated types

.github/workflows/
├── ci.yml           # Lint + typecheck + build em PRs
└── deploy.yml       # Deploy automático em main
```

## Segurança

✅ RLS (Row Level Security) em todas as tabelas  
✅ HTTPS + CSP headers + X-Frame-Options  
✅ `.env.local` e credenciais nunca no repositório  
✅ Service role key isolado (nunca no frontend)  
✅ Autenticação via Supabase Auth (magic link)  
✅ Middleware de proteção de rotas  
✅ Input validation com Zod  

## Status Atual

- ✅ Database schema completo
- ✅ RLS e segurança hardened
- ✅ Next.js setup com TypeScript + Tailwind
- ✅ Supabase clients (browser, server, middleware)
- ✅ useAuth hook
- ✅ Zod validations
- ✅ GitHub Actions CI/CD
- ⏳ Design system e componentes base (próxima sprint)
- ⏳ Feed de ofertas
- ⏳ Lista inteligente de compras
- ⏳ Painel administrativo
- ⏳ Billing e assinaturas

## Roadmap

**Fase 1 — MVP Mínimo (4 sprints)**
- Fundação técnica ✅
- Database & Auth
- Design System
- Feed de ofertas
- Lista de compras
- Admin básico

**Fase 2 — Escala (3 sprints)**
- Notificações push
- Analytics
- SEO + performance
- Hardening de segurança

**Fase 3 — Expansão (2 sprints)**
- Multi-cidade
- Novas features
- Integração de pagamentos
- Growth loops

## Contribuindo

Este é um projeto privado. Para contribuir:

1. Crie uma branch: `git checkout -b feature/sua-feature`
2. Commit: `git commit -m "Add: descrição clara"`
3. Push: `git push origin feature/sua-feature`
4. Abra um Pull Request com descrição detalhada

## Padrões de Código

- **TypeScript:** strict mode, sem `any`
- **Componentes:** functional components com hooks
- **Imports:** usar path aliases (`@/`, `@components/`, etc.)
- **Formatação:** Prettier (automático via husky)
- **Lint:** ESLint (automático em commits)

## Documentação Adicional

- [ARCHITECTURE.md](./ARCHITECTURE.md) — Decisões técnicas e roadmap detalhado
- [TASKS.md](./TASKS.md) — Backlog de execução com status
- `.env.example` — Template de variáveis de ambiente

## Suporte

Para dúvidas técnicas ou bugs, abra uma issue no GitHub.

## License

Proprietary — Todos os direitos reservados.
