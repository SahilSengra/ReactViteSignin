import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md text-center w-96">
        <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 mb-6">Join us and unlock great features.</p>
        <Link to="/create" className="block w-full bg-purple-600 text-white py-2 rounded mb-2">Create Account</Link>
        <Link to="/login" className="block w-full bg-purple-500 text-white py-2 rounded">Already Registered? Login</Link>
      </div>
    </div>
  );
}