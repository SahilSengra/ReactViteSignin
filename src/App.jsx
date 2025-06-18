import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Welcome } from "./LoginForm/Welcome";
import { CreateAccount } from "./LoginForm/CreateAccount";
import { Login } from "./LoginForm/Login";
import { Account } from "./LoginForm/Account";

export default function App() {
  const [user, setUser] = useState(null); // Store user info

  return (
    <BrowserRouter basename='/ReactViteSignin/' >
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/create" element={<CreateAccount setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/account" element={<Account user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}
