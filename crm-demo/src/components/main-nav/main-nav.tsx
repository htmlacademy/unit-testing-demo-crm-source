import classnames from 'classnames';
import { Button } from '../button/button';
import { ButtonIcon } from '../button/button-props';
import {ReactComponent as IconCollapseNav} from '../../img/sprite/icon-collapse-nav.svg';
import {ReactComponent as IconOpenNav} from '../../img/sprite/icon-open-nav.svg';

interface MainNavProps{
  collapsed: boolean;
}

const BUTTON_ICON_SIZE_30 = '30';

const leftNavIcon:ButtonIcon={
  height:BUTTON_ICON_SIZE_30,
  width: BUTTON_ICON_SIZE_30,
  svg: <IconCollapseNav/>,
  className:'main-nav__button-collapse'
};

const rightNavIcon:ButtonIcon={
  height:BUTTON_ICON_SIZE_30,
  width: BUTTON_ICON_SIZE_30,
  svg: <IconOpenNav/>,
  className:'main-nav__button-open'
};

export function MainNav(p:Partial<MainNavProps>) {
  return (
    <div className={classnames('main-nav',{'collapsed':!!p.collapsed})}>
      <Button
        caption={undefined}
        className='main-nav__button button--empty'
        type='button'
        leftIcon={leftNavIcon}
        rightIcon={rightNavIcon}
      />
    </div>
  );
}
