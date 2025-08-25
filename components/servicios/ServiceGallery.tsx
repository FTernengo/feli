import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface GalleryImage {
  src: string
  alt: string
}

interface ServiceGalleryProps {
  images: GalleryImage[]
}

export function ServiceGallery({ images }: ServiceGalleryProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <Card 
          key={index}
          className="group relative overflow-hidden aspect-video hover:shadow-xl transition-all duration-300"
        >
          <div className="absolute inset-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Card>
      ))}
    </div>
  )
}
