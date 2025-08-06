import { builder } from "@builder.io/sdk";

// Initialize Builder SDK
builder.init("b30935ed1b4247d2a9ae9ba92e629104");

export interface HeaderLink {
  label: string;
  url: string;
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterGroup {
  groupTitle: string;
  links: FooterLink[];
}

export interface NavigationData {
  headerLinks?: HeaderLink[];
  footerLinks?: FooterGroup[];
}

export async function getNavigationData(): Promise<NavigationData> {
  try {
    const { data } = await builder.get("navigation").promise();
    return data || {};
  } catch (error) {
    console.error("Error fetching navigation data:", error);
    return {};
  }
}

export async function getHeaderData(): Promise<HeaderLink[]> {
  try {
    const { data } = await builder.get("navigation").promise();
    return data?.headerLinks || [];
  } catch (error) {
    console.error("Error fetching header data:", error);
    return [];
  }
}

export async function getFooterData(): Promise<FooterGroup[]> {
  try {
    const { data } = await builder.get("navigation").promise();
    return data?.footerLinks || [];
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return [];
  }
}
