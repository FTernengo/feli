import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LucideIcon } from 'lucide-react'

interface TechSpec {
  icon: LucideIcon
  title: string
  description: string
}

interface ServiceTechSpecsProps {
  specs: TechSpec[]
}

export function ServiceTechSpecs({ specs }: ServiceTechSpecsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {specs.map((spec, index) => (
        <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#18a1ad]">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <spec.icon className="h-8 w-8 text-[#18a1ad] mr-3" />
              <h3 className="text-xl font-bold text-[#222831]">{spec.title}</h3>
            </div>
            <Badge className="mb-3 bg-[#18a1ad]/10 text-[#18a1ad] border-[#18a1ad]/20">
              Tecnología
            </Badge>
            <p className="text-gray-700">
              {spec.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
