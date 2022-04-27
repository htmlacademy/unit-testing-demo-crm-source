import classNames from 'classnames';
import { TableProps } from './table-props';
import {ColGroup} from './col-group';
import { THead } from './t-head';
import { TBody } from './t-body';


export function Table(p:TableProps) {
  const {className,columns, rows: data, getKey} = p;
  return (
    <div className={classNames('table',className)}>
      <table>
        <ColGroup columns={columns} />
        <THead columns={columns}/>
        <TBody columns={columns} data={data} getKey={getKey} />
      </table>
    </div>
  );
}
