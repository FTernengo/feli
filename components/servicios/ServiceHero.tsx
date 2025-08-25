import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ServiceHeroProps {
  title: string
  description: string
  imageUrl: string
  service: string
}

export function ServiceHero({ title, description, imageUrl, service }: ServiceHeroProps) {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <nav className="mb-8">
            <ol className="flex text-white/80 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <span className="mx-2">/</span>
              <li>
                <Link href="/#servicios" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <span className="mx-2">/</span>
              <li className="text-white font-medium">{title}</li>
            </ol>
          </nav>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-white/90 mb-8">
            {description}
          </p>
          <Button
            asChild
            className="bg-[#18a1ad] hover:bg-[#18a1ad]/90"
          >
            <Link href={`/contacto?servicio=${service}`}>
              Solicitar Cotización
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
