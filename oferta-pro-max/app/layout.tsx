import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Oferta Pro Max — As melhores ofertas da sua cidade',
    template: '%s | Oferta Pro Max',
  },
  description:
    'Descubra as melhores promoções dos mercados da sua cidade e economize com inteligência.',
  keywords: ['ofertas', 'promoções', 'mercado', 'supermercado', 'economia', 'lista de compras'],
  authors: [{ name: 'Oferta Pro Max' }],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Oferta Pro Max',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Oferta Pro Max',
  },
}

export const viewport: Viewport = {
  themeColor: '#16a34a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
