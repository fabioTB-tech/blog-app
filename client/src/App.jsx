import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Blogs from "./pages/blog/Blogs";
import NewBlog from "./pages/blog/NewBlog";

// Components
import Header from "./components/Header";
import Container from "./components/Container";
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
        const { data } = await axios.get(
          `http://localhost:5000/api/auth/me/${token}`,
        );
        if (data.user) {
          setIsAuthenticated(true);
          setUser(data.user);
          if (!data.user.avatar) {
            setUser({
              ...data.user,
              avatar: {
                url: "/src/public/default-pfp.jpg",
              },
            });
          }
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
    }, 3000);
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
          <Route
            path="/blogs"
            element={<Blogs user={user} setError={setError} />}
          />
          <Route
            path="/newblog"
            element={<NewBlog user={user} setError={setError} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
