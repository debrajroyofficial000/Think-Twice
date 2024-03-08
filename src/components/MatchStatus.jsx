import { Link, useNavigate } from "react-router-dom";
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
    <div>
      <h2>You {status}</h2>
      <Link onClick={handleRestart}>Restart Game</Link>
    </div>
  );
}

export default MatchStatus;
