import { render } from '@testing-library/react';
import { Paging } from './paging';

describe('Компонент управления разбиением на страницы',()=>{
  it('требует для работы размер страницы',()=>{
    const pageSize = 1;
    render(<Paging pageSize={pageSize}/>);
  });
  it('прекращает работу с ошибкой когда получает размер страницы не являющийся целым числом',()=>{
    const pageSize = -1;
    expect(()=>render(<Paging pageSize={pageSize}/>)).toThrow();
  });
});
