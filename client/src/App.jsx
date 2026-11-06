import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

// Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";

// Components
import Header from "./components/Header";
import Message from "./components/Message";
import Error from "./components/Error";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
      setError("");
      clearTimeout(timer);
    }, 5000);
  }, [message, error]);

  return (
    <>
      <Message message={message} />
      <Error error={error} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={<Register setMessage={setMessage} setError={setError} />}
          />
          <Route
            path="/login"
            element={<Login setMessage={setMessage} setError={setError} />}
          />
          <Route path="/me" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
