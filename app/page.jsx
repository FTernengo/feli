'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Thermometer, Factory, Fuel, Map, Bot, Phone, Mail, MapPin, Sun, Linkedin, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  // Metadata para SEO
  const pageMetadata = {
    title: "Felipe Vadillo Drones - Inspecciones Industriales con Drones | Argentina",
    description: "Especialistas en inspecciones industriales con drones, termografía aérea, análisis térmico y producción audiovisual. Servicios profesionales para el sector energético y construcción en Argentina.",
    keywords: "drones industriales, inspecciones con drones, termografía aérea, análisis térmico, paneles solares, inspección industrial, espacios confinados, modelado 3D, automatización drones, Argentina, Buenos Aires",
    canonical: "https://felipevadillodrones.com",
    ogImage: "/Imagenes/Logo.svg",
    ogType: "website",
    twitterCard: "summary_large_image"
  };

  // Estado para la galería
  // Estado para la galería
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Datos de la galería
  const galleryData = [
    {
      image: "/Imagenes/solar.1.JPG",
      title: "Parque Solar - Inspección RGB",
      description: "Mapeo completo de instalación fotovoltaica con análisis de eficiencia operacional",
      date: "Enero 2024",
      location: "Buenos Aires, Argentina",
      technology: "DJI Mavic 3 Pro + RGB"
    },
    {
      image: "/Imagenes/solar.termica.2.JPG",
      title: "Termografía Solar",
      description: "Detección de puntos calientes y fallas en paneles mediante análisis térmico",
      date: "Febrero 2024",
      location: "Córdoba, Argentina",
      technology: "DJI Mavic 3T + Térmica"
    },
    {
      image: "/Imagenes/Ind.1.jpg",
      title: "Inspección Industrial Dual",
      description: "Análisis térmico y visual simultáneo de espacios confinados industriales",
      date: "Marzo 2024",
      location: "Rosario, Argentina",
      technology: "DJI Mavic 3T + Industrial"
    },
    {
      image: "/Imagenes/ind.3.jpg",
      title: "Complejo de Refinería",
      description: "Inspección aérea integral de infraestructura crítica y flare stacks",
      date: "Abril 2024",
      location: "Bahía Blanca, Argentina",
      technology: "DJI Mavic 3T + Mavic 3 Pro"
    },
    {
      image: "/Imagenes/ind.2.jpg",
      title: "Tanques de Almacenamiento",
      description: "Inspección de integridad estructural y análisis de espacios confinados",
      date: "Mayo 2024",
      location: "La Plata, Argentina",
      technology: "DJI Mavic 3T + Indoor"
    },
    {
      image: "/Imagenes/solar.termica.3.JPG",
      title: "Análisis Térmico Avanzado",
      description: "Mapeo térmico detallado para optimización de rendimiento energético",
      date: "Junio 2024",
      location: "Mendoza, Argentina",
      technology: "DJI Mavic 3T + Software FLIR"
    }
  ];

  // Funciones para la galería
  const openGalleryModal = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryModalOpen(true);
  };

  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false);
  };

  const navigateGallery = (direction) => {
    const newIndex = currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < galleryData.length) {
      setCurrentImageIndex(newIndex);
    } else if (newIndex < 0) {
      setCurrentImageIndex(galleryData.length - 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  // Manejar teclas del teclado para el modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeGalleryModal();
      } else if (e.key === 'ArrowLeft') {
        navigateGallery(-1);
      } else if (e.key === 'ArrowRight') {
        navigateGallery(1);
      }
    };

    if (isGalleryModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isGalleryModalOpen, currentImageIndex]);

  return (
    <>
      {/* Metadatos estructurados para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Felipe Vadillo Drones",
            "description": "Especialistas en inspecciones industriales con drones, termografía aérea y análisis térmico para el sector energético y construcción en Argentina.",
            "url": "https://felipevadillodrones.com",
            "logo": "https://felipevadillodrones.com/Imagenes/Logo.svg",
            "image": "https://felipevadillodrones.com/Imagenes/Logo.svg",
            "telephone": "+54 9 221 547-1733",
            "email": "info@felipevadillodrones.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Buenos Aires",
              "addressCountry": "AR",
              "addressRegion": "Buenos Aires"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-34.6037",
              "longitude": "-58.3816"
            },
            "openingHours": "Mo-Fr 08:00-18:00",
            "priceRange": "$$",
            "currenciesAccepted": "ARS, USD",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "areaServed": [
              {
                "@type": "Country",
                "name": "Argentina"
              },
              {
                "@type": "State",
                "name": "Buenos Aires"
              }
            ],
            "serviceType": [
              "Inspecciones Industriales con Drones",
              "Termografía Aérea",
              "Análisis Térmico",
              "Producción Audiovisual",
              "Modelado 3D",
              "Automatización de Drones"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Drones Industriales",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Inspecciones Térmicas",
                    "description": "Termografía aérea especializada para detección de fallas y análisis de eficiencia"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Inspección Industrial",
                    "description": "Inspecciones en entornos de alto riesgo con drones térmicos y ópticos"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Producción Audiovisual",
                    "description": "Filmación y fotografía aérea institucional o publicitaria con calidad cinematográfica"
                  }
                }
              ]
            },
            "sameAs": [
              "https://www.linkedin.com/in/felipevadilloservicioscondrones-43395a94/"
            ]
          })
        }}
      />

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
          <div className="absolute inset-0 bg-black/60" />
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

          <a 
            href="https://wa.me/5492215471733?text=Hola! Me interesa solicitar una inspección con drones para mi proyecto. ¿Podrías darme más información sobre sus servicios?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-[#18a1ad] cursor-pointer hover:bg-[#18a1ad]/90 text-white px-8 py-4 text-lg font-semibold">
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
            <div className="relative bg-gradient-to-br from-[#18a1ad]/5 to-[#18a1ad]/10 rounded-b-2xl p-8 border border-[#18a1ad]/20">
              <div className="absolute top-[-4px] left-0 w-full h-1 bg-gradient-to-r from-[#18a1ad] to-[#18a1ad]/60 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="bg-[#18a1ad] p-3 rounded-full mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-[#222831]">Misión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Transformar la industria mediante tecnología drone avanzada, <b>automatización inteligente</b> y <b>análisis de
                datos precisos</b>, proporcionando soluciones que mejoran la seguridad, eficiencia y toma de decisiones en
                operaciones industriales críticas.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-[#18a1ad]/5 to-[#18a1ad]/10 rounded-b-2xl p-8 border border-[#18a1ad]/20">
              <div className="absolute top-[-4px] left-0 w-full h-1 bg-gradient-to-r from-[#18a1ad] to-[#18a1ad]/60 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="bg-[#18a1ad] p-3 rounded-full mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-[#222831]">Visión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Ser la empresa líder en inspecciones industriales con drones, reconocida por nuestra <b>excelencia
                técnica</b>, innovación constante y capacidad de integrar plataformas digitales que revolucionen el
                mantenimiento predictivo industrial.
              </p>
            </div>
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
                <CardContent className="p-6 py-0">
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
                  <div className="flex justify-end mt-4">
                    <ArrowRight className="h-5 w-5 text-[#18a1ad] group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Inspecciones Térmicas y Solares */}
            <Link href="/servicios/paneles-solares">
              <Card className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#18a1ad] cursor-pointer">
                <CardContent className="p-6 py-0">
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
                  <div className="flex justify-end mt-4">
                    <ArrowRight className="h-5 w-5 text-[#18a1ad] group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Inspección Industrial Crítica */}
            <Link href="/servicios/inspecciones-industriales">
              <Card className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#18a1ad] cursor-pointer">
                <CardContent className="p-6 py-0">
                  <div className="flex items-center mb-4">
                    <Factory className="h-8 w-8 text-[#18a1ad] mr-3" />
                    <h3 className="text-xl font-bold text-[#222831]">Inspección Industrial</h3>
                  </div>
                  <Badge className="mb-3 bg-[#18a1ad]/20 text-[#18a1ad] border-[#18a1ad]/20">🏭</Badge>
                  <p className="text-gray-700 mb-4">
                    Inspecciones en entornos de alto riesgo con drones térmicos y ópticos
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Flare stacks y hornos industriales</li>
                    <li>• Calderas y estructuras de refinería</li>
                    <li>• Análisis de integridad estructural</li>
                  </ul>
                  <div className="flex justify-end mt-4">
                    <ArrowRight className="h-5 w-5 text-[#18a1ad] group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Espacios Confinados */}
            <Link href="/servicios/espacios-confinados">
              <Card className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#18a1ad] cursor-pointer">
                <CardContent className="p-6 py-0">
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
                  <div className="flex justify-end mt-4">
                    <ArrowRight className="h-5 w-5 text-[#18a1ad] group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Modelado 3D */}
            <Link href="/servicios/modelado-3d">
              <Card className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#18a1ad] cursor-pointer">
                <CardContent className="p-6 py-0">
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
                  <div className="flex justify-end mt-4">
                    <ArrowRight className="h-5 w-5 text-[#18a1ad] group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Automatización */}
            <Link href="/servicios/automatizacion">
              <Card className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#18a1ad] cursor-pointer">
                <CardContent className="p-6 py-0">
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
                  <div className="flex justify-end mt-4">
                    <ArrowRight className="h-5 w-5 text-[#18a1ad] group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
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
            {galleryData.map((item, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 py-0 cursor-pointer"
                onClick={() => openGalleryModal(index)}
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3">
                        <svg className="w-6 h-6 text-[#18a1ad]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-[#222831] mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Galería */}
      {isGalleryModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeGalleryModal}
        >
          <div 
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeGalleryModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navegación */}
            <button
              onClick={() => navigateGallery(-1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => navigateGallery(1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Imagen principal */}
            <div className="relative">
              <Image
                src={galleryData[currentImageIndex].image}
                alt={galleryData[currentImageIndex].title}
                width={800}
                height={600}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            </div>

            {/* Información del proyecto */}
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{galleryData[currentImageIndex].title}</h3>
              <p className="text-lg text-gray-300 mb-4">{galleryData[currentImageIndex].description}</p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <span>📅 {galleryData[currentImageIndex].date}</span>
                <span>📍 {galleryData[currentImageIndex].location}</span>
                <span>🔧 {galleryData[currentImageIndex].technology}</span>
              </div>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 space-x-2">
              {galleryData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex ? 'bg-[#18a1ad]' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

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
                    <span>+54 9 221 547-1733</span>
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

                <a 
                  href="https://wa.me/5492215471733?text=Hola! Me gustaría contactar con Felipe Vadillo Drones para consultar sobre sus servicios de inspección con drones. ¿Podrías ayudarme?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3" size="lg">
                    Contactar por WhatsApp
                  </Button>
                </a>
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
                  <a 
                    href="https://wa.me/5492215471733?text=Hola! He completado el formulario de consulta en su sitio web. Me interesa solicitar una inspección con drones. Mis datos están en el formulario. ¿Podrían contactarme?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      type="button"
                      className="w-full bg-[#18a1ad] hover:bg-[#18a1ad]/90 text-white font-semibold py-3"
                      size="lg"
                    >
                      Solicitá tu inspección
                    </Button>
                  </a>
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
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <div className="flex items-center justify-center mb-4 md:mb-0">
                <Image src="/Imagenes/Logo.svg" alt="Felipe Vadillo Drones" width={40} height={40} className="mr-3" />
                <span className="text-xl font-bold">Felipe Vadillo Drones</span>
              </div>
              <div className="flex items-center space-x-6 ml-0 md:ml-4">
                <a 
                  href="https://www.linkedin.com/in/felipevadilloservicioscondrones-43395a94/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#18a1ad] transition-colors duration-200"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
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
    </>
  )
} 
