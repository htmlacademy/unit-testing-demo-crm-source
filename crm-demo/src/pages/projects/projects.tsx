import { Container } from '../../components/container/container';
import { FilterForm } from '../../components/filter-form/filter-form';
import { MainContent } from '../../components/main-content/main-content';
import { MainNav } from '../../components/main-nav/main-nav';
import { PageTitle } from '../../components/page-title/page-title';

export function Projects() {
  return (
    <Container>
      <MainNav selected={0} />
      <MainContent>
        <PageTitle className="main-content__page-title" title='Проекты'  />
        <FilterForm className='main-content__filter-form' />
      </MainContent>
    </Container>
  );
}
