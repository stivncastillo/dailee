export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Dailee",
  description: "My Fucking Application.",
  navItems: [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Habits",
      href: "/admin/habits",
    },
  ],
  navMenuItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    }
  ],
};
