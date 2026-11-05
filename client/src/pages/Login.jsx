import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <main className="w-dvw h-dvh flex flex-col justify-center bg-blue-950">
        <section className="m-auto w-96 bg-cyan-50 p-11 rounded-2xl shadow-md backdrop-blur-md">
          <h1 className="text-center text-3xl font-bold mb-3.5">Register</h1>
          <form>
            <div className="flex flex-col">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                required
                placeholder="your nickname"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="p-2.5 mb-3.5 rounded-sm shadow-sm border border-blue-200"
              />
            </div>
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
              className="p-2.5 text-center w-full rounded-sm shadow-md bg-blue-300 hover:bg-blue-400 text-white cursor-pointer"
            >
              Register
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Register;
