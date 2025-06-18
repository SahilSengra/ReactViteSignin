export function Account({ user }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 w-96 shadow">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <div className="flex items-center gap-4 mb-2">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-16 h-16 rounded-full" />
          <div>
            <h3 className="font-bold">{user || "Guest"}</h3> {/* Show real name or Guest */}
            <p className="text-sm text-gray-500">your-email@example.com</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4">Welcome to your personalized dashboard.</p>
      </div>
    </div>
  );
}
