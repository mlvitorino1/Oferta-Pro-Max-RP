
# Bootstrap do Design System — Oferta Pro Max

Entrega inicial conforme `FRONTEND_STRATEGY.md`: tokens, componentes base, layouts e uma página de showcase para validar visualmente. Sem páginas de produto ainda — isso vem na próxima sessão.

## 1. Identidade visual proposta

Mobile-first, clean, com pegada de "economia inteligente" (ofertas/compras). Nada de visual agressivo de cupom — referência mais próxima de apps modernos tipo Notion/Linear com toque de varejo.

- **Marca / Primary**: verde-esmeralda `oklch(0.62 0.17 155)` — transmite economia, confirmação, "oferta boa"
- **Accent / Destaque de oferta**: âmbar quente `oklch(0.78 0.16 75)` — usado em badges de desconto, preços promocionais
- **Destructive**: vermelho `oklch(0.58 0.22 27)`
- **Neutros**: cinza levemente azulado, alto contraste em ambos os temas
- **Tipografia**: Inter (corpo) + Inter Tight (display/numerais de preço), via Google Fonts
- **Raio**: `--radius: 0.75rem` (cards arredondados, mobile-friendly)
- **Sombras**: 3 níveis suaves (`shadow-card`, `shadow-elevated`, `shadow-popover`)
- **Espaçamento**: escala padrão Tailwind, com utilitários `safe-area` para mobile

Tudo em `oklch`, com tema light + dark completos.

## 2. Tokens (em `src/styles.css`)

Adicionar/ajustar no `@theme inline` e nos blocos `:root` / `.dark`:

- Cores semânticas existentes (background, foreground, primary, secondary, muted, accent, destructive, border, input, ring, card, popover) — recalibradas para a nova paleta
- Novos tokens específicos do produto:
  - `--color-success` / `--color-warning` / `--color-info`
  - `--color-price` (verde marca) e `--color-discount` (âmbar)
  - `--shadow-card`, `--shadow-elevated`, `--shadow-popover`
- Importar Inter e Inter Tight via `@import url(...)` no topo do CSS
- `--font-sans` e `--font-display` registrados no `@theme inline`

## 3. Componentes base

Os componentes shadcn já existem em `src/components/ui/`. A entrega aqui é **garantir que os existentes respeitem os novos tokens** e **criar os que faltam segundo o documento**:

Já existem (revisar/ajustar variantes se preciso): Button, Input, Card, Badge, Avatar, Skeleton, Toast (sonner).

A criar como componentes próprios em `src/components/feedback/`:
- `EmptyState` — ícone + título + descrição + CTA opcional
- `LoadingScreen` — tela cheia com spinner + texto, usada em transições de rota/auth
- Variante `Badge` `discount` (fundo âmbar, usada para % off)
- Variante `Button` `price` (CTA grande de "Adicionar à lista")

## 4. Layouts de rota

Três layouts em `src/components/layouts/`, consumidos pelos route files quando as páginas forem criadas:

- **AppLayout** — header com logo + avatar + nav inferior mobile (Feed, Lista, Perfil); container responsivo; usado nas rotas autenticadas do produto
- **AuthLayout** — centralizado, card único, logo no topo; usado em login, signup, recuperação, onboarding
- **AdminLayout** — sidebar lateral em desktop, drawer em mobile; placeholder de nav admin

Componentes só de estrutura visual — sem lógica de auth (isso é manual via `middleware.ts`, conforme estratégia).

## 5. Página de showcase (rota `/`)

Substituir o placeholder de `src/routes/index.tsx` por uma página interna `/_design` **não**, e sim usar a `/` como showcase temporário do design system enquanto não há landing real. Mostra:

- Paleta com swatches e tokens
- Tipografia (display, h1–h4, body, caption, números de preço)
- Todos os componentes base com variantes e estados (default, hover, disabled, loading)
- EmptyState e LoadingScreen em cards demonstrativos
- Exemplos dos três layouts em miniaturas

Isso dá validação visual imediata no preview e serve de referência durante a Fase 02.

## 6. Detalhes técnicos

- Stack mantido: TanStack Start + Tailwind v4 + shadcn — sem novas dependências de framework
- Fontes via `<link>` no `__root.tsx` (`head().links`) para SSR correto, não `@import` (melhor performance)
- Toggle de tema light/dark com botão no header do showcase, persistido em `localStorage` via pequeno hook `useTheme` em `src/hooks/`
- Nenhum acesso a Supabase nesta entrega — apenas UI estática
- Tudo TypeScript strict, sem `any`, conforme regra de revisão de PR do documento

## Fora de escopo (próximas sessões)

- Landing pública real, Onboarding, Dashboard, Feed de Ofertas, Lista de Compras, Profile
- Integração com cliente Supabase
- Páginas 404/Error customizadas com a nova identidade (as atuais já funcionam; refinamento depois)
- `tailwind.config.ts` — projeto usa Tailwind v4 com tokens em CSS, então não há config a refinar aqui
