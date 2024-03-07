import useUser from "../contexts/UserContext";
import useFetch from "../hooks/useFetch";

function EasyLevel() {
  const { data, loading, error } = useFetch("easy");
  const { userItems, setUserItems, user, setUser } = useUser();

  function handleUserClick(id) {
    const selectedITem = data.find((item) => item.id === id);
    const isPresent = userItems.includes(selectedITem.id);
    if (!isPresent) {
      setUserItems([...userItems, selectedITem.id]);
      setUser({ ...user, score: user.score + 1 });
    } else {
      setUser({ ...user, matchLoose: true });
    }

    if (user.score === data.length) {
      setUser({ ...user, matchWon: true });
    }
  }

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Your Score : {user.score}</h2>
      {data.map((item) => (
        <div
          key={item.id}
          className="max-w-[300px] w-full border-white border-4 overflow-hidden"
          onClick={() => handleUserClick(item.id)}
        >
          <img src={item.url} className="m-auto block max-w-full" />
        </div>
      ))}
      {user.matchWon && <p>You won the match</p>}
      {user.matchLoose && <p>You lose this match</p>}
    </div>
  );
}

export default EasyLevel;
