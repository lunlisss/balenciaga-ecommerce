'use client'

import { useCartStore } from '@/lib/store/cartStore'
import Link from 'next/link'

const CartSidebar = () => {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    getTotalPrice,
    getTotalItems 
  } = useCartStore()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={closeCart}
      />
      
      <div className="fixed right-0 top-0 h-full w-96 bg-white z-50 shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold tracking-wider uppercase">
              Cart ({getTotalItems()})
            </h2>
            <button 
              onClick={closeCart}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link href="/products">
                  <button 
                    onClick={closeCart}
                    className="bg-black text-white px-6 py-2 font-medium tracking-wider uppercase hover:bg-gray-900"
                  >
                    Start Shopping
                  </button>
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4">
                    <div className="w-20 h-20">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-sm mb-1">{item.name}</h3>
                      <p className="text-xs text-gray-500 mb-2">
                        {item.category} • {item.color} • {item.size}
                      </p>
                      <p className="font-semibold text-sm mb-2">
                        {formatPrice(item.price)}
                      </p>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                          className="w-6 h-6 border flex items-center justify-center text-sm"
                        >
                          -
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                          className="w-6 h-6 border flex items-center justify-center text-sm"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.size, item.color)}
                          className="ml-2 text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="text-xl font-bold">{formatPrice(getTotalPrice())}</span>
              </div>
              
              <div className="space-y-3">
                <Link href="/cart">
                  <button 
                    onClick={closeCart}
                    className="w-full border border-black text-black py-3 font-medium tracking-wider uppercase hover:bg-black hover:text-white"
                  >
                    View Cart
                  </button>
                </Link>
                
                <button className="w-full bg-black text-white py-3 font-medium tracking-wider uppercase hover:bg-gray-900">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartSidebar
