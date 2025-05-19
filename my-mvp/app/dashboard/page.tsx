export default function Dashboard() {
    return (
      <main className="min-h-screen bg-white p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg shadow">📊 Chart Placeholder</div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">📁 Recent Activity</div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">🛠️ System Status</div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">👥 Users Summary</div>
        </div>
      </main>
    );
  }
  