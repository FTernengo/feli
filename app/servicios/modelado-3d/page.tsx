import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Map, Box, Ruler, CheckCircle, TrendingUp, Shield, BarChart3, Layers, Eye, FileText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Modelado3DPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section con Breadcrumb */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Imagenes/solar.1.JPG"
            alt="Modelado 3D con drones"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-6 left-6 z-10">
          <nav className="flex items-center space-x-2 text-white text-sm">
            <Link href="/" className="hover:text-[#18a1ad] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-[#18a1ad] transition-colors">
              Servicios
            </Link>
            <span>/</span>
            <span className="text-[#18a1ad]">Modelado 3D</span>
          </nav>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="mb-8">
            <Image src="/Imagenes/Logo.svg" alt="Felipe Vadillo Drones" width={80} height={80} className="mx-auto mb-6" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Modelado 3D
          </h1>

          <p className="text-xl md:text-2xl mb-4 font-medium text-[#18a1ad]">
            Topografía y Reconstrucción Tridimensional de Precisión
          </p>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Generamos modelos 3D detallados, ortomosaicos de alta resolución y nubes de puntos 
            para múltiples industrias con tecnología de fotogrametría avanzada
          </p>

          <a 
            href="https://wa.me/5492215471733?text=Hola! Me interesa conocer más sobre el servicio de modelado 3D con drones. ¿Podrías darme más información?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-[#18a1ad] hover:bg-[#18a1ad]/90 text-white px-8 py-4 text-lg font-semibold">
              Consultar Servicio
            </Button>
          </a>
        </div>
      </section>

      {/* Descripción del Servicio */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-[#222831]">
              Modelado Tridimensional de Alta Precisión
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nuestro servicio de modelado 3D utiliza tecnología de fotogrametría avanzada para 
              crear representaciones digitales precisas de terrenos, estructuras y objetos. 
              Cada modelo se genera con la máxima calidad y detalle para satisfacer las necesidades 
              específicas de su proyecto.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Desde proyectos de construcción hasta análisis topográficos, nuestros modelos 3D 
              proporcionan la base para la planificación, diseño y análisis de cualquier proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#222831]">Nuestros Servicios</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="border-l-4 border-l-[#18a1ad] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Map className="h-8 w-8 text-[#18a1ad] mr-3" />
                  <h3 className="text-xl font-bold text-[#222831]">Ortomosaicos</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Imágenes aéreas georreferenciadas de alta resolución para análisis detallado
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Alta resolución
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Georreferenciación precisa
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Múltiples formatos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#18a1ad] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Box className="h-8 w-8 text-[#18a1ad] mr-3" />
                  <h3 className="text-xl font-bold text-[#222831]">Modelos 3D</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Reconstrucción tridimensional detallada de estructuras y terrenos
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Textura realista
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mediciones precisas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Exportación múltiple
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#18a1ad] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Layers className="h-8 w-8 text-[#18a1ad] mr-3" />
                  <h3 className="text-xl font-bold text-[#222831]">Nubes de Puntos</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Datos de alta densidad para análisis técnico y mediciones precisas
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Alta densidad
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Precisión milimétrica
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Análisis técnico
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tecnologías Utilizadas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#222831]">
            Tecnología de Vanguardia
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-[#18a1ad] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Box className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Fotogrametría</h3>
              <p className="text-sm text-gray-600">Tecnología avanzada de reconstrucción</p>
            </div>
            <div className="text-center">
              <div className="bg-[#18a1ad] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Ruler className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Precisión GPS</h3>
              <p className="text-sm text-gray-600">Georreferenciación exacta</p>
            </div>
            <div className="text-center">
              <div className="bg-[#18a1ad] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Cámaras HD</h3>
              <p className="text-sm text-gray-600">Alta resolución para detalle</p>
            </div>
            <div className="text-center">
              <div className="bg-[#18a1ad] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Software Profesional</h3>
              <p className="text-sm text-gray-600">Procesamiento especializado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#222831]">
            Aplicaciones y Casos de Uso
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Box className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Arquitectura</h3>
              <p className="text-sm text-gray-600">Modelos 3D de edificios y estructuras</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Map className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Topografía</h3>
              <p className="text-sm text-gray-600">Mapeo de terrenos y superficies</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Ruler className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Construcción</h3>
              <p className="text-sm text-gray-600">Control de avance de obras</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Minería</h3>
              <p className="text-sm text-gray-600">Análisis de volúmenes y excavaciones</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Inspección</h3>
              <p className="text-sm text-gray-600">Análisis detallado de estructuras</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Documentación</h3>
              <p className="text-sm text-gray-600">Registro histórico de proyectos</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-[#222831] text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas un modelo 3D de alta precisión?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está preparado para crear representaciones tridimensionales 
            detalladas que transformen tu proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5492215471733?text=Hola! Me interesa solicitar una cotización para modelado 3D con drones. ¿Podrías ayudarme?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-[#18a1ad] hover:bg-[#18a1ad]/90 text-white px-8 py-4">
                Solicitar Cotización
              </Button>
            </a>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white hover:bg-white/90 text-[#222831] px-8 py-4">
                Ver Otros Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
