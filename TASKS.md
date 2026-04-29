# TASKS.md

# Oferta Pro Max — Backlog de Execução

> Documento vivo. Atualizar a cada sprint. Prioridade top-down por fase.
> Status: `[ ]` Pendente · `[x]` Concluído · `[~]` Em progresso · `[!]` Bloqueado

---

## LEGENDA DE PRIORIDADE

| Símbolo | Significado |
|---------|-------------|
| 🔴 | Crítico — bloqueia avanço |
| 🟠 | Alta — necessário na sprint |
| 🟡 | Média — importante mas não urgente |
| 🟢 | Melhoria — qualidade / escala futura |

---

## FASE 0 — FUNDAÇÃO TÉCNICA

> Objetivo: ambiente pronto, base segura, zero dívida técnica antes de codar produto.

### Infraestrutura & Ambiente

- [X] 🔴 Criar repositório GitHub com estrutura de branches (`main`, `develop`, `feature/*`, `hotfix/*`) 28/04/2026
- [X] 🔴 Configurar projeto Supabase Cloud (prod + staging) 28/04/2026
- [X] 🔴 Configurar projeto Vercel conectado ao GitHub (preview por PR automático) 28/04/2026
- [ ] 🔴 Configurar variáveis de ambiente (`.env.local`, `.env.production`) com vault seguro
- [ ] 🔴 Definir regras de branch protection no GitHub (`main` requer PR + review)
- [ ] 🟠 Configurar domínio e SSL no Vercel
- [X] 🟠 Separar projetos Supabase: `ofertapromax-prod` e `ofertapromax-staging` 28/04/2026
- [ ] 🟡 Configurar Sentry para captura de erros (frontend + edge functions)

### Setup Next.js

- [X] 🔴 Inicializar projeto Next.js 14+ com App Router + TypeScript strict 29/04/2026
- [X] 🔴 Instalar e configurar Tailwind CSS + Shadcn UI 29/04/2026
- [X] 🔴 Configurar ESLint + Prettier + Husky + lint-staged 29/04/2026
- [X] 🔴 Configurar path aliases em `tsconfig.json` (`@/`, `@components/`, `@lib/`) 29/04/2026
- [X] 🟠 Configurar estrutura de pastas conforme arquitetura (`/app`, `/components`, `/lib`, `/hooks`, `/types`, `/services`) 29/04/2026
- [X] 🟠 Configurar PWA com `next-pwa` (manifest, service worker, ícones) 29/04/2026
- [ ] 🟡 Configurar Framer Motion

### Pipeline CI/CD

- [X] 🔴 Criar workflow GitHub Actions para `lint + typecheck` em PRs 29/04/2026
- [X] 🟠 Criar workflow de deploy automático no merge para `main` 29/04/2026
- [X] 🟠 Configurar preview deploy automático por PR (Vercel integration) 28/04/2026
- [X] 🟡 Criar workflow de smoke test pós-deploy em produção 29/04/2026

---

## FASE 1 — BANCO DE DADOS & AUTH

> Objetivo: schema sólido, seguro, com RLS ativo antes de qualquer dado real.

### Schema PostgreSQL (Supabase)

- [X] 🔴 Criar tabela `profiles` (id, email, full_name, avatar_url, city_id, plan_id, created_at, updated_at) 28/04/2026
- [X] 🔴 Criar tabela `cities` (id, name, state, slug, active, created_at) 28/04/2026
- [X] 🔴 Criar tabela `markets` (id, name, city_id, logo_url, address, active, created_at) 28/04/2026
- [X] 🔴 Criar tabela `categories` (id, name, slug, icon, active) 28/04/2026
- [X] 🔴 Criar tabela `products` (id, name, category_id, unit, created_at) 28/04/2026
- [X] 🔴 Criar tabela `offers` (id, product_id, market_id, price, original_price, valid_from, valid_until, image_url, active, created_at, updated_at) 28/04/2026
- [X] 🔴 Criar tabela `subscriptions` (id, user_id, plan, status, trial_ends_at, current_period_end, payment_provider_id, created_at) 28/04/2026
- [X] 🔴 Criar tabela `shopping_lists` (id, user_id, name, city_id, created_at) 28/04/2026
- [X] 🔴 Criar tabela `shopping_list_items` (id, list_id, product_id, offer_id, quantity, checked, created_at) 28/04/2026
- [X] 🔴 Criar tabela `notifications` (id, user_id, title, body, type, read, created_at) 28/04/2026
- [X] 🔴 Criar tabela `admins` (id, user_id, role, city_id, created_at) 28/04/2026
- [X] 🔴 Criar tabela `audit_logs` (id, admin_id, action, entity, entity_id, payload, created_at) 28/04/2026
- [X] 🟠 Criar índices: `offers(market_id)`, `offers(valid_until)`, `offers(active)`, `shopping_list_items(list_id)`, `profiles(city_id)` 28/04/2026
- [X] 🟠 Ativar `updated_at` automático via trigger em tabelas principais 28/04/2026
- [X] 🟡 Criar enums PostgreSQL: `subscription_status`, `admin_role`, `notification_type` 28/04/2026

