import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Container from "../components/Container";

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
      <Container>
        <h1>Hellooo, {user.username}</h1>
        <div className="w-[150px] rounded-full p-2 shadow">
          <img
            src={user.avatar.url}
            width={150}
            className="rounded-full object-cover"
          />
        </div>
      </Container>
    </>
  );
}

export default Profile;
