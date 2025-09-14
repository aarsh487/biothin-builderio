import { builder } from "@builder.io/sdk";

builder.init("b30935ed1b4247d2a9ae9ba92e629104");

export interface NavChild {
  label: string;
  url: string;
}

export interface NavLink {
  label: string;
  url?: string;
  type: "link" | "dropdown";
  children?: NavChild[];
}

export interface NavigationData {
  headerLinks?: NavLink[];
  footerLinks?: NavLink[];
  hamburger?: NavChild[];
}

export async function getNavigationData(): Promise<NavigationData> {
  try {
    const entry = await builder.get("navigation", { limit: 1 }).promise();
    return entry?.data || {};
  } catch (error) {
    console.error("Error fetching navigation data:", error);
    return {};
  }
}

// Convenience function to fetch only the top-level links
export async function getHeaderData(): Promise<NavLink[]> {
  try {
    const entry = await builder.get("navigation", { limit: 1 }).promise();
    return entry?.data?.links || [];
  } catch (error) {
    console.error("Error fetching header data:", error);
    return [];
  }
}
