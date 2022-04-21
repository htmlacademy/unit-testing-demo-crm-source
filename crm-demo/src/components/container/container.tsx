import { PropsWithChildren } from "react";

export const Container = (p:PropsWithChildren<{}>)=>{
  return (
    <div className="container">
      {p.children}
    </div>
  )
}