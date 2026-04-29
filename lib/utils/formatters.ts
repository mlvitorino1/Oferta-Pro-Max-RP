/**
 * Formata valor em BRL
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

/**
 * Calcula percentual de desconto
 */
export function calculateDiscount(price: number, originalPrice: number): number {
  if (!originalPrice || originalPrice <= price) return 0
  return Math.round(((originalPrice - price) / originalPrice) * 100)
}

/**
 * Formata data em pt-BR
 */
export function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(dateStr))
}

/**
 * Verifica se oferta está expirando nos próximos N dias
 */
export function isExpiringSoon(validUntil: string, days = 3): boolean {
  const diff = new Date(validUntil).getTime() - Date.now()
  return diff > 0 && diff < days * 24 * 60 * 60 * 1000
}

/**
 * Gera slug a partir de texto
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}
