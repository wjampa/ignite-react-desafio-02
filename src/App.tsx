import { GenresProvider } from './hooks/useGenres';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { GlobalStyle } from './styles/global';
import { Container } from './styles/App';

export function App() {
  return (
    <GenresProvider>
      <Container>
        <SideBar />
        <Content />
      </Container>
      <GlobalStyle />
    </GenresProvider>
  );
}