### Row Level Security (RLS)

- [X] 🔴 Ativar RLS em todas as tabelas 28/04/2026
- [X] 🔴 Policy `profiles`: usuário só acessa o próprio perfil 28/04/2026
- [X] 🔴 Policy `shopping_lists`: usuário só acessa suas listas 28/04/2026
- [X] 🔴 Policy `shopping_list_items`: usuário só acessa itens das suas listas 28/04/2026
- [X] 🔴 Policy `subscriptions`: usuário só vê sua própria subscription 28/04/2026
- [X] 🔴 Policy `offers`, `markets`, `cities`, `categories`, `products`: leitura pública (ou autenticada) 28/04/2026
- [X] 🔴 Policy `admins`, `audit_logs`: somente service role / admin autenticado 28/04/2026
- [ ] 🟠 Testar RLS com usuário de teste para validar isolamento

### Autenticação

- [ ] 🔴 Configurar Supabase Auth (email/password + magic link)
- [X] 🔴 Criar fluxo de cadastro com criação automática de `profile` via trigger Supabase 28/04/2026
- [X] 🔴 Criar hook `useAuth()` com contexto global no Next.js 29/04/2026
- [X] 🔴 Implementar middleware de proteção de rotas (`/dashboard/*`, `/admin/*`) 29/04/2026
- [ ] 🟠 Página `/auth/login` com formulário email + senha
- [ ] 🟠 Página `/auth/register` com onboarding mínimo
- [ ] 🟠 Página `/auth/forgot-password` com magic link
- [ ] 🟡 Callback de OAuth (Google) — preparar estrutura, implementar futuramente

---

## FASE 2 — LAYOUT BASE & COMPONENTES

> Objetivo: sistema de design consistente, reutilizável, mobile-first.

### Design System

- [ ] 🔴 Definir tokens de design: cores, tipografia, espaçamentos no `tailwind.config.ts`
- [ ] 🔴 Criar componentes base: `Button`, `Input`, `Card`, `Badge`, `Avatar`, `Skeleton`
- [ ] 🔴 Criar `AppLayout` com header mobile-first + bottom nav
- [ ] 🟠 Criar `AuthLayout` (sem nav, fundo limpo)
- [ ] 🟠 Criar `AdminLayout` com sidebar responsiva
- [ ] 🟠 Criar componente `LoadingScreen` e `EmptyState` globais
- [ ] 🟡 Criar componente `Toast` / `Notification` global

### Páginas de Estrutura

- [ ] 🟠 Criar `/` — Landing page institucional (marketing)
- [ ] 🟠 Criar `/onboarding` — Seleção de cidade + perfil inicial
- [ ] 🟠 Criar `/dashboard` — Shell inicial com navegação
- [ ] 🟡 Criar `/profile` — Edição de dados pessoais
- [ ] 🟡 Criar página 404 e erro customizados

---

## FASE 3 — FEED DE OFERTAS

> Objetivo: funcionalidade core do produto — descoberta de ofertas.

### Backend / Queries

- [ ] 🔴 Criar query `getOffersByCity(cityId)` com paginação e filtros
- [ ] 🔴 Criar query `getOffersByMarket(marketId)` paginada
- [ ] 🔴 Criar query `getOffersByCategory(categoryId, cityId)` paginada
- [ ] 🟠 Criar query `getFeaturedOffers(cityId)` para destaques do feed
- [ ] 🟡 Criar view materializada futura para ofertas ativas + ordenação de relevância

### Frontend — Feed

