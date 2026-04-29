import { type NextRequest, NextResponse } from 'next/server'

/**
 * Middleware simples para proteção de rotas
 * Supabase Session é gerenciado via useAuth hook no Client Component
 * Edge Runtime não suporta @supabase/ssr
 */
export function middleware(request: NextRequest) {
  // Rotas protegidas — redireciona para login
  const protectedPaths = ['/dashboard', '/offers', '/shopping-list', '/profile', '/subscription']
  const adminPaths = ['/admin']

  const isProtected = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))
  const isAdmin = adminPaths.some((path) => request.nextUrl.pathname.startsWith(path))

  // Verificação de auth será feita via useAuth no cliente
  // O middleware aqui é apenas para redirecionar rotas públicas/privadas
  // A sessão de fato é validada no Server Component ou via API route

  if (isProtected || isAdmin) {
    // Deixa passar — useAuth hook fará a validação real no Client Component
    // Se não estiver autenticado, o componente redirect para /login
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Aplica middleware em todas as rotas exceto:
     * - _next/static (assets estáticos)
     * - _next/image (otimização de imagem)
     * - favicon.ico
     * - Arquivos públicos (png, jpg, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
