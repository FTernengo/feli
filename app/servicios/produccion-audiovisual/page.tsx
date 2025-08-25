import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Camera, Video, Building2, Map, Users, Calendar, Compass, Film, Clapperboard, Image as ImageIcon, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProduccionAudiovisualPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section con Breadcrumb */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Imagenes/prod_audio.webp"
            alt="Producción audiovisual con drones"
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
            <span  className="">
              Servicios
            </span>
            <span>/</span>
            <span className="text-[#18a1ad]">Producción Audiovisual</span>
          </nav>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="mb-8">
            <Image src="/Imagenes/Logo.svg" alt="Felipe Vadillo Drones" width={80} height={80} className="mx-auto mb-6" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Producción Audiovisual
          </h1>

          <p className="text-xl md:text-2xl mb-4 font-medium text-[#18a1ad]">
            Capturas Aéreas Cinematográficas
          </p>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Servicios profesionales de fotografía y video aéreo para publicidad, 
            eventos y documentación con calidad cinematográfica
          </p>

          <a 
            href="https://wa.me/5492215471733?text=Hola! Me interesa conocer más sobre sus servicios de producción audiovisual con drones. ¿Podrías darme más información?"
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
              Producción Audiovisual Profesional con Drones
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Creamos contenido audiovisual de alta calidad utilizando drones equipados con las últimas tecnologías 
              en grabación y estabilización. Nuestro equipo combina experiencia técnica y visión creativa para 
              producir material visual impactante que destaque su mensaje.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Desde videos promocionales hasta documentales institucionales, cada proyecto se ejecuta con 
              precisión técnica y creatividad artística para maximizar el impacto visual.
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
                  <Video className="h-8 w-8 text-[#18a1ad] mr-3" />
                  <h3 className="text-xl font-bold text-[#222831]">Videos Promocionales</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Videos aéreos de alta calidad para promocionar productos, servicios y empresas
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Edición profesional
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Música de fondo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Efectos visuales
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#18a1ad] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Camera className="h-8 w-8 text-[#18a1ad] mr-3" />
                  <h3 className="text-xl font-bold text-[#222831]">Fotografía Aérea</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Imágenes aéreas de alta resolución para diversos usos comerciales e institucionales
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Alta resolución
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Corrección de color
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
                  <Users className="h-8 w-8 text-[#18a1ad] mr-3" />
                  <h3 className="text-xl font-bold text-[#222831]">Eventos Corporativos</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Cobertura aérea profesional de eventos empresariales y conferencias
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cobertura completa
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Edición rápida
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Entrega oportuna
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
            Equipamiento Profesional
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-[#18a1ad] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Cámara 4K</h3>
              <p className="text-sm text-gray-600">Captura en ultra alta definición</p>
            </div>
            <div className="text-center">
              <div className="bg-[#18a1ad] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Compass className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Gimbal 3 Ejes</h3>
              <p className="text-sm text-gray-600">Estabilización profesional</p>
            </div>
            <div className="text-center">
              <div className="bg-[#18a1ad] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Film className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Post-Producción</h3>
              <p className="text-sm text-gray-600">Edición cinematográfica</p>
            </div>
            <div className="text-center">
              <div className="bg-[#18a1ad] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">HDR</h3>
              <p className="text-sm text-gray-600">Alto rango dinámico</p>
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
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Real Estate</h3>
              <p className="text-sm text-gray-600">Fotografía y video para propiedades</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Eventos</h3>
              <p className="text-sm text-gray-600">Cobertura de eventos corporativos</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Map className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Turismo</h3>
              <p className="text-sm text-gray-600">Promoción de destinos turísticos</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Clapperboard className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Publicidad</h3>
              <p className="text-sm text-gray-600">Contenido publicitario de alto impacto</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Film className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Documentales</h3>
              <p className="text-sm text-gray-600">Capturas para documentales</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <ImageIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Fotografía</h3>
              <p className="text-sm text-gray-600">Tomas aéreas profesionales</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-[#222831] text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">¿Listo para tu próximo proyecto audiovisual?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está preparado para crear contenido visual impactante que destaque tu marca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5492215471733?text=Hola! Me interesa solicitar una cotización para producción audiovisual con drones. ¿Podrías ayudarme?"
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
