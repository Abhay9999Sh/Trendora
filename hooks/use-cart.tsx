"use client"

import type { Product } from "../types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface CartItem extends Product {
  quantity: number
}

interface CartStore {
  cart: CartItem[]
  totalItems: number
  totalPrice: number
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      totalItems: 0,
      totalPrice: 0,
      addToCart: (product) => {
        const cart = get().cart
        const existingItem = cart.find((item) => item.id === product.id)

        if (existingItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
          )
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }))
        } else {
          set((state) => ({
            cart: [...state.cart, { ...product, quantity: 1 }],
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }))
        }
      },
      removeFromCart: (productId) => {
        const cart = get().cart
        const itemToRemove = cart.find((item) => item.id === productId)

        if (!itemToRemove) return

        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
          totalItems: state.totalItems - itemToRemove.quantity,
          totalPrice: state.totalPrice - itemToRemove.price * itemToRemove.quantity,
        }))
      },
      updateQuantity: (productId, quantity) => {
        const cart = get().cart
        const item = cart.find((item) => item.id === productId)

        if (!item) return

        const quantityDiff = quantity - item.quantity
        const updatedCart = cart.map((item) => (item.id === productId ? { ...item, quantity } : item))

        set((state) => ({
          cart: updatedCart,
          totalItems: state.totalItems + quantityDiff,
          totalPrice: state.totalPrice + item.price * quantityDiff,
        }))
      },
      clearCart: () => {
        set({
          cart: [],
          totalItems: 0,
          totalPrice: 0,
        })
      },
    }),
    {
      name: "cart-storage",
    },
  ),
)

