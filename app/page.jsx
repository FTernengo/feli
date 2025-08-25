'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Thermometer, Factory, Fuel, Map, Bot, Phone, Mail, MapPin, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Imagenes/ind.3.jpg"
            alt="Inspección industrial con drones"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="mb-8">
            <Image src="/Imagenes/Logo.svg" alt="Felipe Vadillo Drones" width={120} height={120} className="mx-auto mb-6" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Felipe Vadillo Drones</h1>

          <p className="text-xl md:text-2xl mb-4 font-medium text-[#18a1ad]">
            Precisión Técnica. Excelencia Operacional.
          </p>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Especialistas en inspecciones industriales con drones de última generación para el sector energético y
            construcción
          </p>

          <a href="/test/Form">
            <Button size="lg" className="bg-[#18a1ad] hover:bg-[#18a1ad]/90 text-white px-8 py-4 text-lg font-semibold">
              Solicitá tu inspección
            </Button>
          </a>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-[#222831]">Quiénes Somos</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Somos especialistas en operaciones con drones para inspecciones técnicas industriales, análisis térmicos
              avanzados y producción audiovisual profesional. Con años de experiencia en el campo, utilizamos tecnología
              de vanguardia para brindar soluciones precisas y seguras en entornos industriales críticos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestro enfoque se centra en la seguridad operacional, la precisión técnica y la entrega de datos
              confiables que permiten a nuestros clientes tomar decisiones informadas para optimizar sus operaciones
              industriales.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-[#18a1ad] shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🚀</span>
                  <h3 className="text-2xl font-bold text-[#222831]">Misión</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Transformar la industria mediante tecnología drone avanzada, automatización inteligente y análisis de
                  datos precisos, proporcionando soluciones que mejoran la seguridad, eficiencia y toma de decisiones en
                  operaciones industriales críticas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#18a1ad] shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🎯</span>
                  <h3 className="text-2xl font-bold text-[#222831]">Visión</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Ser la empresa líder en inspecciones industriales con drones, reconocida por nuestra excelencia
                  técnica, innovación constante y capacidad de integrar plataformas digitales que revolucionen el
                  mantenimiento predictivo industrial.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-gray-50" id="servicios">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#222831]">Nuestros Servicios</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Producción Audiovisual */}
            <Link href="/servicios/produccion-audiovisual">
              <Card className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#18a1ad] cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Camera className="h-8 w-8 text-[#18a1ad] mr-3" />
                    <h3 className="text-xl font-bold text-[#222831]">Producción Audiovisual</h3>
                  </div>
                  <Badge className="mb-3 bg-[#18a1ad]/10 text-[#18a1ad] border-[#18a1ad]/20">📸</Badge>
                  <p className="text-gray-700 mb-4">
                    Filmación y fotografía aérea institucional o publicitaria con calidad cinematográfica
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Videos promocionales e institucionales</li>
                    <li>• Fotografía aérea de alta resolución</li>
                    <li>• Cobertura de eventos corporativos</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Inspecciones Térmicas y Solares */}
            <Link href="/servicios/inspecciones-industriales">
              <Card className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#18a1ad] cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Thermometer className="h-8 w-8 text-[#18a1ad] mr-3" />
                    <h3 className="text-xl font-bold text-[#222831]">Inspecciones Térmicas</h3>
                  </div>
                  <Badge className="mb-3 bg-[#18a1ad]/10 text-[#18a1ad] border-[#18a1ad]/20">🌡️</Badge>
                  <p className="text-gray-700 mb-4">
                    Termografía aérea especializada para detección de fallas y análisis de eficiencia
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Detección de fallas eléctricas/mecánicas</li>
                    <li>• Inspección de paneles solares</li>
                    <li>• Análisis de puntos calientes</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Inspección Industrial Crítica */}
            <Link href="/servicios/inspecciones-industriales">
              <Card className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#18a1ad] cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Factory className="h-8 w-8 text-[#18a1ad] mr-3" />
                    <h3 className="text-xl font-bold text-[#222831]">Inspección Industrial</h3>
                  </div>
                  <Badge className="mb-3 bg-[#18a1ad]/10 text-[#18a1ad] border-[#18a1ad]/20">🏭</Badge>
                  <p className="text-gray-700 mb-4">
                    Inspecciones en entornos de alto riesgo con drones térmicos y ópticos
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Flare stacks y hornos industriales</li>
                    <li>• Calderas y estructuras de refinería</li>
                    <li>• Análisis de integridad estructural</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Espacios Confinados */}
            <Link href="/servicios/inspecciones-industriales">
              <Card className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#18a1ad] cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Fuel className="h-8 w-8 text-[#18a1ad] mr-3" />
                    <h3 className="text-xl font-bold text-[#222831]">Espacios Confinados</h3>
                  </div>
                  <Badge className="mb-3 bg-[#18a1ad]/10 text-[#18a1ad] border-[#18a1ad]/20">🛢️</Badge>
                  <p className="text-gray-700 mb-4">
                    Inspección segura de interiores de tanques con drones especializados
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Drones indoor con iluminación propia</li>
                    <li>• Inspección de tanques de almacenamiento</li>
                    <li>• Evaluación de corrosión interna</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Modelado 3D */}
            <Link href="/servicios/inspecciones-industriales">
              <Card className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#18a1ad] cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Map className="h-8 w-8 text-[#18a1ad] mr-3" />
                    <h3 className="text-xl font-bold text-[#222831]">Modelado 3D</h3>
                  </div>
                  <Badge className="mb-3 bg-[#18a1ad]/10 text-[#18a1ad] border-[#18a1ad]/20">🗺️</Badge>
                  <p className="text-gray-700 mb-4">
                    Topografía y modelado tridimensional de precisión para múltiples industrias
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ortomosaicos de alta resolución</li>
                    <li>• Nubes de puntos detalladas</li>
                    <li>• Modelos 3D para arquitectura y minería</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Automatización */}
            <Link href="/servicios/automatizacion">
              <Card className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#18a1ad] cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Bot className="h-8 w-8 text-[#18a1ad] mr-3" />
                    <h3 className="text-xl font-bold text-[#222831]">Automatización</h3>
                  </div>
                  <Badge className="mb-3 bg-[#18a1ad]/10 text-[#18a1ad] border-[#18a1ad]/20">🤖</Badge>
                  <p className="text-gray-700 mb-4">
                    Soluciones automatizadas con DJI FlightHub 2 y Dock 2 para operaciones continuas
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Misiones automatizadas programables</li>
                    <li>• Análisis de datos en la nube</li>
                    <li>• Gestión centralizada de flotas</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Galería de Trabajos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#222831]">Galería de Trabajos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/Imagenes/solar.1.JPG"
                  alt="Inspección de parque solar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#222831] mb-2">Parque Solar - Inspección RGB</h4>
                <p className="text-sm text-gray-600">
                  Mapeo completo de instalación fotovoltaica con análisis de eficiencia operacional
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/Imagenes/solar.termica.2.JPG"
                  alt="Termografía de paneles solares"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#222831] mb-2">Termografía Solar</h4>
                <p className="text-sm text-gray-600">
                  Detección de puntos calientes y fallas en paneles mediante análisis térmico
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/Imagenes/Ind.1.jpg"
                  alt="Inspección industrial térmica"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#222831] mb-2">Inspección Industrial Dual</h4>
                <p className="text-sm text-gray-600">
                  Análisis térmico y visual simultáneo de espacios confinados industriales
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/Imagenes/ind.3.jpg"
                  alt="Complejo industrial refinería"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#222831] mb-2">Complejo de Refinería</h4>
                <p className="text-sm text-gray-600">
                  Inspección aérea integral de infraestructura crítica y flare stacks
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/Imagenes/ind.2.jpg"
                  alt="Tanques de almacenamiento"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#222831] mb-2">Tanques de Almacenamiento</h4>
                <p className="text-sm text-gray-600">
                  Inspección de integridad estructural y análisis de espacios confinados
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/Imagenes/solar.termica.3.JPG"
                  alt="Análisis térmico solar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#222831] mb-2">Análisis Térmico Avanzado</h4>
                <p className="text-sm text-gray-600">
                  Mapeo térmico detallado para optimización de rendimiento energético
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="py-20 bg-[#222831] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">¿Tenés un proyecto en mente?</h2>
              <p className="text-xl text-gray-300">
                Estamos listos para ayudarte con soluciones profesionales de inspección con drones
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#18a1ad]">Contacto Directo</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[#18a1ad] mr-3" />
                    <span>+54 9 11 1234-5678</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#18a1ad] mr-3" />
                    <span>info@felipevadillodrones.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#18a1ad] mr-3" />
                    <span>Buenos Aires, Argentina</span>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3" size="lg">
                  Contactar por WhatsApp
                </Button>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#18a1ad]">Formulario de Consulta</h3>

                <form className="space-y-4">
                  <div>
                    <Input
                      placeholder="Nombre completo"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Empresa"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Describí tu proyecto o necesidad de inspección..."
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#18a1ad] hover:bg-[#18a1ad]/90 text-white font-semibold py-3"
                    size="lg"
                  >
                    Solicitá tu inspección
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image src="/Imagenes/Logo.svg" alt="Felipe Vadillo Drones" width={40} height={40} className="mr-3" />
              <span className="text-xl font-bold">Felipe Vadillo Drones</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">Especialistas en Inspecciones Industriales con Drones</p>
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Felipe Vadillo Drones. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
