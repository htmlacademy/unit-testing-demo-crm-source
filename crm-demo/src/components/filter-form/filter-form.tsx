import classnames from 'classnames';
import { DownCrossSelect } from '../select/select-down';
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

        </div>
      </form>
    </div>
  );
}
