import builder from "@/config/builder";

export type FooterLink = {
  label: string;
  url: string;
  openInNewTab?: boolean;
};

export default async function getFooterLinks() {
  const { data } = await builder.get("footer-links").promise();
  return data?.footerLinks ?? [];
}
