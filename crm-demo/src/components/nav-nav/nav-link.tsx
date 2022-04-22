import classnames from 'classnames';
import { NavNavItemProps } from './nav-nav-item-props';

const MENU_ICON_SIZE = 30;
const getIconElement = (Icon:Partial<Pick<NavNavItemProps,'icon'>>['icon'])=>typeof Icon === 'undefined'?null:(
  <Icon
    width={MENU_ICON_SIZE}
    height={MENU_ICON_SIZE}
    {...{'aria-hidden':'true'}}
  />
);
export function NavLink(p:Partial<Omit<NavNavItemProps,'id'|'separator'>>) {
  const {active, className, linkAddress, title, icon: Icon} = p;
  return (
    <a className={classnames('nav-link',{'nav-link--active':active}, className)}
      href={linkAddress}
    >
      {getIconElement(Icon)}
      <p className="nav-link__title">{title}</p>
    </a>


  );
}
