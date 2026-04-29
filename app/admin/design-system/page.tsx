import { createFileRoute } from "@tanstack/react-router";
import { Moon, ShoppingCart, Sun, Tag, Sparkles, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/feedback/empty-state";
import { LoadingScreen } from "@/components/feedback/loading-screen";
import { useTheme } from "@/hooks/use-theme";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Design System — Oferta Pro Max" },
      {
        name: "description",
        content:
          "Showcase do design system do Oferta Pro Max: tokens, tipografia, componentes base e layouts.",
      },
      { property: "og:title", content: "Design System — Oferta Pro Max" },
      {
        property: "og:description",
        content: "Tokens, componentes e layouts da interface do Oferta Pro Max.",
      },
    ],
  }),
  component: ShowcasePage,
});

const colorTokens: Array<{ name: string; varName: string; fg?: string }> = [
  { name: "Primary", varName: "--color-primary", fg: "--color-primary-foreground" },
  { name: "Accent", varName: "--color-accent", fg: "--color-accent-foreground" },
  { name: "Price", varName: "--color-price", fg: "--color-primary-foreground" },
  { name: "Discount", varName: "--color-discount", fg: "--color-discount-foreground" },
  { name: "Success", varName: "--color-success", fg: "--color-success-foreground" },
  { name: "Warning", varName: "--color-warning", fg: "--color-warning-foreground" },
  { name: "Info", varName: "--color-info", fg: "--color-info-foreground" },
  { name: "Destructive", varName: "--color-destructive", fg: "--color-destructive-foreground" },
  { name: "Muted", varName: "--color-muted", fg: "--color-muted-foreground" },
  { name: "Card", varName: "--color-card", fg: "--color-card-foreground" },
];

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        {description ? (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function ShowcasePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur safe-top">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Tag className="h-4 w-4" />
            </span>
            <span className="font-display text-base font-semibold tracking-tight">
              Oferta Pro Max
            </span>
            <Badge variant="outline" className="ml-2 hidden sm:inline-flex">
              Design system
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-12 px-4 py-10">
        <div className="space-y-3">
          <Badge variant="discount" className="gap-1">
            <Sparkles className="h-3 w-3" /> Fase 02 · Bootstrap
          </Badge>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Design system do Oferta Pro Max
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            Tokens, componentes e layouts oficiais da interface. Esta página é uma referência
            temporária — será substituída pela landing pública na próxima entrega.
          </p>
        </div>

        <Section title="Cores" description="Todos os tokens em oklch, alinhados aos modos light e dark.">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {colorTokens.map((t) => (
              <div
                key={t.name}
                className="overflow-hidden rounded-lg border border-border shadow-[var(--shadow-card)]"
              >
                <div
                  className="flex h-20 items-end p-3 text-xs font-medium"
                  style={{
                    backgroundColor: `var(${t.varName})`,
                    color: t.fg ? `var(${t.fg})` : undefined,
                  }}
                >
                  {t.name}
                </div>
                <div className="bg-card px-3 py-2 font-mono text-[10px] text-muted-foreground">
                  {t.varName}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Tipografia"
          description="Inter para corpo, Inter Tight para display e numerais de preço."
        >
          <Card>
            <CardContent className="space-y-3 pt-6">
              <p className="font-display text-5xl font-bold tracking-tight">Display 5xl</p>
              <p className="font-display text-3xl font-semibold tracking-tight">Heading 3xl</p>
              <p className="text-xl font-semibold">Heading xl</p>
              <p className="text-base">
                Corpo base — texto de parágrafo padrão usado em descrições e conteúdo geral do
                produto.
              </p>
              <p className="text-sm text-muted-foreground">
                Texto secundário em tom muted, usado em legendas e metadados.
              </p>
              <p className="font-display text-3xl font-bold tabular-nums text-[var(--color-price)]">
                R$ 24,90
              </p>
            </CardContent>
          </Card>
        </Section>

        <Section title="Botões" description="Todas as variantes e tamanhos.">
          <Card>
            <CardContent className="flex flex-wrap gap-3 pt-6">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="price" size="xl">
                <ShoppingCart /> Adicionar à lista
              </Button>
              <Button disabled>Disabled</Button>
            </CardContent>
          </Card>
        </Section>

        <Section title="Badges" description="Incluindo variante exclusiva de desconto.">
          <Card>
            <CardContent className="flex flex-wrap gap-2 pt-6">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="success">Em estoque</Badge>
              <Badge variant="info">Novo</Badge>
              <Badge variant="discount">-35%</Badge>
              <Badge variant="destructive">Esgotado</Badge>
            </CardContent>
          </Card>
        </Section>

        <Section title="Inputs & Avatar">
          <Card>
            <CardContent className="grid gap-4 pt-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="demo-input">
                  Buscar produto
                </label>
                <Input id="demo-input" placeholder="Ex: leite integral" />
              </div>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>OP</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Oferta Pro Max</p>
                  <p className="text-xs text-muted-foreground">contato@ofertapromax.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>

        <Section title="Skeleton & Card de oferta (exemplo)">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Loading state</CardTitle>
                <CardDescription>Skeletons para listas e feed.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-[var(--shadow-card)]">
              <div className="flex items-center justify-center bg-muted py-8">
                <ShoppingCart className="h-10 w-10 text-muted-foreground" />
              </div>
              <CardContent className="space-y-2 pt-4">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-medium leading-tight">Café especial torrado 250g</p>
                  <Badge variant="discount">-35%</Badge>
                </div>
                <p className="text-xs text-muted-foreground line-through">R$ 39,90</p>
                <p className="font-display text-2xl font-bold tabular-nums text-[var(--color-price)]">
                  R$ 25,90
                </p>
                <Button variant="price" className="w-full">
                  <ShoppingCart /> Adicionar
                </Button>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section title="Estados de feedback">
          <div className="grid gap-4 lg:grid-cols-2">
            <EmptyState
              icon={<Inbox />}
              title="Sua lista está vazia"
              description="Adicione ofertas para começar a montar sua lista de compras inteligente."
              action={<Button variant="price">Explorar ofertas</Button>}
            />
            <Card>
              <CardContent className="p-0">
                <LoadingScreen fullscreen={false} label="Buscando ofertas perto de você..." />
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section
          title="Layouts"
          description="Estruturas de rota — AppLayout, AuthLayout, AdminLayout."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                name: "AppLayout",
                desc: "Header + nav inferior mobile. Rotas autenticadas do produto.",
              },
              { name: "AuthLayout", desc: "Card central. Login, signup, onboarding." },
              { name: "AdminLayout", desc: "Sidebar lateral. Painel administrativo." },
            ].map((l) => (
              <Card key={l.name}>
                <CardHeader>
                  <CardTitle className="font-display text-base">{l.name}</CardTitle>
                  <CardDescription>{l.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md border border-dashed border-border bg-muted/40" />
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <footer className="border-t border-border pt-6 text-xs text-muted-foreground">
          Oferta Pro Max · Design system v0.1 · gerado pelo Lovable conforme FRONTEND_STRATEGY.md
        </footer>
      </main>
    </div>
  );
}
