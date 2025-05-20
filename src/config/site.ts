import { USER } from "@/data/user";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://dinesh-dk007.com",
  ogImage: "/og-image.png",
  description: USER.bio,
  keywords: ["software engineer", "web developer", "Backend developer", "javascript", "react", "node.js"],
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const SOURCE_CODE_GITHUB_URL = "https://github.com/dinesh-dk007/dinesh.com";

// You can remove or update these holidays according to your preference
export const VIETNAM_HOLIDAYS = [];

export const UTM_PARAMS = {
  utm_source: "dinesh-dk007.com",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
