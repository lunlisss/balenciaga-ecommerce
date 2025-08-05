import Hero from '@/components/features/Hero'
import ProductGrid from '@/components/features/ProductGrid'

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductGrid />
      
      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Women's Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold tracking-wider mb-4">WOMEN</h3>
                  <button className="border border-white px-6 py-2 text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Men's Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold tracking-wider mb-4">MEN</h3>
                  <button className="border border-white px-6 py-2 text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
