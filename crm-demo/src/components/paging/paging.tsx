import { PagingProps } from './types';

const hasData = <T,>(items: T[] | undefined): items is T[] => (Array.isArray(items) && items.length > 0);
const isAcceptable = (pageSize: number)=>Number.isInteger(pageSize) && pageSize>0;

export function Paging<T>(props: PagingProps<T>) {
  const {
    pageSize,
    emptyMessage: Empty,
    items,
    selectCurrentPage,
    table: Table,
    requestedPage,
  } = props;
  if (!isAcceptable(pageSize)) {
    throw new Error();
  }
  if (!hasData(items)) {
    return <Empty />;
  }
  const { start, end } = selectCurrentPage({
    pageSize,
    totalItems: items.length,
    requestedPage,
  });
  return (
    <Table
      page={items.slice(start, end)}
    />
  );
}
