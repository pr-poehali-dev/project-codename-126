import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  image?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  tag?: string
}

export interface SectionProps extends Section {
  isActive: boolean
}
