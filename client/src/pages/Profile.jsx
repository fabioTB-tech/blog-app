import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Profile({ user, setError }) {
  const navigate = useNavigate();

  const auth = () => {
    if (!localStorage.getItem("token")) {
      setError("Login to access your profile page.");
      navigate("/");
    }
  };

  useEffect(() => {
    auth();
  }, []);

  return (
    <>
      <main className="mt-50">
        <h1>Hellooo, {user.username}</h1>
      </main>
    </>
  );
}

export default Profile;
