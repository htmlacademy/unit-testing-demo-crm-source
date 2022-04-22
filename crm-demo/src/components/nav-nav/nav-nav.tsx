import { NavNavItem } from './nav-nav-item';
import { NavNavProps } from './nav-nav-item-props';

export function NavNav(p:NavNavProps) {
  const {items} =p;
  return (
    <nav className="main-nav__nav">
      <ul className="main-nav__list">
        {
          items.map(({id, ...props})=><NavNavItem key={id} {...props}/>)
        }
      </ul>
    </nav>
  );
}
