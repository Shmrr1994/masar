export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export interface CTAButtonProps {
  onClick: () => void;
  mobile?: boolean;
}

export interface DesktopNavProps {
  items: NavItem[];
  isScrolled: boolean;
}

export interface MobileMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  items: NavItem[];
  onOpenBooking: () => void;
}

export interface LogoProps {
  isScrolled: boolean;
}