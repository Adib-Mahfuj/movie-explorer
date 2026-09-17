import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-950" />

        <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-4 py-20">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Welcome to CineScope
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Discover your next
              <span className="text-indigo-400"> favorite show.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Explore popular shows, search for something specific, and
              discover detailed information about the shows you love.
            </p>

            <div className="mt-8">
              <Link
                to="/movies"
                className="inline-flex rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500"
              >
                Explore Shows
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-indigo-400">
              SIMPLE. FAST. EASY.
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Everything you need to discover shows
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Browse a collection of shows or search for a title and get
              useful information with just a few clicks.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;