- [ ] 🔴 Criar página `/offers` — Feed principal de ofertas
- [ ] 🔴 Criar componente `OfferCard` com imagem, preço, validade, mercado
- [ ] 🔴 Criar componente `OfferGrid` / `OfferList` com virtualização
- [ ] 🟠 Implementar filtro por categoria (chips horizontais)
- [ ] 🟠 Implementar filtro por mercado (dropdown / bottom sheet)
- [ ] 🟠 Implementar skeleton loading no feed
- [ ] 🟠 Criar página `/offers/[id]` — Detalhe da oferta
- [ ] 🟡 Implementar busca por produto no feed
- [ ] 🟡 Implementar pull-to-refresh no mobile

---

## FASE 4 — LISTA DE COMPRAS

> Objetivo: motor de valor do produto — diferencial de retenção.

### Backend / Queries

- [ ] 🔴 CRUD completo de `shopping_lists`
- [ ] 🔴 CRUD completo de `shopping_list_items`
- [ ] 🔴 Lógica de cálculo de economia (preço atual vs. original_price)
- [ ] 🟠 Endpoint para adicionar oferta diretamente à lista a partir do feed
- [ ] 🟡 Suporte a múltiplas listas por usuário

### Frontend — Lista

- [ ] 🔴 Criar página `/shopping-list` — Listas do usuário
- [ ] 🔴 Criar componente `ShoppingListCard` com resumo de economia
- [ ] 🔴 Criar página `/shopping-list/[id]` — Itens da lista com check
- [ ] 🟠 Implementar ação "Adicionar à lista" a partir do `OfferCard`
- [ ] 🟠 Implementar checkbox de itens comprados com risco visual
- [ ] 🟠 Exibir total estimado + economia calculada na lista
- [ ] 🟡 Funcionalidade de compartilhamento de lista via link

---

## FASE 5 — PAINEL ADMINISTRATIVO

> Objetivo: operação funcional — sem admin, não tem produto.

### Auth Admin

- [ ] 🔴 Criar rota `/admin` com verificação de role via middleware
- [ ] 🔴 Implementar RBAC: `super_admin`, `city_operator`, `market_operator`, `support`
- [ ] 🟠 Página de login separada para admin (ou flag no login geral)

### CRUD Operacional

- [ ] 🔴 Admin: CRUD de Ofertas (criar, editar, ativar/desativar, excluir)
- [ ] 🔴 Admin: CRUD de Mercados (criar, editar, logo, cidade, ativar/desativar)
- [ ] 🔴 Admin: CRUD de Cidades (criar, ativar/desativar)
- [ ] 🟠 Admin: CRUD de Categorias
- [ ] 🟠 Admin: CRUD de Produtos
- [ ] 🟠 Admin: Visualização de Usuários (read-only para support)
- [ ] 🟠 Admin: Upload de imagem de oferta (Supabase Storage)
- [ ] 🟡 Admin: Importação de ofertas via CSV
- [ ] 🟡 Admin: Histórico de auditoria por entidade

### Audit Log

- [ ] 🟠 Registrar automaticamente toda ação CRUD no `audit_logs`
- [ ] 🟠 Interface de visualização de logs no admin (filtro por admin, data, entidade)

---

## FASE 6 — BILLING & ASSINATURAS

> Objetivo: monetização ativa e recorrente.

### Integração de Pagamentos

- [ ] 🔴 Configurar conta Mercado Pago (prioridade BR) ou Stripe
- [ ] 🔴 Criar Edge Function para webhook de eventos de pagamento
- [ ] 🔴 Implementar lógica de ativação/expiração de plano via webhook
- [ ] 🟠 Criar página `/subscription` — Planos e upgrade
- [ ] 🟠 Criar fluxo de checkout com redirect para gateway
- [ ] 🟠 Criar página de confirmação pós-pagamento
- [ ] 🟡 Implementar trial automático na criação de conta (configurável)
- [ ] 🟡 Criar lógica de downgrade e cancelamento
- [ ] 🟡 Enviar email de confirmação de pagamento (Supabase Auth Email ou Resend)

### Feature Gating

- [ ] 🟠 Definir quais features são free vs. pagas (lista de compras avançada, histórico, multi-lista)
- [ ] 🟠 Implementar `usePlan()` hook para verificar plano ativo no frontend
- [ ] 🟠 Criar componente `PlanGate` para bloquear features com CTA de upgrade

---

## FASE 7 — NOTIFICAÇÕES

> Objetivo: retenção e engajamento ativo.

### Push Notifications

