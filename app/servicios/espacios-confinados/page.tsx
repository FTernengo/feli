import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Fuel, Eye, Shield, CheckCircle, TrendingUp, Zap, BarChart3, AlertTriangle, Lock, Lightbulb } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function EspaciosConfinadosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section con Breadcrumb */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Imagenes/ind.2.jpg"
            alt="Inspección de espacios confinados con drones"
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
            <span className="text-[#18a1ad]">Espacios Confinados</span>
          </nav>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="mb-8">
            <Image src="/Imagenes/Logo.svg" alt="Felipe Vadillo Drones" width={80} height={80} className="mx-auto mb-6" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Espacios Confinados
          </h1>

          <p className="text-xl md:text-2xl mb-4 font-medium text-[#18a1ad]">
            Inspección Segura de Interiores con Drones Especializados
          </p>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Utilizamos drones indoor equipados con iluminación propia para inspeccionar 
            tanques, silos y espacios confinados de forma segura y eficiente
          </p>

          <a 
            href="https://wa.me/5492215471733?text=Hola! Me interesa conocer más sobre la inspección de espacios confinados con drones. ¿Podrías darme más información?"
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
              Inspección Segura de Espacios Confinados
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nuestro servicio de inspección de espacios confinados elimina la necesidad de 
              que el personal ingrese a áreas peligrosas. Utilizamos drones especializados 
              con iluminación propia y cámaras de alta resolución para examinar el interior 
              de tanques, silos y otros espacios confinados.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cada inspección se realiza con la máxima seguridad, proporcionando datos 
              detallados sobre el estado de las estructuras y equipos sin poner en riesgo 
              la vida del personal.
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
                  <Fuel className="h-8 w-8 text-[#18a1ad] mr-3" />
                  <h3 className="text-xl font-bold text-[#222831]">Tanques de Almacenamiento</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Inspección completa del interior de tanques sin necesidad de vaciado
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Análisis de corrosión
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Estado de revestimientos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Detección de fugas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#18a1ad] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-[#18a1ad] mr-3" />
                  <h3 className="text-xl font-bold text-[#222831]">Silos y Contenedores</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Evaluación del estado interno de silos y contenedores industriales
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Nivel de contenido
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Estado estructural
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Limpieza interna
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#18a1ad] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-[#18a1ad] mr-3" />
                  <h3 className="text-xl font-bold text-[#222831]">Tuberías y Conductos</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Inspección de sistemas de tuberías y conductos de difícil acceso
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bloqueos y obstrucciones
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Estado de revestimiento
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Análisis de flujo
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
            Tecnología Especializada
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-[#18a1ad] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Iluminación LED</h3>
              <p className="text-sm text-gray-600">Luz potente y eficiente</p>
            </div>
            <div className="text-center">
              <div className="bg-[#18a1ad] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Cámaras HD</h3>
              <p className="text-sm text-gray-600">Alta resolución interior</p>
            </div>
            <div className="text-center">
              <div className="bg-[#18a1ad] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Control Remoto</h3>
              <p className="text-sm text-gray-600">Operación segura</p>
            </div>
            <div className="text-center">
              <div className="bg-[#18a1ad] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Protección IP</h3>
              <p className="text-sm text-gray-600">Resistente a ambientes hostiles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#222831]">
            Beneficios de la Inspección con Drones
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Seguridad Total</h3>
              <p className="text-sm text-gray-600">Sin riesgo para el personal</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Eficiencia Operativa</h3>
              <p className="text-sm text-gray-600">Inspecciones más rápidas</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Ahorro de Costos</h3>
              <p className="text-sm text-gray-600">Sin paradas de producción</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Datos Precisos</h3>
              <p className="text-sm text-gray-600">Información detallada</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Detección Temprana</h3>
              <p className="text-sm text-gray-600">Problemas antes de que se agraven</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Acceso Completo</h3>
              <p className="text-sm text-gray-600">A todas las áreas internas</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-[#222831] text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas inspeccionar espacios confinados?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está preparado para realizar inspecciones seguras y eficientes 
            de cualquier espacio confinado sin poner en riesgo a tu personal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5492215471733?text=Hola! Me interesa solicitar una cotización para inspección de espacios confinados. ¿Podrías ayudarme?"
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
