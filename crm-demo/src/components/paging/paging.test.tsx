import { render, screen } from '@testing-library/react';
import { ComponentType } from 'react';
import { CurrentPageSelector, DataTable, DataTableProps, Paging } from './paging';

describe('Компонент управления разбиением на страницы', () => {
  it('требует для работы размер страницы', () => {
    const pageSize = 1;
    const emptyMessage: ComponentType = () => null;
    const selectCurrentPage = jest.fn() as CurrentPageSelector;
    const table = jest.fn() as DataTable<unknown>;
    render(
      <Paging
        pageSize={pageSize}
        emptyMessage={emptyMessage}
        selectCurrentPage={selectCurrentPage}
        table={table}
      />
    );
  });
  it.each([-1, 0, 1.5])('прекращает работу с ошибкой когда получает размер страницы (%d) не являющийся целым положительным числом', (pageSize) => {
    const emptyMessage: ComponentType = () => null;
    const selectCurrentPage = jest.fn() as CurrentPageSelector;
    const table = jest.fn() as DataTable<unknown>;
    expect(() => render(
      <Paging
        pageSize={pageSize}
        emptyMessage={emptyMessage}
        selectCurrentPage={selectCurrentPage}
        table={table}
      />
    )).toThrow();
  });
  it('требует сведений для изображения сообщения в случае отсутствия данных', () => {
    const pageSize = 1;
    const message = 'empty list';
    const emptyMessage: ComponentType = () => (<div>{message}</div>);
    const selectCurrentPage = jest.fn() as CurrentPageSelector;
    const table = jest.fn() as DataTable<unknown>;
    render(
      <Paging
        pageSize={pageSize}
        emptyMessage={emptyMessage}
        selectCurrentPage={selectCurrentPage}
        table={table}
      />
    );
    const result = screen.getByText(message);
    expect(result).not.toBeNull();
  });
  it('использует бизнес правило для определения текущей страницы', () => {
    const pageSize = 1;
    const emptyMessage = () => null;
    const rule = jest.fn(() => ({ start: 0, end: 0 })) as CurrentPageSelector;
    const items = Array.from({ length: 1 });
    const table = jest.fn() as DataTable<unknown>;

    render(
      <Paging
        pageSize={pageSize}
        emptyMessage={emptyMessage}
        selectCurrentPage={rule}
        items={items}
        table={table}
      />
    );
    expect(rule).toBeCalled();
  });
  it('делегирует рендеринг страницы специальному компоненту', () => {
    const pageSize = 1;
    const emptyMessage = () => null;
    const rule = jest.fn(() => ({ start: 1, end: 3 })) as CurrentPageSelector;
    const items = [10, 11, 12, 13];
    const table = ({ page }: DataTableProps<number>) => <div>{page.toString()}</div>;

    render(
      <Paging
        pageSize={pageSize}
        emptyMessage={emptyMessage}
        selectCurrentPage={rule}
        items={items}
        table={table}
      />
    );
    const result = screen.getByText('11,12');
    expect(result).toBeInTheDocument();
  });
});
