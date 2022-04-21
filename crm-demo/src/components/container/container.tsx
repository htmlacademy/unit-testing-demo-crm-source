import { PropsWithChildren } from 'react';

export function Container(p:Pick<PropsWithChildren<Record<string, never>>,'children'>) {
  return (
    <div className="container">
      {p.children}
    </div>
  );
}
