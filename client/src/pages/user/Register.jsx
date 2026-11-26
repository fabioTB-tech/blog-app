import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register({ setMessage, setError }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username,
      email,
      password,
    };

    try {
      /*
       * Here we use "axios" to send the data we get from the form, and store the response in a constant.
       * in response we have the data that server returned to the client, in this case they returned a message,
       */
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        user,
      );
      if (response.data.message) {
        // Showing the message to the client.
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error(error.message);
      if (error.status === 400)
        setMessage("User already exists, please make the Login.");
      if (error.status === 500) setError(error.message);
    }
  };

  return (
    <>
      <main className="w-full h-full flex flex-col justify-center">
        <section className="m-auto w-96 bg-white p-11 border-2 border-container-border rounded-2xl shadow-md backdrop-blur-md">
          <h1 className="text-center text-3xl font-bold mb-3.5">Register</h1>
          <form>
            <div className="flex flex-col">
              <label htmlFor="username">Nome de usuário</label>
              <input
                type="text"
                name="username"
                required
                placeholder="seu nome ou apelido"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="p-2.5 mb-3.5 rounded-sm border-2 border-transparent border-b-gray-200 bg-white"
              />
            </div>
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
              Cadastrar
            </button>
          </form>
          <p className="text-sm mt-1 text-gray-500">
            Já tem uma conta? <Link to={"/login"} className="text-blue-600">login</Link>
          </p>
        </section>
      </main>
    </>
  );
}

export default Register;
