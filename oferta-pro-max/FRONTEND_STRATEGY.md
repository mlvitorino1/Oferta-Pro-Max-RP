# FRONTEND_STRATEGY.md

# Oferta Pro Max — Estratégia de Frontend

> Documento de decisão técnica oficial.
> Data: 29/04/2026
> Status: **Aprovado e em execução**

---

## Decisão Estratégica

**Modelo adotado: Lovable como dono do frontend (Modelo A)**

O Lovable é o gerador e mantenedor principal de todo o código de interface do Oferta Pro Max. Ele opera com integração nativa ao GitHub e ao Supabase, publicando código React/Next.js diretamente no repositório via branches de feature.

Esta decisão foi tomada para maximizar velocidade de entrega no MVP, manter a equipe enxuta e concentrar o esforço manual onde há maior risco e complexidade: backend, segurança e lógica de negócio.

---

## Divisão de Responsabilidades

### O que o Lovable faz

- Design system completo (tokens, paleta, tipografia, espaçamentos)
- Componentes base (Button, Input, Card, Badge, Avatar, Skeleton, EmptyState, LoadingScreen, Toast)
- Layouts de rota (AppLayout, AuthLayout, AdminLayout)
- Páginas do produto (Landing, Onboarding, Dashboard, Feed de Ofertas, Lista de Compras, Profile, 404, Error)
- Integração Supabase via cliente gerado
- Responsividade mobile-first
- Publicação de código no GitHub via branch `feature/*`

### O que é feito manualmente fora do Lovable

| Área | Responsável | Motivo |
|------|-------------|--------|
| Schema PostgreSQL + migrations | Manual (Supabase CLI / Dashboard) | Precisão e controle de RLS |
| Row Level Security policies | Manual | Segurança crítica — sem delegação |
| Edge Functions | Manual | Lógica sensível (billing, webhooks, push) |
| `middleware.ts` de autenticação | Manual | Segurança de rota server-side |
| GitHub Actions CI/CD | Manual | Já configurado na Fase 01 |
| Variáveis de ambiente | Manual | Nunca gerado por ferramenta |
| Revisão de PR do Lovable | Manual | Gate de qualidade obrigatório |
| Integração Mercado Pago / Stripe | Manual | Domínio financeiro — sem delegação |
| `tailwind.config.ts` refinamento final | Manual | Ajuste fino pós-geração |
| TypeScript strict compliance | Manual (revisão de PR) | O Lovable não garante strict |

---

## Fluxo de Trabalho Oficial

```
Prompt no Lovable (briefing + instrução da feature)
        ↓
Lovable gera código e publica no GitHub (branch feature/*)
        ↓
Revisão manual do PR:
  - TypeScript sem `any` não justificado
  - Sem credenciais ou valores hardcoded
  - RLS respeitado nas queries
  - Responsividade 375px validada
  - Sem console.log em lógica de produção
        ↓
GitHub Actions: lint + typecheck (gate automático)
        ↓
Merge para `develop`
        ↓
Vercel gera preview deploy automático
        ↓
Validação visual do preview
        ↓
Merge para `main` → produção
```

---

## Riscos Conhecidos e Mitigações

| Risco | Severidade | Mitigação |
|-------|------------|-----------|
| Código gerado sem TypeScript strict | 🟠 Alta | Revisão obrigatória de PR antes do merge |
| Queries sem RLS correto | 🔴 Crítica | Revisar toda chamada Supabase no código gerado |
| Lógica de segurança delegada ao Lovable | 🔴 Crítica | Middleware, auth e admin são sempre manuais |
| Design system inconsistente entre gerações | 🟠 Alta | Manter prompt de contexto atualizado no Lovable |
| Dois sources of truth de UI | 🔴 Crítica | Lovable é a única fonte. Não editar UI diretamente no repo sem passar pelo Lovable |
| Overfit de componentes para uma tela só | 🟡 Média | Revisar reusabilidade dos componentes gerados |

---

## Princípio de Ouro

> **O Lovable gera. O engenheiro decide.**
>
> Nenhum código gerado entra em `main` sem revisão humana.
> O Lovable é um acelerador, não um substituto de julgamento técnico.

---

## Relação com outros documentos

- `ARCHITECTURE.md` — Arquitetura geral do sistema (não alterada por esta decisão)
- `TASKS.md` — Backlog de execução (tasks de frontend são executadas via Lovable)
- `README.md` — Visão do produto (inalterado)

---

## Histórico de Decisão

| Data | Decisão | Motivo |
|------|---------|--------|
| 29/04/2026 | Adoção do Modelo A — Lovable como dono do frontend | Velocidade de MVP, equipe enxuta, integração nativa GitHub + Supabase |

---

*Próxima revisão: ao fim da Fase 03 — avaliar se o modelo se sustenta com queries reais de dados*
