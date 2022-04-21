import { ReactNode } from 'react';

export interface ButtonIcon{
  className?: string | undefined;
  width: string;
  height: string;
  svg: ReactNode;
}
export interface ButtonProps{
  className: string;
  type: 'button'|'submit'|'reset';
  leftIcon: ButtonIcon;
  rightIcon: ButtonIcon;
  caption:string;
}
