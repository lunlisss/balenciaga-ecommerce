'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-black/50 to-black/30 absolute z-10" />
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Fashion"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-wider mb-6"
        >
          BALENCIAGA
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-light mb-8 tracking-wide"
        >
          Redefining Luxury Fashion
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/women">
            <button className="bg-black text-white px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-gray-900 w-full sm:w-auto">
              Shop Women
            </button>
          </Link>
          <Link href="/men">
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-black w-full sm:w-auto">
              Shop Men
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
