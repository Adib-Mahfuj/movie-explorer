import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://api.tvmaze.com/shows");

      if (!response.ok) {
        throw new Error("Failed to fetch shows");
      }

      const data = await response.json();

      setMovies(data);
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    const value = e.target.value;

    setSearchText(value);

    if (!value.trim()) {
      fetchMovies();
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${value}`
      );

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();

      const searchResults = data.map((item) => item.show);

      setMovies(searchResults);
    } catch (error) {
      setError("Unable to search shows.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
            Explore
          </p>

          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Find your next show
          </h1>

          <p className="mt-3 text-slate-400">
            Search through thousands of shows and discover something new.
          </p>
        </div>

        <div className="mb-10">
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search for a show..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-indigo-500"
          />
        </div>

        {loading && (
          <div className="py-20 text-center">
            <p className="text-slate-400">Loading shows...</p>
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-red-900 bg-red-950/40 p-6 text-center">
            <p className="text-red-400">{error}</p>

            <button
              onClick={fetchMovies}
              className="mt-4 rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white hover:bg-red-500"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-slate-400">
              No shows found.
            </p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onDetails={setSelectedMovie}
              />
            ))}
          </div>
        )}
      </div>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </main>
  );
};

export default Movies;