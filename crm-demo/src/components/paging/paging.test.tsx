import { render, screen } from '@testing-library/react';
import { ComponentType } from 'react';
import { CurrentPageSelector, Paging, SelectCurrentPageProps } from './paging';

describe('Компонент управления разбиением на страницы', () => {
  it('требует для работы размер страницы', () => {
    const pageSize = 1;
    const emptyMessage: ComponentType = () => null;
    render(<Paging pageSize={pageSize} emptyMessage={emptyMessage} />);
  });
  it.each([-1, 0, 1.5])('прекращает работу с ошибкой когда получает размер страницы (%d) не являющийся целым положительным числом', (pageSize) => {
    const emptyMessage: ComponentType = () => null;
    expect(() => render(<Paging pageSize={pageSize} emptyMessage={emptyMessage} />)).toThrow();
  });
  it('требует сведений для изображения сообщения в случае отсутствия данных', () => {
    const pageSize = 1;
    const message = 'empty list';
    const emptyMessage: ComponentType = () => (<div>{message}</div>);
    render(<Paging pageSize={pageSize} emptyMessage={emptyMessage} />);
    const result = screen.getByText(message);
    expect(result).not.toBeNull();
  });
  it('использует бизнес правило для определения текущей страницы', () => {
    const pageSize = 1;
    const emptyMessage = () => null;
    const rule = jest.fn() as CurrentPageSelector;
    const items = Array.from({ length: 1 });

    render(
      <Paging
        pageSize={pageSize}
        emptyMessage={emptyMessage}
        selectCurrentPage={rule}
        items={items}
      />
    );
    expect(rule).toBeCalled();
  });
});
