'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '@/hooks/use-auth'

interface ProtectedRouteProps {
  children: React.ReactNode
  requireAdmin?: boolean
}

/**
 * Wrapper para proteger rotas no Client Side
 * Redireciona para /login se não autenticado
 * Redireciona para /dashboard se admin required mas user é free
 */
export function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { user, profile, loading } = useAuth()

  useEffect(() => {
    if (!loading) {
      // Não autenticado
      if (!user) {
        router.push(`/login?redirect=${pathname}`)
        return
      }

      // Admin required mas user não é admin
      if (requireAdmin && profile?.plan === 'free') {
        router.push('/dashboard')
        return
      }
    }
  }, [user, loading, profile, pathname, requireAdmin, router])

  // Renderiza skeleton enquanto carrega
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />
          <p className="text-sm text-gray-500">Carregando...</p>
        </div>
      </div>
    )
  }

  // Autenticado — renderiza conteúdo
  if (user) {
    return <>{children}</>
  }

  // Não autenticado — não renderiza (redirect foi feito acima)
  return null
}
