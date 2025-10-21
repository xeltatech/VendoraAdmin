'use client'

import { Sidebar } from '@/shared/components/Sidebar'
import { BrandCard } from '@/shared/components/BrandCard'

export function HomeLayout() {
  const user = {
    name: 'Diana Maldonado',
    role: 'Vendedora',
    avatar: 'D'
  }

  const brands = [
    {
      title: 'Tetta',
      description: 'Calzado colombiano de alta calidad con tradición y estilo',
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
      buttonText: 'Ver colecciones'
    },
    {
      title: 'Adidas',
      description: 'Impossible is Nothing - Innovación deportiva mundial',
      imageUrl: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800',
      buttonText: 'Ver colecciones'
    },
    {
      title: 'Nike',
      description: 'Just Do It - Líder en calzado deportivo e innovación',
      imageUrl: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800',
      buttonText: 'Ver colecciones'
    }
  ]

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar user={user} />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black2 mb-2">
              Selecciona una fábrica
            </h1>
            <p className="text-gray4">Explora las líneas disponibles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <BrandCard
                key={brand.title}
                title={brand.title}
                description={brand.description}
                imageUrl={brand.imageUrl}
                buttonText={brand.buttonText}
                onClick={() => {
                  console.log(`Navigate to ${brand.title}`)
                }}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
