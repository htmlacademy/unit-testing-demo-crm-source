import classnames from 'classnames';
import { ButtonIcon, ButtonProps } from './button-props';

const getIconElement = (p:ButtonIcon|undefined)=>typeof p === 'undefined'?null:(
  <svg
    className={classnames('button__left-icon', p.className)}
    width={p.width}
    height={p.height}
    aria-hidden="true"
  >
    {p.svg}
  </svg>
);

const getCaptionElement = (p:string|undefined) =>typeof p ==='string'?(
  <span>
    {p}
  </span>
):null;
export function Button(p:Partial<ButtonProps>) {
  return (
    <button className={classnames('button', p.className)} type={p.type}>
      {getIconElement(p.leftIcon)}
      {getCaptionElement(p.caption)}
      {getIconElement(p.rightIcon)}
    </button>
  );
}
