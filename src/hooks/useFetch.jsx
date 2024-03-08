import { useEffect, useState } from "react";
import useUser from "../contexts/UserContext";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  useEffect(() => {
    fetch(`http://localhost:3000/${url}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server problems");
        }
        return response.json();
      })
      .then((apiData) => {
        const shuffledState = [...apiData];

        for (let i = shuffledState.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledState[i], shuffledState[j]] = [
            shuffledState[j],
            shuffledState[i],
          ];
        }
        setData(shuffledState);
      })
      .catch((error) => setError("Something is Wrong ..."))
      .finally(() => setLoading(false));
  }, [user.score]);
  return { data, error, loading, setData };
}

export default useFetch;
