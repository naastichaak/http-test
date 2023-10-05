import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import StarRating from './StarRating';
import MovieOverview from './MovieOverview';

function MovieListItem({ movie }) {
  return (
    <Card>
      <CardMedia
        component="img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_url}`}
        title={movie.title}
      />
      <CardContent>
        <StarRating rating={movie.vote_average} />
        <Typography gutterBottom variant="h6" component="h3">
          Movie Title
        </Typography>
        <MovieOverview>Movie Overview</MovieOverview>
      </CardContent>
    </Card>
  );
}

export default MovieListItem;
