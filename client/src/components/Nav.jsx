import { DiTechcrunch } from "react-icons/di";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Nav({ isAuthenticated, setIsAuthenticated, setMessage }) {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      if (localStorage.getItem("token")) {
        localStorage.clear("token");
      }
      const response = await axios.get("http://localhost:5000/api/auth/logout");

      setMessage(response.data.message);
      setIsAuthenticated(false);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-white p-3 px-64 h-16 w-full absolute top-0 flex justify-between items-center">
      <div>
        <DiTechcrunch className="text-4xl" />
      </div>
      <div className="h-11 flex justify-end items-center gap-2">
        <Link to={"/"} className="p-1.5">
          home
        </Link>
        <Link to={"/blogs"} className="p-1.5">
          blogs
        </Link>

        {isAuthenticated ? (
          <>
            <Link to={"/me"} className="p-1.5">
              profile
            </Link>
            <button onClick={logout} className="p-1.5 cursor-pointer">
              logout
            </button>
          </>
        ) : (
          <>
            <Link to={"/login"} className="p-1.5">
              login
            </Link>
            <Link to={"/register"} className="p-1.5">
              register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
