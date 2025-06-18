import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CreateAccount({ setUser }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleCreateAccount = () => {
    if (name.trim() === "") return; // Ensure name is entered
    setUser(name); // Save user name
    navigate("/"); // Redirect to Welcome Page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Create your PopX account</h2>
        <form className="space-y-4">
          <input 
            className="w-full p-2 border rounded" 
            placeholder="Full Name*" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input className="w-full p-2 border rounded" placeholder="Phone Number*" type="tel" />
          <input className="w-full p-2 border rounded" placeholder="Email Address*" type="email" />
          <input className="w-full p-2 border rounded" placeholder="Password*" type="password" />
          <input className="w-full p-2 border rounded" placeholder="Company Name" />
          <div className="flex gap-4 items-center">
            <p className="text-sm">Are you an Agency?*</p>
            <label><input type="radio" name="agency" className="mr-1" defaultChecked /> Yes</label>
            <label><input type="radio" name="agency" className="mr-1" /> No</label>
          </div>
          <button 
            type="button" 
            className="w-full bg-purple-600 text-white py-2 rounded"
            onClick={handleCreateAccount} // Save user and redirect
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
