import { Link } from "react-router-dom";
import axios from "axios";

function Header({ isAuthenticated, setIsAuthenticated, setMessage }) {
  const logout = async () => {
    try {
      if (localStorage.getItem("token")) {
        localStorage.clear("token");
      }
      const response = await axios.get("http://localhost:5000/api/auth/logout");

      setMessage(response.data.message);
      setIsAuthenticated(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <header className="p-3 px-5 h-16 w-full bg-blue-100 absolute top-0 shadow-lg grid items-center justify-between grid-cols-2">
        <h1 className="text-2xl font-semibold">Ahriri's Blog Plataform</h1>
        <nav className="h-11 flex justify-end items-center gap-5">
          <Link
            to={"/"}
            className="p-1.5 px-7 shadow-md bg-gray-100 rounded-2xl"
          >
            home
          </Link>
          <Link
            to={"/blogs"}
            className="p-1.5 px-7 shadow-md bg-gray-100 rounded-2xl"
          >
            blogs
          </Link>

          {isAuthenticated ? (
            <>
              <Link
                to={"/me"}
                className="p-1.5 px-7 shadow-md bg-gray-100 rounded-2xl"
              >
                profile
              </Link>
              <button
                onClick={logout}
                className="p-1.5 px-7 shadow-md bg-gray-100 rounded-2xl cursor-pointer"
              >
                logout
              </button>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="p-1.5 px-7 shadow-md bg-gray-100 rounded-2xl"
              >
                login
              </Link>
              <Link
                to={"/register"}
                className="p-1.5 px-7 shadow-md bg-gray-100 rounded-2xl"
              >
                register
              </Link>
            </>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;
