'use client'

interface BrandCardProps {
  title: string
  description: string
  imageUrl: string
  buttonText: string
  onClick?: () => void
}

export function BrandCard({
  title,
  description,
  imageUrl,
  buttonText,
  onClick
}: BrandCardProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4 opacity-90">{description}</p>
        <button
          onClick={onClick}
          className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
        >
          {buttonText}
          <span>→</span>
        </button>
      </div>
    </div>
  )
}
