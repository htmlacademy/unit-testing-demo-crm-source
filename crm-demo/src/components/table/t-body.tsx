import { TRow } from './t-row';
import {Column} from './table-props';

interface TBodyProps{
  columns:Pick<Column,'format'|'id'>[];
  data: Record<string,string>[];
  getKey: (row:Record<string,string>)=>string;
}

export function TBody(p:TBodyProps){
  const {columns,data, getKey} =p;
  return (
    <tbody>
      {
        data.map((row)=>(<TRow row={row} columns={columns} key={getKey(row)} />))
      }
    </tbody>
  );
}
