'use client'

import Link from 'next/link'
import { useCartStore } from '@/lib/store/cartStore'

const Header = () => {
  const { getTotalItems, toggleCart } = useCartStore()
  const totalItems = getTotalItems()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wider">
            BALENCIAGA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-black transition-colors tracking-wider uppercase">
              All Products
            </Link>
            <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-black transition-colors tracking-wider uppercase">
              Women
            </Link>
            <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-black transition-colors tracking-wider uppercase">
              Men
            </Link>
            <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-black transition-colors tracking-wider uppercase">
              Bags
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-600 hover:text-black transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Account */}
            <Link href="/auth" className="p-2 text-gray-600 hover:text-black transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            
            {/* Cart */}
            <button 
              onClick={toggleCart}
              className="p-2 text-gray-600 hover:text-black transition-colors relative"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
