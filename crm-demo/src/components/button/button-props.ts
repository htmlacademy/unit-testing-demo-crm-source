import { ReactNode } from 'react';

export interface ButtonProps{
  className: string;
  type: 'button'|'submit'|'reset';
  leftIcon: ReactNode;
  rightIcon: ReactNode;
  caption:string;
}
