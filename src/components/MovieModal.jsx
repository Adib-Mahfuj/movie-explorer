const MovieModal = ({ movie, onClose }) => {
  if (!movie) {
    return null;
  }

  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/800x450?text=No+Image";

  const year = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  const rating = movie.rating?.average || "N/A";

  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No description available.";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={image}
            alt={movie.name}
            className="h-64 w-full object-cover"
          />

          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">
            {movie.name}
          </h2>

          <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-400">
            <span>⭐ Rating: {rating}</span>
            <span>📅 Release: {year}</span>
            <span>
              🎭 {movie.genres?.length ? movie.genres.join(", ") : "N/A"}
            </span>
          </div>

          <div className="mt-6">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Overview
            </h3>

            <p className="leading-7 text-slate-400">
              {summary}
            </p>
          </div>

          {movie.network?.name && (
            <p className="mt-5 text-sm text-slate-400">
              <span className="font-medium text-slate-300">Network:</span>{" "}
              {movie.network.name}
            </p>
          )}

          <button
            onClick={onClose}
            className="mt-6 rounded-lg bg-slate-700 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;