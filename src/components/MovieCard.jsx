const MovieCard = ({ movie, onDetails }) => {
  const image =
    movie.image?.medium ||
    "https://via.placeholder.com/300x450?text=No+Image";

  const year = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  const rating = movie.rating?.average || "N/A";

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-slate-700">
      <img
        src={image}
        alt={movie.name}
        className="h-72 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="truncate text-lg font-semibold text-white">
          {movie.name}
        </h2>

        <div className="mt-2 flex items-center justify-between text-sm text-slate-400">
          <span>⭐ {rating}</span>
          <span>📅 {year}</span>
        </div>

        <button
          onClick={() => onDetails(movie)}
          className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;