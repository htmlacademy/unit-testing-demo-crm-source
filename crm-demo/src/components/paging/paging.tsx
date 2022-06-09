import { ComponentType } from 'react';

export interface SelectCurrentPageProps {
  pageSize: number;
  totalItems: number;
  requestedPage?: number | undefined;
}

export type CurrentPageSelector = (props: SelectCurrentPageProps) => number;

export interface PagingProps<T> {
  pageSize: number;
  emptyMessage: ComponentType;
  items?: T[] | undefined;
  selectCurrentPage: CurrentPageSelector;
}

const isEmpty = <T,>(items: T[] | undefined) => (!Array.isArray(items) || items.length <= 0);

export function Paging<T>(props: PagingProps<T>) {
  const { pageSize, emptyMessage: Empty, items } = props;
  if (!Number.isInteger(pageSize) || pageSize <= 0) {
    throw new Error();
  }
  if (isEmpty(items)) {
    return <Empty />;
  }
  return null;
}
