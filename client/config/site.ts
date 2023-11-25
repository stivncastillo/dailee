export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Dailee",
  description: "A habit tracker",
  navItems: [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Habits",
      href: "/dashboard/admin/habits",
    },
  ],
  navMenuItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
  ],
};
