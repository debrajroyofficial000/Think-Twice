import { useEffect } from "react";
import MatchStatus from "../components/MatchStatus";
import useUser from "../contexts/UserContext";
import useFetch from "../hooks/useFetch";

function Game({ url }) {
  const { data, loading, error } = useFetch(url);
  const { userItems, setUserItems, user, setUser } = useUser();
  useEffect(() => {
    if (user.score === data.length && user.score > 0) {
      setUser({ ...user, Win: true });
    }
  }, [user.score]);

  function handleUserClick(id) {
    const selectedITem = data.find((item) => item.id === id);
    const isPresent = userItems.includes(selectedITem.id);
    if (!isPresent) {
      setUser({
        ...user,
        score: user.score + 1,
      });
      setUserItems([...userItems, selectedITem.id]);
    } else {
      setUser({ ...user, Fail: true });
    }
  }

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  if (user.Fail === true) return <MatchStatus status="lose" />;
  if (user.Win === true) return <MatchStatus status="win" />;

  return (
    <div className="bg-[#870404] min-h-screen">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">
          {user.username}'s Score : {user.score}
        </h2>
        <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {data.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden"
              onClick={() => handleUserClick(item.id)}
            >
              <img
                src={item.url}
                className="m-auto block w-full hover:shadow-md h-full"
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Game;
