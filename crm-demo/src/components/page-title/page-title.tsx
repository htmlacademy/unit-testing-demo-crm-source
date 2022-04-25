import classnames from 'classnames';
interface PageTitleProps{
  className:string;
  title:string;
}
export function PageTitle({className,title}:PageTitleProps) {
  return <h1 className={classnames('page-title',className)}>{title}</h1>;
}
