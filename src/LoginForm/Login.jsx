import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-2">Sign in to your PopX account</h2>
        <p className="text-gray-500 mb-4">Access your personalized dashboard.</p>
        <input className="w-full p-2 border rounded mb-2" placeholder="Enter email address" type="email" />
        <input className="w-full p-2 border rounded mb-4" placeholder="Enter password" type="password" />
        <button className="w-full bg-purple-600 text-white py-2 rounded" onClick={() => navigate("/account")}>Login</button>
      </div>
    </div>
  );
}