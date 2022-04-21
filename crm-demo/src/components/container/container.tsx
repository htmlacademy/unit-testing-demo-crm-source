import { PropsWithChildren } from 'react';

export function Container(p:PropsWithChildren<Record<string, never>>) {
  return (
    <div className="container">
      {p.children}
    </div>
  );
}
