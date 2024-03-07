import { Link } from "react-router-dom";
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

      {/* User name input form */}
      <div>
        <h2>Enter Your Name</h2>
        <form onSubmit={handleUserName}>
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
      {/*Level Selection */}
      <h2>Select Level</h2>

      <section>
        {levels.map((level) => (
          <div key={level}>
            <Link to={`/${level}`}>{level}</Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
