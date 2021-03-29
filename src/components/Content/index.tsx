import { useEffect, useState } from 'react';
import { useGenres } from '../../hooks/useGenres';

import { api } from '../../services/api';

import { Header } from '../Header';
import { MovieCard } from '../MovieCard';

import { Container, Main, MovieList } from './styles';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content() {
  const { genres, selectedGenreId } = useGenres();

  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });
  }, [selectedGenreId]);

  return (
    <Container>
      <Header
        selectedGenreTitle={
          genres.length > 0
            ? genres[selectedGenreId - 1].title
            : 'Carregando...'
        }
      />

      <Main>
        <MovieList>
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </MovieList>
      </Main>
    </Container>
  );
}
