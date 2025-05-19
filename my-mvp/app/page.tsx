export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My MVP 🚀</h1>
        <p className="text-lg text-gray-600 mb-8">
          A minimal viable product for exploring the full DevOps lifecycle.
        </p>
        <a
          href="/dashboard"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Go to Dashboard
        </a>
      </div>
    </main>
  );
}
