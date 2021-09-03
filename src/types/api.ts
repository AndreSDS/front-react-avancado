import { SocialLinks } from 'components/ProfileCard/styles'

export type ImageProps = {
  alternativeText: string
  url: string
}

export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type LogoProps = ImageProps

export type HeaderProps = {
  title: string
  description: string
  button?: {
    label: string
    url: string
  }
  image: ImageProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: [{ title: string }]
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type SectionPricingProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SocialLinksProps = {
  url: string
}

export type AuthorsProps = {
  photo: ImageProps
  name: string
  role: string
  socialLinks: SocialLinksProps[]
  description: string
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorsProps[]
}

export type ReviewsProps = {
  name: string
  text: string
  photo: ImageProps
}

export type SectionReviewProps = {
  title: string
  reviews: ReviewsProps[]
}

export type QuestionProps = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: QuestionProps[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: SectionPricingProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewProps
  sectionFaq: SectionFaqProps
}
