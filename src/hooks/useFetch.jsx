import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3000/${url}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server problems");
        }
        return response.json();
      })
      .then((apiData) => setData(apiData))
      .catch((error) => setError("Something is Wrong ..."))
      .finally(() => setLoading(false));
  }, []);
  return { data, error, loading, setData };
}

export default useFetch;
