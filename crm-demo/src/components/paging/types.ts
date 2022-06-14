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
