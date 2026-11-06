import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login({ setMessage, setError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        user,
      );

      // Saves the jwt token in localStorage
      localStorage.setItem("token", response.data.token);

      setMessage(response.data.message);
      navigate("/");
    } catch (err) {
      console.error(err);
      if (err.status === 401) setError("Invalid e-mail or password.");
      if (err.status === 500)
        setError("Error on server side, please try again.");
    }
  };

  return (
    <>
      <main className="w-dvw h-dvh flex flex-col justify-center bg-blue-200">
        <section className="m-auto w-96 bg-cyan-50 p-11 rounded-2xl shadow-md backdrop-blur-md">
          <h1 className="text-center text-3xl font-bold mb-3.5">Login</h1>
          <form>
            <div className="flex flex-col">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your e-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="p-2.5 mb-3.5 rounded-sm shadow-sm border border-blue-200"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                required
                placeholder="your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="p-2.5 mb-3.5 rounded-sm shadow-sm border border-blue-200"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="p-2.5 text-center w-full rounded-sm shadow-md bg-blue-300 hover:bg-blue-400 text-white cursor-pointer"
            >
              Login
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
