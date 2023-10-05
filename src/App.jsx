import { Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

import MovieList from "./components/MovieList";
import Loader from "./components/Loader";

/**
 * TODO:
 * 1. Зробити get запит по урл apiUrl і записати відповідь сервера у стейт movies
 * 2. Додати індикацію завантаження за допомогою компонента Loader
 * 3. Дізнатись які дані повертає апі і в компоненті MovieListItem підставити відповідні дані замість статичного тексту
 */

const apiUrl = "http://localhost:3000/movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(apiUrl)
      .then((res) => setMovies(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <Loader />}

      <Container sx={{ py: "12px" }}>
        <Typography variant="h3" my={5}>
          Trending Movies
        </Typography>

        <MovieList movies={movies} />
      </Container>
    </div>
  );
}

export default App;
