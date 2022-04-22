import { Container } from '../../components/container/container';
import { MainContent } from '../../components/main-content/main-content';
import { MainNav } from '../../components/main-nav/main-nav';

export function Projects() {
  return (
    <Container>
      <MainNav selected={0} />
      <MainContent>
        {'main content'}
      </MainContent>
    </Container>
  );
}
