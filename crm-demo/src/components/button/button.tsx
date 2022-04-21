import classnames from 'classnames';
import { ButtonProps } from './button-props';

const getCaptionElement = (p: string | undefined) => typeof p === 'string' ? (
  <span>
    {p}
  </span>
) : null;
export function Button(p: Partial<ButtonProps>) {
  return (
    <button className={classnames('button', p.className)} type={p.type}>
      {p.leftIcon}
      {getCaptionElement(p.caption)}
      {p.rightIcon}
    </button>
  );
}
