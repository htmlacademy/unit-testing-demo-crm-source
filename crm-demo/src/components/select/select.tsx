import classnames from 'classnames';
import { ReactNode, useState, MouseEvent, Dispatch, SetStateAction } from 'react';
export interface SelectProps{
  className:string;
  leftIcon: ReactNode;
  leftIconOpened: ReactNode;
  label: string;
  resetIcon: ReactNode;
}

type States = 'opened';

const isListItem=(target:EventTarget|null):target is HTMLLIElement => {
  if(target === null){
    return false;
  }
  const {tagName} = target as HTMLLIElement;
  return tagName === 'LI';
};

const createClickHandler = (
  setValue:(value:string)=>void,
  setMod:(mod:States|undefined)=>void,
)=>(evt:MouseEvent<HTMLDivElement>)=>{
  const target = evt.target;
  if(!isListItem(target)){
    return;
  }
  setMod(undefined);
  setValue(target.innerText);
};


const createOpenCloseHandler = (setMod:Dispatch<SetStateAction<States | undefined>>)=>(evt:MouseEvent<HTMLDivElement>)=>{
  setMod((current)=>current === 'opened'? undefined : 'opened');
};

const computeModifier= (mod:States | undefined, value: string|undefined)=>{
  if(mod === 'opened'){
    return 'opened';
  }
  if(typeof value === 'string'){
    return 'selected';
  }
  return undefined;
};

export function Select(p:Partial<SelectProps>) {
  const {
    className,
    leftIcon,
    leftIconOpened,
    label,
    resetIcon
  } = p;
  const [mod, setMod] = useState(undefined as States|undefined);
  const [value, setValue] = useState(undefined as string | undefined);

  const modifier = computeModifier(mod, value);

  return (
    <div className={classnames('select',className, {[`select--${modifier}`]:!!modifier})}>
      <div className='select__header' onClick={createOpenCloseHandler(setMod)}>
        {mod==='opened'?leftIconOpened:leftIcon}
        <span>{typeof value === 'string'? value: label}</span>
        {resetIcon?<button type='button' onClick={()=>{setMod(undefined);setValue(undefined);}}>{resetIcon}</button>:null}
      </div>
      <div className='select__list' onClick={createClickHandler(setValue, setMod)}>
        <ul>
          <li>Черновик</li>
          <li>Переговоры</li>
          <li>Подписание</li>
          <li>Постановка</li>
          <li>Архив</li>
        </ul>
      </div>
    </div>
  );
}
