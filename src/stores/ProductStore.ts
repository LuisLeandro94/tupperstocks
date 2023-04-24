import type { Product } from '@/types'
import { defineStore } from 'pinia'

type StateShape = {
  list: Product[]
}

export const useProductStore = defineStore('ProductStore', {
  state: (): StateShape => ({
    list: [
      {
        productId: '0',
        name: 'Juoum',
        price: 100,
        description: 'Description 1',
        image: 'https://picsum.photos/200',
        category: 'Category 1',
        stock: 101,
      },
      {
        productId: '1',
        name: 'Product 1',
        price: 100,
        description: 'Description 1',
        image: 'https://picsum.photos/200',
        category: 'Category 1',
        stock: 100,
      },
      {
        productId: '2',
        name: 'Product 2',
        price: 200,
        description: 'Description 2',
        image: 'https://picsum.photos/200',
        category: 'Category 2',
        stock: 200,
      },
      {
        productId: '3',
        name: 'Product 3',
        price: 300,
        description: 'Description 3',
        image: 'https://picsum.photos/200',
        category: 'Category 3',
        stock: 300,
      },
      {
        productId: '4',
        name: 'Product 4',
        price: 400,
        description: 'Description 4',
        image: 'https://picsum.photos/200',
        category: 'Category 4',
        stock: 400,
      },
      {
        productId: '5',
        name: 'Product 5',
        price: 500,
        description: 'Description 5',
        image: 'https://picsum.photos/200',
        category: 'Category 5',
        stock: 500,
      },
      {
        productId: '6',
        name: 'Product 6',
        price: 600,
        description: 'Description 6',
        image: 'https://picsum.photos/200',
        category: 'Category 6',
        stock: 600,
      },
      {
        productId: '7',
        name: 'Product 7',
        price: 700,
        description: 'Description 7',
        image: 'https://picsum.photos/200',
        category: 'Category 7',
        stock: 700,
      },
      {
        productId: '8',
        name: 'Product 8',
        price: 800,
        description: 'Description 8',
        image: 'https://picsum.photos/200',
        category: 'Category 8',
        stock: 800,
      },
    ],
  }),
  getters: {
    numberOfProducts: (state) => {
      return state.list.length
    },
  },
  actions: {
    addProduct(payload: Product) {
      this.list.push(payload)
    },
    deleteProduct(payload: Product) {
      this.list = this.list.filter((product) => {
        return product.productId !== payload.productId
      })
    },
  },
})
