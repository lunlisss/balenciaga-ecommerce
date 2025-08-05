'use client'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold tracking-wider">
            BALENCIAGA
          </Link>
          <nav className="hidden lg:flex space-x-8">
            <Link href="/women" className="text-sm font-medium text-gray-700 hover:text-black transition-colors tracking-wider uppercase">Women</Link>
            <Link href="/men" className="text-sm font-medium text-gray-700 hover:text-black transition-colors tracking-wider uppercase">Men</Link>
            <Link href="/bags" className="text-sm font-medium text-gray-700 hover:text-black transition-colors tracking-wider uppercase">Bags</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="p-2 text-gray-600 hover:text-black transition-colors">Cart</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
