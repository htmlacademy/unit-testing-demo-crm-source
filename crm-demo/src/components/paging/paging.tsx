export interface PagingProps{
  pageSize:number;
}

export function Paging(props:PagingProps){
  const {pageSize} = props;
  if(!Number.isInteger(pageSize) || pageSize<=0){
    throw new Error();
  }
  return null;
}
