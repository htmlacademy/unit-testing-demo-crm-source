import { NavNavItem } from './nav-nav-item';
import { NavNavItemProps, NavNavProps } from './nav-nav-item-props';

const renderItems = (items:NavNavItemProps[], selected: number|undefined)=>items.map(({id, ...props})=><NavNavItem key={id} {...props} active={id===selected}/>);
const getItems = (p:Partial<NavNavProps>)=>{
  const {items, selected}  = p;
  return (
    Array.isArray(items)?renderItems(items, selected):null
  );
};

export function NavNav(p:Partial<NavNavProps>) {
  return (
    <nav className="main-nav__nav">
      <ul className="main-nav__list">
        {
          getItems(p)
        }
      </ul>
    </nav>
  );
}
