import { ComponentType } from 'react';

export interface SelectCurrentPageProps {
  pageSize: number;
  totalItems: number;
  requestedPage?: number | undefined;
}

export interface PageBoundaries {
  start: number;
  end: number;
}

export interface DataTableProps<T> {
  page: T[]
}

export type DataTable<T> = ComponentType<DataTableProps<T>>;

export type CurrentPageSelector = (props: SelectCurrentPageProps) => PageBoundaries;

export interface PagingProps<T> {
  pageSize: number;
  emptyMessage: ComponentType;
  items?: T[] | undefined;
  selectCurrentPage: CurrentPageSelector;
  table: DataTable<T>;
  requestedPage?: number | undefined;
}

const hasData = <T,>(items: T[] | undefined): items is T[] => (Array.isArray(items) && items.length > 0);

export function Paging<T>(props: PagingProps<T>) {
  const {
    pageSize,
    emptyMessage: Empty,
    items,
    selectCurrentPage,
    table: Table,
    requestedPage,
  } = props;
  if (!Number.isInteger(pageSize) || pageSize <= 0) {
    throw new Error();
  }
  if (!hasData(items)) {
    return <Empty />;
  }
  const {start, end} = selectCurrentPage({
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
