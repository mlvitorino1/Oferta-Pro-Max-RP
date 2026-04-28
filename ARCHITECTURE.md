# ARCHITECTURE.md

# Oferta Pro Max — Arquitetura Técnica

## Objetivo

Definir a arquitetura técnica oficial do Oferta Pro Max com padrão de engenharia profissional, preparada para operação real, crescimento regional e expansão multi-cidade.

Este documento segue mentalidade de CTO: simplicidade no MVP, robustez no core e escalabilidade progressiva.

---

# 1. Princípios de Arquitetura

## Prioridades

1. Velocidade de entrega inicial
2. Baixo custo operacional
3. Segurança por padrão
4. Escalabilidade progressiva
5. Excelente experiência mobile
6. Código sustentável no longo prazo
7. Operação simples com equipe enxuta

## Filosofia Técnica

* Começar enxuto
* Evitar overengineering
* Escalar por necessidade real
* Automatizar o repetitivo
* Medir antes de otimizar
* Segurança desde o início

---

# 2. Arquitetura Geral

## Modelo Inicial (MVP)

Monólito moderno desacoplado por camadas.

### Frontend

* Next.js App Router
* TypeScript
* Tailwind CSS
* Shadcn UI
* PWA Ready

### Backend

* Supabase
* PostgreSQL
* Auth
* Storage
* Edge Functions
* Realtime

### Infraestrutura

* Vercel (Frontend)
* Supabase Cloud (Backend)
* GitHub (Source Control)
* CI/CD automático

### Integrações externas

* Mercado Pago / Stripe
* OneSignal ou Firebase Push
* WhatsApp API futura integração

---

# 3. Domínios do Sistema

## Core Domains

### Identity

Usuários, login, perfis, permissões.

### Commerce Intelligence

Mercados, cidades, ofertas, categorias.

### Subscription

Planos, billing, trial, renovação.

### Shopping Engine

Lista de compras, cálculos, economia.

### Admin Operations

Gestão operacional e auditoria.

### Notifications

Push, campanhas, alertas.

---

# 4. Estrutura Frontend

## App Structure

* /marketing
* /auth
* /onboarding
* /dashboard
* /offers
* /shopping-list
* /subscription
* /profile
* /admin

## UI Principles

* Mobile first
* Performance first
* Navegação simples
* Baixa fricção
* Alta conversão
* Skeleton loading
* Estados vazios inteligentes
* Feedback visual imediato

---

# 5. Estrutura Backend

## Supabase Modules

### PostgreSQL

Banco principal transacional.

### Auth

Magic link, email/password, OAuth futuro.

### Storage

Imagens de ofertas, logos e mídia.

### Edge Functions

* Webhooks pagamentos
* Push notifications
* Jobs agendados
* Processamento OCR futuro

### Realtime

Atualização opcional de ofertas e admin.

---

# 6. Banco de Dados

## Entidades principais

* profiles
* cities
* markets
* categories
* products
* offers
* subscriptions
* shopping_lists
* shopping_list_items
* notifications
* admins
* audit_logs

## Estratégia

* UUID em tudo
* Índices nos filtros principais
* Timestamps padrão
* Soft evolution schema
* RLS obrigatório

---

# 7. Segurança (Nível Produção)

## Aplicação

* HTTPS only
* CSP headers
* Sanitização input/output
* Rate limiting APIs
* Session security
* CSRF strategy quando aplicável

## Dados

* Row Level Security
* Least privilege
* Logs administrativos
* Backups automáticos
* Segregação ambiente dev/stage/prod

## Admin

* RBAC por função
* Auditoria completa
* MFA futuro obrigatório

---

# 8. Performance

## Frontend

* SSR/ISR onde útil
* Lazy loading
* Image optimization
* Cache inteligente
* Bundle control

## Backend

* Índices corretos
* Query pagination
  n- Materialized views futuras
* Connection efficiency
* Background jobs

---

# 9. Escalabilidade

## Fase 1 — 1 Cidade

Operação centralizada.

## Fase 2 — Multi-Cidade

Separação lógica por city_id.

## Fase 3 — Expansão Nacional

* Workers assíncronos
* Search engine dedicado
* CDN assets
* Event queue
* Analytics warehouse

---

# 10. Captura de Ofertas

## Fontes

* Cadastro manual
* OCR panfletos
* Scraping autorizado
* Importação CSV
* Operador local
* APIs futuras

## Pipeline Ideal Futuro

Collect -> Normalize -> Validate -> Publish -> Notify

---

# 11. Sistema Administrativo

## Painel Admin

### Super Admin

* tudo

### City Operator

* cidade específica

### Market Operator

* ofertas do mercado

### Support

* usuários e suporte básico

## Funções

* CRUD ofertas
* CRUD mercados
* CRUD usuários
* Gestão billing
* Analytics operacional
* Logs de ação

---

# 12. Observabilidade

## Logs

* auth events
  n- admin actions
* payment webhooks
* errors críticos

## Monitoring

* uptime
* latency
* error rate
* conversion funnel
* push delivery

Ferramentas futuras:

* Sentry
* PostHog
* Datadog

---

# 13. CI/CD

## Pipeline GitHub

On Pull Request:

* lint
* typecheck
* tests
* preview deploy

On Main:

* production deploy
* migrations check
* smoke tests

## Branch Strategy

* main
* develop
* feature/*
* hotfix/*

---

# 14. Qualidade de Código

## Regras

* Clean Code
* SOLID quando útil
* DRY equilibrado
* Componentização madura
* Tipagem forte
* Testar regras críticas
* Naming claro

---

# 15. Roadmap Técnico

## Sprint 1

* Auth
* Base layout
* Schema DB
* Landing page

## Sprint 2

* Feed ofertas
* Filtros
* Admin CRUD ofertas

## Sprint 3

* Lista compras
* Billing
* Push notifications

## Sprint 4

* Analytics
* SEO
* Hardening segurança

---

# 16. Riscos Técnicos

* scraping inconsistente
* baixa qualidade dados externos
* excesso de features cedo demais
* billing mal integrado
* queries lentas sem índice
* crescimento sem observabilidade

---

# 17. Decisões Estratégicas de CTO

## Escolhas certas agora

* Supabase acelera time-to-market
* Next.js maximiza velocidade + SEO
* Monólito modular reduz complexidade
* Multi-cidade por schema lógico é suficiente

## Evitar agora

* microsserviços
* kubernetes cedo demais
* event sourcing sem necessidade
* mobile nativo prematuro

---

# 18. Visão Longo Prazo

Transformar Oferta Pro Max em plataforma nacional de inteligência regional de consumo e compra.

Arquitetura atual deve permitir esse caminho sem reescrever tudo.

---

# Status Atual

* Banco modelado
* Estratégia definida
* Arquitetura base aprovada
* Próxima etapa: implementação MVP
