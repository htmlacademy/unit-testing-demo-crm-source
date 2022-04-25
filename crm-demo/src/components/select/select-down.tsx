import {Select, SelectProps} from './select';
import {ReactComponent as IconArrowDown} from '../../img/sprite/icon-arrow-down.svg';
import {ReactComponent as IconCross} from '../../img/sprite/icon-cross.svg';

const FORM_SELECT_ICON_SIZE = 20;

type DownCrossSelectProps = Pick<SelectProps, 'label'>

export function DownCrossSelect(p:DownCrossSelectProps) {
  const {label} = p;
  return (
    <Select
      className="filter-form__select"
      label={label}
      leftIcon={<IconArrowDown width={FORM_SELECT_ICON_SIZE} height={FORM_SELECT_ICON_SIZE} />}
      resetIcon={<IconCross width={FORM_SELECT_ICON_SIZE} height={FORM_SELECT_ICON_SIZE} />}
    />
  );
}
