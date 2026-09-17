import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold text-white">
          🎬 CineScope
        </Link>

        <div className="flex items-center gap-5">
          <Link
            to="/"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Movies
          </Link>

          <Link
            to="/movies"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
          >
            Explore
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;