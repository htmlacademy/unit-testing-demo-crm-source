import classnames from 'classnames';
import { Button } from '../button/button';
import { DownCrossSelect } from '../select/select-down';
import {ReactComponent as IconLookThrough} from '../../img/sprite/icon-look-through.svg';
import {ReactComponent as IconRollback} from '../../img/sprite/icon-roll-back.svg';
import {ReactComponent as IconReset} from '../../img/sprite/icon-reset.svg';
import {ReactComponent as IconArrowInCircle } from '../../img/sprite/icon-arrow-in-circle.svg';
const BUTTON_ICON_SIZE = 24;
const BUTTON_SMALL_SIZE = 20;
const BUTTON_CLASS_NAME = 'button--lighter button--large-icon filter-form__button';


interface FilterFormProps{
  className:string;
}
export function FilterForm({className}:FilterFormProps) {
  return (
    <div className={classnames('filter-form',className)}>
      <form>
        <div className='filter-form__selects-wrapper'>
          <DownCrossSelect label='Состояние'/>
          <DownCrossSelect label='Менеджер'/>
          <DownCrossSelect label='Контрагент'/>

        </div>
        <div className='filter-form__buttons-wrapper'>
          <Button
            leftIcon={
              <IconLookThrough
                width={BUTTON_ICON_SIZE}
                height={BUTTON_ICON_SIZE}
              />
            }
            type="button"
            className={BUTTON_CLASS_NAME}
          />
          <Button
            leftIcon={
              <IconRollback
                width={BUTTON_ICON_SIZE}
                height={BUTTON_ICON_SIZE}
              />
            }
          />
          <Button
            caption='Вернуть'
            leftIcon={
              <IconReset
                width={BUTTON_SMALL_SIZE}
                height={BUTTON_SMALL_SIZE}
              />
            }
            type="button"
            className='button--transparent filter-form__button'
          />
          <Button
            caption='Изменить состояние'
            rightIcon={
              <IconArrowInCircle
                width={BUTTON_SMALL_SIZE}
                height={BUTTON_SMALL_SIZE}
              />
            }
            type="button"
            className='button--filled filter-form__button'
          />
        </div>
      </form>
    </div>
  );
}
