// ============================================================
// Database Types — Oferta Pro Max
// Gerado manualmente baseado no schema do Supabase
// ============================================================

export type SubscriptionPlan = 'free' | 'pro' | 'pro_max'
export type SubscriptionStatus = 'trialing' | 'active' | 'past_due' | 'canceled' | 'expired'
export type NotificationType = 'new_offer' | 'offer_expiring' | 'system' | 'billing' | 'campaign'
export type AdminRole = 'super_admin' | 'city_operator' | 'market_operator' | 'support'

export interface Profile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  city_id: string | null
  plan: SubscriptionPlan
  created_at: string
  updated_at: string
}

export interface City {
  id: string
  name: string
  state: string
  slug: string
  active: boolean
  created_at: string
}

export interface Market {
  id: string
  name: string
  city_id: string
  logo_url: string | null
  address: string | null
  active: boolean
  created_at: string
  updated_at: string
}

export interface Category {
  id: string
  name: string
  slug: string
  icon: string | null
  active: boolean
}

export interface Product {
  id: string
  name: string
  category_id: string | null
  unit: string
  created_at: string
}

export interface Offer {
  id: string
  product_id: string
  market_id: string
  price: number
  original_price: number | null
  valid_from: string
  valid_until: string
  image_url: string | null
  active: boolean
  created_at: string
  updated_at: string
}

export interface Subscription {
  id: string
  user_id: string
  plan: SubscriptionPlan
  status: SubscriptionStatus
  trial_ends_at: string | null
  current_period_end: string | null
  payment_provider_id: string | null
  created_at: string
  updated_at: string
}

export interface ShoppingList {
  id: string
  user_id: string
  name: string
  city_id: string | null
  created_at: string
  updated_at: string
}

export interface ShoppingListItem {
  id: string
  list_id: string
  product_id: string
  offer_id: string | null
  quantity: number
  checked: boolean
  created_at: string
}

export interface Notification {
  id: string
  user_id: string
  title: string
  body: string
  type: NotificationType
  read: boolean
  created_at: string
}

export interface Admin {
  id: string
  user_id: string
  role: AdminRole
  city_id: string | null
  active: boolean
  created_at: string
}

export interface AuditLog {
  id: string
  admin_id: string
  action: string
  entity: string
  entity_id: string | null
  payload: Record<string, unknown> | null
  ip_address: string | null
  created_at: string
}

// ============================================================
// Tipos Enriquecidos (com joins)
// ============================================================

export interface OfferWithDetails extends Offer {
  product: Product
  market: Market & { city: City }
  category?: Category
}

export interface ShoppingListWithItems extends ShoppingList {
  items: (ShoppingListItem & {
    product: Product
    offer: Offer | null
  })[]
}
