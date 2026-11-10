import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        console.log("Came here");
        const response = await axios.get(
          `http://localhost:5000/api/auth/me/${token}`,
        );
        if (response.data.user) {
          setIsAuthenticated(true);
          setUser(response.data.user);
        }
      } else {
        setIsAuthenticated(false);
        setUser({});
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [isAuthenticated]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
      setError("");
      clearTimeout(timer);
    }, 5000);
  }, [message, error]);

  return (
    <>
      <BrowserRouter>
        <Header
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          setMessage={setMessage}
        />
        <Message message={message} />
        <Error error={error} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={<Register setMessage={setMessage} setError={setError} />}
          />
          <Route
            path="/login"
            element={
              <Login
                setIsAuthenticated={setIsAuthenticated}
                setMessage={setMessage}
                setError={setError}
              />
            }
          />
          <Route
            path="/me"
            element={<Profile user={user} setError={setError} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
