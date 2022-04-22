import classnames from 'classnames';
import { NavLink } from './nav-link';
import { NavNavItemProps } from './nav-nav-item-props';

export function NavNavItem(p:Partial<Omit<NavNavItemProps,'id'>>) {
  const {separator, ...rest} = p;
  return (
    <li className={classnames('main-nav__list-item',{'main-nav__list-item--underlined': separator})}>
      <NavLink {...rest}/>
    </li>
  );
}
