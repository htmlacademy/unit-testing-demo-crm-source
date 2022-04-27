import { ReactNode } from 'react';

export interface Column {
  id: number;
  colClassName: string;
  label: string;
  format: (row: Record<string, string>) => ReactNode;
}
export interface TableProps {
  columns: Column[];
  rows: Record<string, string>[];
  className: string;
  getKey: (row: Record<string, string>) => string;
}
