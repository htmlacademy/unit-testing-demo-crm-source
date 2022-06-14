import { Paging } from './paging';
import { PagingProps } from './types';

export const makePaging = <T,>(
  settings: Omit<PagingProps<T>, 'table'>,
) => (
    props: Pick<PagingProps<T>, 'table'>,
  ) => Paging<T>({ ...settings, ...props });
