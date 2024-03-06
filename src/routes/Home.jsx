import { Link, useSearchParams } from "react-router-dom";
import useUser from "../contexts/UserContext";
import { useState } from "react";

function Home() {
  const levels = ["easy", "medium", "hard"];
  const { addUser } = useUser();

  const [name, setName] = useState("");

  const handleUserName = (e) => {
    e.preventDefault();
    addUser(name);
    setName("");
  };

  return (
    <div>
      <h1>Brain Booster</h1>
      <div>
        <form onSubmit={handleUserName}>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Guest"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <h2>Select Level</h2>
      <nav>
        {levels.map((level) => (
          <div key={level}>
            <Link to={`/${level}`}>{level}</Link>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Home;
