import { Metadata } from 'next'
import { ServiceHero } from '@/components/servicios/ServiceHero'
import { ServiceGallery } from '@/components/servicios/ServiceGallery'
import { ServiceTechSpecs } from '@/components/servicios/ServiceTechSpecs'
import { ServiceUseCases } from '@/components/servicios/ServiceUseCases'
import { ServiceCTA } from '@/components/servicios/ServiceCTA'
import {
  Camera,
  Video,
  Building2,
  Map,
  Users,
  Calendar,
  Compass,
  Film,
  Clapperboard,
  Image as ImageIcon
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Producción Audiovisual | Vadillo Drones',
  description: 'Servicios profesionales de fotografía y video aéreo para publicidad, eventos y documentación con calidad cinematográfica.',
}

const technicalSpecs = [
  {
    icon: Camera,
    title: 'Cámara 4K',
    description: 'Captura de imágenes en ultra alta definición con estabilización profesional',
  },
  {
    icon: Compass,
    title: 'Gimbal Profesional',
    description: 'Sistema de estabilización de 3 ejes para tomas fluidas y precisas',
  },
  {
    icon: Film,
    title: 'Post-Producción',
    description: 'Edición profesional y corrección de color cinematográfica',
  },
]

const useCases = [
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Fotografía y video para propiedades y desarrollos inmobiliarios',
  },
  {
    icon: Users,
    title: 'Eventos Corporativos',
    description: 'Cobertura aérea de eventos empresariales y conferencias',
  },
  {
    icon: Map,
    title: 'Turismo',
    description: 'Promoción de destinos turísticos y experiencias',
  },
  {
    icon: Video,
    title: 'Publicidad',
    description: 'Contenido publicitario de alto impacto visual',
  },
  {
    icon: Clapperboard,
    title: 'Documentales',
    description: 'Capturas aéreas para documentales y reportajes',
  },
  {
    icon: ImageIcon,
    title: 'Fotografía',
    description: 'Tomas aéreas de alta resolución para diversos usos',
  },
]

const galleryImages = [
  {
    src: '/Imagenes/ind.1.jpg',
    alt: 'Producción audiovisual aérea',
  },
  {
    src: '/Imagenes/ind.2.jpg',
    alt: 'Fotografía aérea profesional',
  },
  {
    src: '/Imagenes/ind.3.jpg',
    alt: 'Video aéreo cinematográfico',
  },
]

export default function ProduccionAudiovisualPage() {
  return (
    <main>
      <ServiceHero
        title="Producción Audiovisual"
        description="Capturas aéreas cinematográficas para contenido publicitario e institucional de alto impacto."
        imageUrl="/Imagenes/ind.1.jpg"
        service="produccion-audiovisual"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#222831] mb-6">
              Producción Audiovisual Profesional con Drones
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Creamos contenido audiovisual de alta calidad utilizando drones equipados con las últimas tecnologías en grabación y estabilización.
            </p>
            <p className="text-gray-600 text-lg">
              Nuestro equipo combina experiencia técnica y visión creativa para producir material visual impactante que destaque su mensaje.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-[#222831] mb-8 text-center">
              Equipamiento Profesional
            </h3>
            <ServiceTechSpecs specs={technicalSpecs} />
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-[#222831] mb-8 text-center">
              Servicios y Aplicaciones
            </h3>
            <ServiceUseCases useCases={useCases} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#222831] mb-8 text-center">
              Portfolio de Trabajos
            </h3>
            <ServiceGallery images={galleryImages} />
          </div>
        </div>
      </section>

      <ServiceCTA
        service="produccion-audiovisual"
        whatsappMessage="Hola, me interesa conocer más sobre sus servicios de producción audiovisual con drones."
      />
    </main>
  )
}
