export interface NavNavItemProps {
  id: number;
  title: string;
  linkAddress: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  separator?: boolean | undefined;
  active?: boolean | undefined;
  className?: string | undefined;
}

export interface NavNavProps {
  items: NavNavItemProps[];
  selected: number;
}

