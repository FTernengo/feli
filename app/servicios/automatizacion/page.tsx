import { Metadata } from 'next'
import { ServiceHero } from '@/components/servicios/ServiceHero'
import { ServiceGallery } from '@/components/servicios/ServiceGallery'
import { ServiceTechSpecs } from '@/components/servicios/ServiceTechSpecs'
import { ServiceUseCases } from '@/components/servicios/ServiceUseCases'
import { ServiceCTA } from '@/components/servicios/ServiceCTA'
import {
  Bot,
  Cloud,
  BarChart,
  Database,
  Timer,
  Map,
  Repeat,
  Laptop,
  Network,
  LineChart
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servicios de Automatización | Vadillo Drones',
  description: 'Soluciones automatizadas de inspección y monitoreo con drones utilizando DJI FlightHub 2 y sistemas de dock automático.',
}

const technicalSpecs = [
  {
    icon: Bot,
    title: 'DJI Dock 2',
    description: 'Sistema automático de despegue y aterrizaje para misiones programadas',
  },
  {
    icon: Cloud,
    title: 'FlightHub 2',
    description: 'Gestión centralizada de flota y datos en la nube',
  },
  {
    icon: Database,
    title: 'Procesamiento AI',
    description: 'Análisis automatizado de datos mediante inteligencia artificial',
  },
]

const useCases = [
  {
    icon: Repeat,
    title: 'Inspecciones Periódicas',
    description: 'Monitoreo automatizado y regular de instalaciones',
  },
  {
    icon: Network,
    title: 'Gestión de Flota',
    description: 'Administración centralizada de múltiples drones',
  },
  {
    icon: Map,
    title: 'Mapeo Automático',
    description: 'Generación de mapas y modelos 3D automatizados',
  },
  {
    icon: BarChart,
    title: 'Análisis de Datos',
    description: 'Procesamiento y visualización automática de información',
  },
  {
    icon: Timer,
    title: 'Misiones Programadas',
    description: 'Vuelos automáticos en horarios predefinidos',
  },
  {
    icon: LineChart,
    title: 'Reportes Automáticos',
    description: 'Generación automática de informes y análisis',
  },
]

const galleryImages = [
  {
    src: '/Imagenes/ind.1.jpg',
    alt: 'Sistema de automatización de drones',
  },
  {
    src: '/Imagenes/ind.2.jpg',
    alt: 'DJI FlightHub 2 en acción',
  },
  {
    src: '/Imagenes/ind.3.jpg',
    alt: 'Dock automático para drones',
  },
]

export default function AutomatizacionPage() {
  return (
    <main>
      <ServiceHero
        title="Automatización de Inspecciones"
        description="Soluciones avanzadas de automatización para inspecciones periódicas y monitoreo continuo con drones."
        imageUrl="/Imagenes/ind.2.jpg"
        service="automatizacion"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#222831] mb-6">
              Automatización Inteligente de Operaciones con Drones
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Implementamos soluciones de automatización completa utilizando DJI FlightHub 2 y sistemas de dock automático para realizar inspecciones periódicas sin intervención humana.
            </p>
            <p className="text-gray-600 text-lg">
              Nuestra plataforma permite programar misiones, procesar datos automáticamente y generar informes detallados para optimizar sus operaciones.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-[#222831] mb-8 text-center">
              Plataforma Tecnológica
            </h3>
            <ServiceTechSpecs specs={technicalSpecs} />
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-[#222831] mb-8 text-center">
              Capacidades y Aplicaciones
            </h3>
            <ServiceUseCases useCases={useCases} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#222831] mb-8 text-center">
              Soluciones en Acción
            </h3>
            <ServiceGallery images={galleryImages} />
          </div>
        </div>
      </section>

      <ServiceCTA
        service="automatizacion"
        whatsappMessage="Hola, me gustaría conocer más sobre sus soluciones de automatización de inspecciones con drones."
      />
    </main>
  )
}
