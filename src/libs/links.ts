type MenuItem = {
  label: string;
  href: string;
};

export const SidenavMenu: MenuItem[] = [
  {
    label: "Home",
    href: "/dashboard"
  },
  {
    label: "Blogs",
    href: "/dashboard/blogs"
  },
  {
    label: "Drafts",
    href: "/dashboard/drafts"
  }
];
