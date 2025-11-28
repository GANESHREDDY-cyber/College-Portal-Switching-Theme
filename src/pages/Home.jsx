import Header from "../components/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors">
      <Header />
      <main className="flex flex-col items-center justify-center gap-8 mt-20">
        <div className="max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center transition-colors">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Welcome to KL University Student Portal
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Access your courses, results, and other student services here.
          </p>
          <a
            href="https://www.kluniversity.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Visit KL University Website
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
