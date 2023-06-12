import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Login from "./pages/login/Login";
import Cart from "./pages/Cart/Cart";
import { login } from "./pages/database/users";
import React, { useState } from "react";


export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const success = login(email, password);
    if (success) {
      setIsLoggedIn(true);
      setErrorMessage("");
      alert('Đăng nhập thành công');
    } else {
      setIsLoggedIn(false);
      setErrorMessage("Email hoặc mật khẩu không đúng");
    }
    setEmail("");
    setPassword("");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
    <NavBar email={email} setEmail={setEmail} isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/detail" element={<Detail/>} />
      <Route path="/login" element={<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} errorMessage={errorMessage}/>} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
