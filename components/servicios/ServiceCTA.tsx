import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ServiceCTAProps {
  service: string
  whatsappMessage: string
}

export function ServiceCTA({ service, whatsappMessage }: ServiceCTAProps) {
  const encodedMessage = encodeURIComponent(whatsappMessage)
  const whatsappUrl = `https://wa.me/+5493512452963?text=${encodedMessage}`

  return (
    <div className="bg-[#18a1ad] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          ¿Listo para empezar?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contáctanos hoy mismo para discutir tu proyecto y recibir una cotización personalizada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-white text-[#18a1ad] hover:bg-white/90"
          >
            <Link href={`/contacto?servicio=${service}`}>
              Solicitar Cotización
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Chatear por WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
