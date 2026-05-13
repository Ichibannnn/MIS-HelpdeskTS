interface MenuItem {
  label: string;
  icon: React.ReactNode;
  path: string;
  badge?: string;
}

export interface MenuSection {
  section: string;
  items: MenuItem[];
}
