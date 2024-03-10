import { useNavigate } from "react-router-dom";
import useUser from "../contexts/UserContext";

function MatchStatus({ status }) {
  const navigate = useNavigate();
  const { user, setUser, setUserItems } = useUser();

  function handleRestart() {
    setUser({
      ...user,
      score: 0,
      Win: false,
      Fail: false,
    });
    setUserItems([]);
    navigate("/", { replace: true });
  }

  return (
    <div className="h-screen flex justify-center items-center bg-[#870404]">
      <div className="p-4 border-white border rounded text-center">
        <h2 className="text-3xl font-bold my-4">You {status}</h2>
        <button
          onClick={handleRestart}
          className="py-2 px-4 text-xl font-bold bg-[#342c2c] text-white rounded"
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}

export default MatchStatus;
