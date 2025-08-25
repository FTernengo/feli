import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, Zap, Database, Cloud, Settings, CheckCircle, TrendingUp, Shield, BarChart3, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AutomatizacionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section con Breadcrumb */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Imagenes/ind.3.jpg"
            alt="Automatización de drones industriales"
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
            <span className="text-[#18a1ad]">Automatización</span>
          </nav>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="mb-8">
            <Image src="/Imagenes/Logo.svg" alt="Felipe Vadillo Drones" width={80} height={80} className="mx-auto mb-6" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Automatización de Drones
          </h1>

          <p className="text-xl md:text-2xl mb-4 font-medium text-[#18a1ad]">
            Operaciones Continuas y Misiones Programables
          </p>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Soluciones automatizadas con DJI FlightHub 2 y Dock 2 para operaciones continuas, 
            análisis de datos en la nube y gestión centralizada de flotas
          </p>

          <a 
            href="https://wa.me/5492215471733?text=Hola! Me interesa conocer más sobre la automatización de drones para operaciones industriales. ¿Podrías darme más información?"
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
              Automatización Inteligente para Operaciones Industriales
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nuestras soluciones de automatización transforman la forma en que se realizan las 
              inspecciones industriales. Con DJI FlightHub 2 y Dock 2, implementamos sistemas 
              que permiten operaciones 24/7 sin intervención humana constante.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Desde misiones programables hasta análisis automático de datos, cada operación 
              se ejecuta con precisión milimétrica y reportes en tiempo real para la toma de decisiones.
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
                  <Bot className="h-8 w-8 text-[#18a1ad] mr-3" />
                  <h3 className="text-xl font-bold text-[#222831]">Misiones Automatizadas</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Programación de rutas de inspección que se ejecutan automáticamente
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rutas personalizables
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Ejecución programada
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Monitoreo en tiempo real
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#18a1ad] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Cloud className="h-8 w-8 text-[#18a1ad] mr-3" />
                  <h3 className="text-xl font-bold text-[#222831]">Análisis en la Nube</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Procesamiento automático de datos y generación de reportes inteligentes
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Procesamiento automático
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reportes inteligentes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Alertas automáticas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#18a1ad] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Database className="h-8 w-8 text-[#18a1ad] mr-3" />
                  <h3 className="text-xl font-bold text-[#222831]">Gestión de Flotas</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Control centralizado de múltiples drones y operaciones simultáneas
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Control centralizado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Operaciones simultáneas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Monitoreo de estado
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
                <Bot className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">DJI Dock 2</h3>
              <p className="text-sm text-gray-600">Estación de carga automática</p>
            </div>
            <div className="text-center">
              <div className="bg-[#18a1ad] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">FlightHub 2</h3>
              <p className="text-sm text-gray-600">Plataforma de gestión</p>
            </div>
            <div className="text-center">
              <div className="bg-[#18a1ad] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Análisis AI</h3>
              <p className="text-sm text-gray-600">Inteligencia artificial</p>
            </div>
            <div className="text-center">
              <div className="bg-[#18a1ad] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">API Integrada</h3>
              <p className="text-sm text-gray-600">Integración con sistemas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#222831]">
            Beneficios de la Automatización
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Operación 24/7</h3>
              <p className="text-sm text-gray-600">Inspecciones continuas sin interrupciones</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Mayor Eficiencia</h3>
              <p className="text-sm text-gray-600">Optimización de recursos y tiempo</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Seguridad Mejorada</h3>
              <p className="text-sm text-gray-600">Reducción de riesgos operacionales</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Ahorro de Costos</h3>
              <p className="text-sm text-gray-600">Reducción de gastos operativos</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Datos en Tiempo Real</h3>
              <p className="text-sm text-gray-600">Información actualizada constantemente</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#18a1ad] p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#222831] mb-2">Escalabilidad</h3>
              <p className="text-sm text-gray-600">Crecimiento sin límites</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-[#222831] text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">¿Listo para automatizar tus operaciones?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está preparado para implementar soluciones de automatización 
            que transformen tu operación industrial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5492215471733?text=Hola! Me interesa solicitar una cotización para automatización de drones. ¿Podrías ayudarme?"
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
