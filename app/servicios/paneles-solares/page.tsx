import { Metadata } from 'next'
import { ServiceHero } from '@/components/servicios/ServiceHero'
import { ServiceGallery } from '@/components/servicios/ServiceGallery'
import { ServiceTechSpecs } from '@/components/servicios/ServiceTechSpecs'
import { ServiceUseCases } from '@/components/servicios/ServiceUseCases'
import { ServiceCTA } from '@/components/servicios/ServiceCTA'
import {
  Sun,
  Thermometer,
  BarChart3,
  Camera,
  LineChart,
  Table2,
  Database,
  Factory,
  Building2,
  Home
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Inspección de Paneles Solares | Vadillo Drones',
  description: 'Inspecciones térmicas especializadas para paneles solares, detección de puntos calientes y análisis de eficiencia mediante drones.',
}

const technicalSpecs = [
  {
    icon: Camera,
    title: 'Cámara Térmica HD',
    description: 'Alta resolución para detectar variaciones térmicas mínimas en paneles solares',
  },
  {
    icon: LineChart,
    title: 'Análisis de Eficiencia',
    description: 'Software especializado para evaluación de rendimiento y pérdidas',
  },
  {
    icon: Database,
    title: 'Informes Detallados',
    description: 'Generación automática de reportes con mapas térmicos y recomendaciones',
  },
]

const useCases = [
  {
    icon: Sun,
    title: 'Parques Solares',
    description: 'Inspección eficiente de grandes instalaciones fotovoltaicas',
  },
  {
    icon: Building2,
    title: 'Instalaciones Comerciales',
    description: 'Evaluación de sistemas solares en edificios comerciales',
  },
  {
    icon: Home,
    title: 'Sistemas Residenciales',
    description: 'Diagnóstico de instalaciones solares domésticas',
  },
  {
    icon: Thermometer,
    title: 'Detección de Hotspots',
    description: 'Identificación temprana de puntos calientes y fallas',
  },
  {
    icon: BarChart3,
    title: 'Análisis de Rendimiento',
    description: 'Evaluación de la eficiencia y producción energética',
  },
  {
    icon: Table2,
    title: 'Mantenimiento Preventivo',
    description: 'Planificación de mantenimiento basado en datos',
  },
]

const galleryImages = [
  {
    src: '/Imagenes/solar.1.JPG',
    alt: 'Inspección térmica de paneles solares',
  },
  {
    src: '/Imagenes/solar.termica.2.JPG',
    alt: 'Análisis térmico de instalación solar',
  },
  {
    src: '/Imagenes/solar.termica.3.JPG',
    alt: 'Detección de hotspots en paneles solares',
  },
]

export default function PanelesSolaresPage() {
  return (
    <main>
      <ServiceHero
        title="Inspección de Paneles Solares"
        description="Optimice el rendimiento de sus instalaciones solares con inspecciones térmicas especializadas mediante drones."
        imageUrl="/Imagenes/solar.1.JPG"
        service="paneles-solares"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#222831] mb-6">
              Inspección Térmica Especializada para Sistemas Solares
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Utilizamos tecnología térmica de última generación para identificar problemas en paneles solares antes de que afecten significativamente su rendimiento.
            </p>
            <p className="text-gray-600 text-lg">
              Nuestros servicios permiten detectar puntos calientes, células defectuosas y otros problemas que pueden reducir la eficiencia de su instalación solar.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-[#222831] mb-8 text-center">
              Tecnología y Equipamiento
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
              Galería de Proyectos
            </h3>
            <ServiceGallery images={galleryImages} />
          </div>
        </div>
      </section>

      <ServiceCTA
        service="paneles-solares"
        whatsappMessage="Hola, me gustaría obtener más información sobre el servicio de inspección de paneles solares con drones."
      />
    </main>
  )
}
