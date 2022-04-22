import classnames from 'classnames';
import { Button } from '../button/button';
import { ReactComponent as IconCollapseNav } from '../../img/sprite/icon-collapse-nav.svg';
import { ReactComponent as IconOpenNav } from '../../img/sprite/icon-open-nav.svg';
import { CurrentUser } from '../current-user/current-user';
import { CurrentUserProps } from '../current-user/current-user-props';
import userImage from '../../img/content/user-pic.webp';
import userImageSet from '../../img/content/user-pic@2x.webp';
import { NavNav } from '../nav-nav/nav-nav';
import { NavNavItemProps } from '../nav-nav/nav-nav-item-props';

import {ReactComponent as IconProjects} from '../../img/sprite/icon-projects.svg';
import {ReactComponent as IconCounterAgents} from '../../img/sprite/icon-counteragents.svg';
import {ReactComponent as IconMessages} from '../../img/sprite/icon-messages.svg';
import {ReactComponent as IconSignOut} from '../../img/sprite/icon-sign-out.svg';
import {ReactComponent as IconSettings} from '../../img/sprite/icon-settings.svg';

interface MainNavProps {
  collapsed: boolean;
  selected: number;
}

const BUTTON_ICON_SIZE_30 = '30';

const leftNavIcon = (
  <IconCollapseNav
    width={BUTTON_ICON_SIZE_30}
    height={BUTTON_ICON_SIZE_30}
    className='main-nav__button-collapse'
  />
);

const rightNavIcon = (
  <IconOpenNav
    width={BUTTON_ICON_SIZE_30}
    height={BUTTON_ICON_SIZE_30}
    className='main-nav__button-open'
  />
);

const DUMMY_LINK_ADDRESS = '#';

const menu:NavNavItemProps[] = [
  {
    title: 'Проекты',
    active: true,
    linkAddress: DUMMY_LINK_ADDRESS,
    icon: IconProjects,
  },
  {
    title:'Контрагенты',
    linkAddress: DUMMY_LINK_ADDRESS,
    icon:IconCounterAgents,
  },
  {
    title:'Сообщения',
    linkAddress: DUMMY_LINK_ADDRESS,
    icon:IconMessages,
    separator:true,
  },
  {
    title:'Настройки',
    linkAddress: DUMMY_LINK_ADDRESS,
    icon:IconSettings,
  },
  {
    title:'Выход',
    linkAddress: DUMMY_LINK_ADDRESS,
    icon:IconSignOut,
  }
].map((e,id)=>({id,...e}));


const currenUser: CurrentUserProps = {
  image: userImage,
  imageAlt: 'Фотография пользователя Анастасии Коноваловой.',
  imageSet: `${userImageSet} 2x`,
  name: 'Анастасия Коновалова',
  role: 'Менеджер по продажам',
};

export function MainNav(p: Partial<MainNavProps>) {
  const {selected} = p;
  return (
    <div className={classnames('main-nav', { 'collapsed': !!p.collapsed })}>
      <Button
        caption={undefined}
        className='main-nav__button button--empty'
        type='button'
        leftIcon={leftNavIcon}
        rightIcon={rightNavIcon}
      />
      <CurrentUser {...currenUser} />
      <NavNav items={menu} selected={selected}></NavNav>
    </div>
  );
}
