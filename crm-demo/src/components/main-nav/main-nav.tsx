import classnames from 'classnames';
import { Button } from '../button/button';
import { ReactComponent as IconCollapseNav } from '../../img/sprite/icon-collapse-nav.svg';
import { ReactComponent as IconOpenNav } from '../../img/sprite/icon-open-nav.svg';
import { CurrentUser } from '../current-user/current-user';
import { CurrentUserProps } from '../current-user/current-user-props';
import userImage from '../../img/content/user-pic.webp';
import userImageSet from '../../img/content/user-pic@2x.webp';
interface MainNavProps {
  collapsed: boolean;
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

const currenUser: CurrentUserProps = {
  image: userImage,
  imageAlt: 'Фотография пользователя Анастасии Коноваловой.',
  imageSet: `${userImageSet} 2x`,
  name: 'Анастасия Коновалова',
  role: 'Менеджер по продажам',
};

export function MainNav(p: Partial<MainNavProps>) {
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
    </div>
  );
}