- [ ] 🟠 Integrar OneSignal ou Firebase Cloud Messaging
- [ ] 🟠 Criar Edge Function para disparo de notificações programadas
- [ ] 🟠 Salvar token de dispositivo vinculado ao `user_id`
- [ ] 🟠 Notificação de novas ofertas da cidade do usuário
- [ ] 🟡 Notificação de oferta prestes a expirar (item na lista)
- [ ] 🟡 Painel admin para campanhas de push manual

---

## FASE 8 — SEO & PERFORMANCE

> Objetivo: crescimento orgânico e experiência premium.

### SEO

- [ ] 🟠 Configurar `metadata` e Open Graph nas páginas principais
- [ ] 🟠 Criar `sitemap.xml` dinâmico com cidades e categorias
- [ ] 🟠 Criar `robots.txt`
- [ ] 🟡 Implementar páginas SSR/ISR para ofertas por cidade (URL amigável)
- [ ] 🟡 Structured data (JSON-LD) para ofertas

### Performance

- [ ] 🟠 Configurar `next/image` com otimização automática
- [ ] 🟠 Auditar bundle size pós-feature (Webpack Analyzer)
- [ ] 🟡 Implementar cache de queries Supabase com SWR ou React Query
- [ ] 🟡 Lazy loading de componentes pesados (admin charts, listas longas)

---

## FASE 9 — OBSERVABILIDADE & HARDENING

> Objetivo: produto em nível de produção real.

### Monitoramento

- [ ] 🟠 Configurar Sentry com source maps (frontend + edge functions)
- [ ] 🟠 Criar dashboard de uptime (Better Uptime ou UptimeRobot)
- [ ] 🟡 Integrar PostHog para analytics de comportamento de usuário
- [ ] 🟡 Criar dashboard de métricas-chave: CAC, conversão trial→pago, retenção D7/D30

### Segurança Final

- [ ] 🟠 Configurar CSP headers no `next.config.js`
- [ ] 🟠 Rate limiting em APIs sensíveis (login, webhook)
- [ ] 🟠 Validar todas as rotas de admin com verificação server-side
- [ ] 🟠 Revisar todas as policies RLS em staging antes do go-live
- [ ] 🟡 Configurar backup automático Supabase (verificar política cloud)
- [ ] 🟡 Penetration test básico (OWASP Top 10 checklist manual)

---

## BACKLOG FUTURO (Pós-MVP)

> Não entra em sprint agora. Registrado para roadmap.

- [ ] 🟢 OCR de panfletos para captura de ofertas automatizada
- [ ] 🟢 Scraping autorizado de sites de mercados parceiros
- [ ] 🟢 App nativo (React Native / Expo) com código compartilhado
- [ ] 🟢 WhatsApp bot para consulta de ofertas e lista de compras
- [ ] 🟢 API pública para parceiros e integrações B2B
- [ ] 🟢 Motor de recomendação de ofertas por histórico de compra
- [ ] 🟢 Multi-tenant isolamento por cidade (schema separation)
- [ ] 🟢 Analytics warehouse (BigQuery / ClickHouse) para inteligência comercial
- [ ] 🟢 Programa de afiliados / comissão para operadores locais
- [ ] 🟢 Dashboard de inteligência de preços para mercados parceiros

---

## DEFINIÇÃO DE PRONTO (DoD)

Toda task concluída deve atender:

- [ ] Código revisado (self-review mínimo)
- [ ] Tipagem TypeScript sem `any` não justificado
- [ ] Sem `console.log` em produção
- [ ] Testado em mobile (375px) e desktop
- [ ] Sem regressão em features existentes
- [ ] Variáveis sensíveis em env, nunca hardcoded
- [ ] PR descritivo com contexto da mudança

---

## RISCOS ATIVOS

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| RLS mal configurado | 🔴 Crítico | Testar com usuário de teste antes do go-live |
| Webhook de pagamento sem idempotência | 🔴 Crítico | Verificar `payment_id` antes de processar |
| Queries sem índice em produção | 🟠 Alto | Revisar EXPLAIN ANALYZE pré-launch |
| Overengineering de features early | 🟠 Alto | Sprint reviews com foco em MVP mínimo viável |
| Credenciais de serviço no repositório | 🔴 Crítico | `.gitignore` + secret scanning no GitHub |
| Deploy sem smoke test | 🟠 Alto | Automatizar health check pós-deploy |

---

*Última atualização: 29/04/2026 — Auditoria automática via Supabase + Vercel + GitHub*
*Próxima revisão: ao fim de cada sprint*
