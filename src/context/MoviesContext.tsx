import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from 'react';
import { api } from '../services/api';
import { GenreContext } from './GenreContext';

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

interface MoviesProviderProps {
  children: ReactNode;
}

interface MoviesContextData {
  movies: MovieProps[];
}

export const MoviesContext = createContext<MoviesContextData>(
  {} as MoviesContextData
);

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const { selectedGenreId } = useContext(GenreContext);
  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });
  }, [selectedGenreId]);

  return (
    <MoviesContext.Provider value={{ movies }}>
      {children}
    </MoviesContext.Provider>
  );
}
