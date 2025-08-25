import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header de Servicios */}
      <header className="bg-[#222831] text-white py-6 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span>Volver al Inicio</span>
            </Link>
            
            <Link href="/" className="flex items-center">
              <Image src="/Imagenes/Logo.svg" alt="Felipe Vadillo Drones" width={40} height={40} className="mr-3" />
              <span className="text-xl font-bold">Felipe Vadillo Drones</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1">
        {children}
      </main>

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
  )
}
