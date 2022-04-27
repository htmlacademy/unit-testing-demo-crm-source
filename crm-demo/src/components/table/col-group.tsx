import {Column} from './table-props';
interface ColGroupProps{
  columns: Pick<Column,'colClassName'|'id'>[]
}
export function ColGroup(p:ColGroupProps) {
  const {columns} = p;
  return (
    <colgroup>
      {
        columns.map(({colClassName,id})=>(<col className={colClassName} key={id} />))
      }
    </colgroup>
  );
}
