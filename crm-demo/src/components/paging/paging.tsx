import { ComponentType } from 'react';

export interface PagingProps{
  pageSize:number;
  emptyMessage: ComponentType;
}

export function Paging(props:PagingProps){
  const {pageSize} = props;
  if(!Number.isInteger(pageSize) || pageSize<=0){
    throw new Error();
  }
  return null;
}
