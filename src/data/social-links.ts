import builder from '@/config/builder'

export type SocialLink = {
    label: string
    showTitle?: boolean
    icon: string
    url: string
    openInNewTab?: boolean
}

export default async function getSocialLinks() {
  const response = await builder.get("social-links").promise();
  return response?.data?.socialLinks ?? [];
}
