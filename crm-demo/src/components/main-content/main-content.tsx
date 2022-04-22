import { ReactNode } from 'react';

interface MainContentProps{
  children:ReactNode | undefined;
}
export function MainContent (p:MainContentProps){
  const {children} = p;
  return(
    <div className="main-content">
      {children}
    </div>
  );
}
