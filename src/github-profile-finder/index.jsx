import { useEffect, useState } from "react";
import User from "./user";
import "./styles.css";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("SoukaynaFR");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData() {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault(); 
      handleSubmit();
    }
  }

  if (loading) {
    return <h1>Loading data ... </h1>;
  }

  return (
    <div className="github-profile-finder">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username ..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>

      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
