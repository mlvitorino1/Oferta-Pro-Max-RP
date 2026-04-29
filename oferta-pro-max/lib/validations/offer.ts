import { z } from 'zod'

export const offerSchema = z
  .object({
    product_id: z.string().uuid(),
    market_id: z.string().uuid(),
    price: z.number().positive('Preço deve ser positivo'),
    original_price: z.number().positive().nullable().optional(),
    valid_from: z.string(),
    valid_until: z.string(),
    image_url: z.string().url().nullable().optional(),
    active: z.boolean().default(true),
  })
  .refine(
    (data) => {
      if (!data.original_price) return true
      return data.original_price > data.price
    },
    { message: 'Preço original deve ser maior que o preço atual', path: ['original_price'] }
  )

export type OfferInput = z.infer<typeof offerSchema>
