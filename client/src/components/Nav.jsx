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
    <nav className="bg-white border-red-200 border-2 rounded-lg p-4 h-14 m-auto mt-5 w-2/4 flex justify-between items-center">
      <div onClick={() => navigate("/")}>
        <p className="font-fredoka font-bold cursor-alias">BAH</p>
      </div>
      <div className="h-11 flex justify-end items-center gap-2">
        <Link to={"/"} className="p-1.5">
          home
        </Link>
        <Link to={"/blogs"} className="p-1.5">
          posts
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
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
