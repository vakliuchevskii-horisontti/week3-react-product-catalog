import { useState } from "react";
import { useMovieStore } from "../store/useMovieStore";

export function MovieList() {
  const movies = useMovieStore((state) => state.movies);
  const toggleWatched = useMovieStore((state) => state.toggleWatched);

  const [filterType, setFilterType] = useState<"all" | "watched" | "unwatched">(
    "all",
  );

  let filteredMovies = movies;

  if (filterType === "watched") {
    filteredMovies = movies.filter((movie) => movie.watched);
  }

  if (filterType === "unwatched") {
    filteredMovies = movies.filter((movie) => !movie.watched);
  }

  return (
    <div>
      <h1>Movie library</h1>

      <div>
        <button onClick={() => setFilterType("all")}>All movies</button>
        <button onClick={() => setFilterType("watched")}>Watched movies</button>
        <button onClick={() => setFilterType("unwatched")}>
          Unwatched movies
        </button>
      </div>

      <div>
        {filteredMovies.map((movie) => (
          <div key={movie.id}>
            <span>{movie.title} </span>

            <span>{movie.watched ? "✅ Watched" : "⏳ Unwatched"}</span>

            <button onClick={() => toggleWatched(movie.id)}>
              Change state
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
