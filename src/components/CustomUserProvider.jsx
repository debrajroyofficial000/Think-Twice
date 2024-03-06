import { useState } from "react";
import { UserProvider } from "../contexts/UserContext";

function CustomUserProvider({ children }) {
  const [user, setUser] = useState({
    username: "Guest",
    maxScore: 0,
    minScore: 0,
    score: 0,
  });
  const [allItems, setAllItems] = useState([]);
  const [userItems, setUserItems] = useState([]);

  function addUser(name) {
    setUser({ ...user, username: name });
  }

  return (
    <UserProvider value={{ user, addUser, allItems, userItems }}>
      {children}
    </UserProvider>
  );
}
export default CustomUserProvider;
