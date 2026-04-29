// Este arquivo será substituído pelo output de:
// npx supabase gen types typescript --project-id <id> > types/supabase.ts
// Por enquanto, reexporta os tipos manuais como Database stub

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: { Row: import('./database').Profile; Insert: Partial<import('./database').Profile>; Update: Partial<import('./database').Profile> }
      cities: { Row: import('./database').City; Insert: Partial<import('./database').City>; Update: Partial<import('./database').City> }
      markets: { Row: import('./database').Market; Insert: Partial<import('./database').Market>; Update: Partial<import('./database').Market> }
      categories: { Row: import('./database').Category; Insert: Partial<import('./database').Category>; Update: Partial<import('./database').Category> }
      products: { Row: import('./database').Product; Insert: Partial<import('./database').Product>; Update: Partial<import('./database').Product> }
      offers: { Row: import('./database').Offer; Insert: Partial<import('./database').Offer>; Update: Partial<import('./database').Offer> }
      subscriptions: { Row: import('./database').Subscription; Insert: Partial<import('./database').Subscription>; Update: Partial<import('./database').Subscription> }
      shopping_lists: { Row: import('./database').ShoppingList; Insert: Partial<import('./database').ShoppingList>; Update: Partial<import('./database').ShoppingList> }
      shopping_list_items: { Row: import('./database').ShoppingListItem; Insert: Partial<import('./database').ShoppingListItem>; Update: Partial<import('./database').ShoppingListItem> }
      notifications: { Row: import('./database').Notification; Insert: Partial<import('./database').Notification>; Update: Partial<import('./database').Notification> }
      admins: { Row: import('./database').Admin; Insert: Partial<import('./database').Admin>; Update: Partial<import('./database').Admin> }
      audit_logs: { Row: import('./database').AuditLog; Insert: Partial<import('./database').AuditLog>; Update: Partial<import('./database').AuditLog> }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: {
      subscription_plan: 'free' | 'pro' | 'pro_max'
      subscription_status: 'trialing' | 'active' | 'past_due' | 'canceled' | 'expired'
      notification_type: 'new_offer' | 'offer_expiring' | 'system' | 'billing' | 'campaign'
      admin_role: 'super_admin' | 'city_operator' | 'market_operator' | 'support'
    }
  }
}
