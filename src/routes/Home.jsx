import { Link } from "react-router-dom";
import useUser from "../contexts/UserContext";
import { useState } from "react";

function Home() {
  const levels = ["easy", "medium", "hard"];
  const { setUser, user } = useUser();

  const [name, setName] = useState("");

  const handleUserName = (e) => {
    e.preventDefault();
    if (name.length > 0) setUser({ ...user, username: name });
    setName("");
  };

  return (
    <main className="bg-cover bg-center bg-hero-image h-screen flex justify-center items-center bg-gray-400 bg-blend-multiply">
      <div className="p-4 bg-[#aa130f] rounded text-center">
        <div>
          <h1 className="text-5xl font-bold my-4 text-black">Think Twice</h1>
          {user.username === "Guest" ? (
            <>
              <h2 className="text-2xl font-bold my-4 text-white">
                Enter Your Name
              </h2>
              <form onSubmit={handleUserName}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Guest"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full py-2 px-4 text-xl outline-none text-gray-500 rounded-md"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-4 text-xl font-bold bg-black text-white my-2 rounded-md hover:bg-[#870404]"
                >
                  Submit
                </button>
              </form>
            </>
          ) : (
            <h2 className="text-2xl font-bold my-4 ">
              Welcome {user.username}
            </h2>
          )}
        </div>
        <h2 className="text-center text-2xl font-semibold my-4 text-white">
          Select Level
        </h2>

        <section>
          {levels.map((level) => (
            <div
              key={level}
              className="py-2 px-4 border border-white hover:bg-[#870404] hover:text-white my-4 hover:shadow-lg text-black"
            >
              <Link to={`/${level}`} className="font-bold block text-inherit">
                {level}
              </Link>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Home;
