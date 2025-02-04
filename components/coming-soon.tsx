export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-screen dark:text-white text-primary">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-400">
          We’re working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/"
            className="px-6 py-2 rounded-md border border-gray-600 hover:border-gray-400 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
