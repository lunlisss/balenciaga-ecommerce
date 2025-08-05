'use client'

const ProductGrid = () => {
  const mockProducts = [
    {
      id: '1',
      name: 'Triple S Sneakers',
      price: 995,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Shoes',
    },
    {
      id: '2',
      name: 'City Bag Medium',
      price: 2150,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Bags',
    },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-4">
            FEATURED PRODUCTS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of luxury fashion items.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockProducts.map((product) => (
            <div key={product.id} className="group relative bg-white">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <h3 className="font-medium text-gray-900 mb-2">
                  {product.name}
                </h3>
                <span className="font-semibold text-gray-900">
                  {formatPrice(product.price)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
