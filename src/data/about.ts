import builder from '@/config/builder'

export type About = {
  data: {
    brandName: string
    shortDescription: string
    brandLogo: string
    mandatoryDetails: string
  }
}

export default async function getAbout() {
  return (await builder.get('about', { cachebust: true })) as About
}
