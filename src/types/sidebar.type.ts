interface MenuItem {
  label: string;
  icon: React.ReactNode;
  path: string;
  badge?: string;
  children?: MenuItem[];
}

export interface MenuSection {
  section: string;
  items: MenuItem[];
}
