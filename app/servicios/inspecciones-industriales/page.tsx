import { Metadata } from 'next'
import { ServiceHero } from '@/components/servicios/ServiceHero'
import { ServiceGallery } from '@/components/servicios/ServiceGallery'
import { ServiceTechSpecs } from '@/components/servicios/ServiceTechSpecs'
import { ServiceUseCases } from '@/components/servicios/ServiceUseCases'
import { ServiceCTA } from '@/components/servicios/ServiceCTA'
import {
  Thermometer,
  Building2,
  Gauge,
  Cable,
  Zap,
  Warehouse,
  Factory,
  Container,
  Database,
  Camera
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Inspecciones Industriales | Vadillo Drones',
  description: 'Servicio especializado de inspecciones industriales con drones equipados con cámaras térmicas y RGB para la detección temprana de fallas y mantenimiento preventivo.',
}

const technicalSpecs = [
  {
    icon: Camera,
    title: 'Cámara Dual',
    description: 'Sistema de cámara dual térmica y RGB de alta resolución para capturas detalladas',
  },
  {
    icon: Thermometer,
    title: 'Análisis Térmico',
    description: 'Detección precisa de variaciones térmicas y puntos calientes',
  },
  {
    icon: Database,
    title: 'Procesamiento',
    description: 'Análisis avanzado de datos y generación de informes detallados',
  },
]

const useCases = [
  {
    icon: Factory,
    title: 'Torres de Enfriamiento',
    description: 'Inspección térmica para detectar ineficiencias y fugas en sistemas de refrigeración',
  },
  {
    icon: Cable,
    title: 'Tuberías y Conductos',
    description: 'Identificación de fugas y pérdidas de aislamiento en sistemas de distribución',
  },
  {
    icon: Building2,
    title: 'Tanques de Almacenamiento',
    description: 'Evaluación de integridad estructural y detección de fugas en tanques',
  },
  {
    icon: Zap,
    title: 'Sistemas Eléctricos',
    description: 'Detección de puntos calientes y anomalías en instalaciones eléctricas',
  },
  {
    icon: Gauge,
    title: 'Calderas y Hornos',
    description: 'Monitoreo de eficiencia y detección de pérdidas de calor',
  },
  {
    icon: Warehouse,
    title: 'Espacios Confinados',
    description: 'Inspección segura de áreas de difícil acceso',
  },
]

const galleryImages = [
  {
    src: '/Imagenes/ind.1.jpg',
    alt: 'Inspección térmica industrial',
  },
  {
    src: '/Imagenes/ind.2.jpg',
    alt: 'Inspección de instalaciones industriales',
  },
  {
    src: '/Imagenes/ind.3.jpg',
    alt: 'Análisis térmico de equipamiento industrial',
  },
]

export default function InspeccionesIndustrialesPage() {
  return (
    <main>
      <ServiceHero
        title="Inspecciones Industriales"
        description="Detección temprana de fallas y mantenimiento predictivo mediante termografía aérea de alta precisión."
        imageUrl="/Imagenes/ind.3.jpg"
        service="inspecciones-industriales"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#222831] mb-6">
              Tecnología de Vanguardia para Inspecciones Industriales
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Nuestros drones equipados con sistemas duales de cámara térmica y RGB permiten realizar inspecciones detalladas y seguras de instalaciones industriales, detectando anomalías térmicas, estructurales y operativas.
            </p>
            <p className="text-gray-600 text-lg">
              La combinación de tecnología avanzada y experiencia profesional nos permite ofrecer soluciones precisas para el mantenimiento predictivo y la optimización de procesos industriales.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-[#222831] mb-8 text-center">
              Especificaciones Técnicas
            </h3>
            <ServiceTechSpecs specs={technicalSpecs} />
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-[#222831] mb-8 text-center">
              Aplicaciones
            </h3>
            <ServiceUseCases useCases={useCases} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#222831] mb-8 text-center">
              Galería de Trabajos
            </h3>
            <ServiceGallery images={galleryImages} />
          </div>
        </div>
      </section>

      <ServiceCTA
        service="inspecciones-industriales"
        whatsappMessage="Hola, estoy interesado en obtener más información sobre el servicio de inspecciones industriales con drones."
      />
    </main>
  )
}
