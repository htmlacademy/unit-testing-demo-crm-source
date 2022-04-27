import {Column} from './table-props';
interface THeadProps{
  columns: Pick<Column,'label'|'id'>[];
}
export function THead(p:THeadProps) {
  const {columns} = p;
  return (
    <thead>
      <tr>
        {
          columns.map(({id,label})=>(<th scope="col" key={id}>{label}</th>))
        }
      </tr>
    </thead>
  );
}
