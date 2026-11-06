import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
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

  useEffect(() => {
    fetchUser();
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
