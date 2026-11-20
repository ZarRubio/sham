'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const CART_KEY = 'sahm_cart'
const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    try {
      setItems(JSON.parse(localStorage.getItem(CART_KEY)) ?? [])
    } catch {
      setItems([])
    } finally {
      setHasHydrated(true)
    }
  }, [])

  useEffect(() => {
    if (!hasHydrated) return
    localStorage.setItem(CART_KEY, JSON.stringify(items))
  }, [hasHydrated, items])

  const addToCart = useCallback((productId, qty = 1) => {
    setItems(prev => {
      const found = prev.find(i => i.productId === productId)
      if (found) return prev.map(i => i.productId === productId ? { ...i, qty: i.qty + qty } : i)
      return [...prev, { productId, qty }]
    })
  }, [])

  const removeFromCart = useCallback(productId => {
    setItems(prev => prev.filter(i => i.productId !== productId))
  }, [])

  const updateQty = useCallback((productId, qty) => {
    if (qty < 1) {
      setItems(prev => prev.filter(i => i.productId !== productId))
    } else {
      setItems(prev => prev.map(i => i.productId === productId ? { ...i, qty } : i))
    }
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totalItems = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])

  const value = useMemo(
    () => ({ items, addToCart, removeFromCart, updateQty, clearCart, totalItems, hasHydrated }),
    [items, addToCart, removeFromCart, updateQty, clearCart, totalItems, hasHydrated],
  )

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
