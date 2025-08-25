import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface UseCase {
  icon: LucideIcon
  title: string
  description: string
}

interface ServiceUseCasesProps {
  useCases: UseCase[]
}

export function ServiceUseCases({ useCases }: ServiceUseCasesProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {useCases.map((useCase, index) => (
        <Card 
          key={index}
          className="group hover:shadow-xl transition-all duration-300"
        >
          <CardContent className="p-6">
            <useCase.icon className="h-12 w-12 text-[#18a1ad] mb-4" />
            <h3 className="text-xl font-semibold text-[#222831] mb-3">
              {useCase.title}
            </h3>
            <p className="text-gray-600">
              {useCase.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
