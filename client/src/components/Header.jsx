import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Header() {
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:5000/api/auth/me/${token}`,
      );

      if (response.data.user) setUser(response.data.user);
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
          <Link
            to={"/me"}
            className="p-1.5 px-7 shadow-md bg-gray-100 rounded-2xl"
          >
            profile
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
