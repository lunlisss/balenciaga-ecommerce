'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  category: string
  size: string
  color: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string, size: string, color: string) => void
  updateQuantity: (id: string, size: string, color: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  toggleCart: () => void
  closeCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (newItem) => {
        const items = get().items
        const existingItemIndex = items.findIndex(
          item => item.id === newItem.id && 
                  item.size === newItem.size && 
                  item.color === newItem.color
        )

        if (existingItemIndex > -1) {
          const updatedItems = [...items]
          updatedItems[existingItemIndex].quantity += 1
          set({ items: updatedItems })
        } else {
          set({ items: [...items, { ...newItem, quantity: 1 }] })
        }
      },

      removeItem: (id, size, color) => {
        const items = get().items.filter(
          item => !(item.id === id && item.size === size && item.color === color)
        )
        set({ items })
      },

      updateQuantity: (id, size, color, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id, size, color)
          return
        }

        const items = get().items.map(item =>
          item.id === id && item.size === size && item.color === color
            ? { ...item, quantity }
            : item
        )
        set({ items })
      },

      clearCart: () => {
        set({ items: [] })
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0)
      },

      toggleCart: () => {
        set(state => ({ isOpen: !state.isOpen }))
      },

      closeCart: () => {
        set({ isOpen: false })
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)
