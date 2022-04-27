import {Column} from './table-props';

interface TRowProps{
  columns:Pick<Column,'format'|'id'>[];
  row: Record<string,string>;
}
export function TRow(p:TRowProps){
  const {columns,row} =p;
  return (
    <tr>
      {
        columns.map(({format,id})=>(<td key={id}>{format(row)}</td>))
      }
    </tr>
  );
}
