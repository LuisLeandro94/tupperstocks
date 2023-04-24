import type { dietList, restaurantStatusList } from '@/constants'

export type Product = {
  productId: string
  name: string
  price: number
  description: string
  image: string
  category: string
  stock: number
}

type Status = (typeof restaurantStatusList)[number]

type Diet = (typeof dietList)[number]
