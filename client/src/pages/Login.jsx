import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

function Login({ setIsAuthenticated, setMessage, setError }) {
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
      setIsAuthenticated(true);

      setMessage(response.data.message);
      navigate("/");
    } catch (err) {
      console.error(err);
      if (err.status === 401) setError("Invalid e-mail or password.");
      if (err.status === 400) setError("Please type your e-mail and password.");
      if (err.status === 500)
        setError("Error on server side, please try again.");
    }
  };

  return (
    <>
      <main className="w-full h-full flex flex-col justify-center">
        <section className="m-auto w-96 bg-white p-11 border-2 border-container-border rounded-2xl shadow-md backdrop-blur-md">
          <h1 className="text-center text-3xl font-bold mb-3.5">Login</h1>
          <form>
            <div className="flex flex-col">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                required
                placeholder="seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="p-2.5 mb-3.5 rounded-sm border-2 border-transparent border-b-gray-200 bg-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                required
                placeholder="sua senha"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="p-2.5 mb-3.5 rounded-sm border-2 border-transparent border-b-gray-200 bg-white"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="p-2.5 text-center w-full border-2 border-button-border rounded-md shadow-md bg-button hover:bg-button-hover text-white cursor-pointer"
            >
              Entrar
            </button>
          </form>
          <p className="text-sm mt-1 text-gray-500">
            Não tem uma conta? <Link to={"/register"} className="text-blue-600">cadastrar</Link>
          </p>
        </section>
      </main>
    </>
  );
}

export default Login;
