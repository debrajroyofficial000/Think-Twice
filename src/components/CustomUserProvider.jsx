import { useState } from "react";
import { UserProvider } from "../contexts/UserContext";

function CustomUserProvider({ children }) {
  const [user, setUser] = useState({
    username: "Guest",
    maxScore: 0,
    minScore: 0,
    score: 0,
    matchWon: false,
    matchLoose: false,
  });
  const [userItems, setUserItems] = useState([]);

  // function addUserItems(item) {
  //   setUserItems([...userItems, item]);
  // }

  return (
    <UserProvider value={{ user, setUser, userItems, setUserItems }}>
      {children}
    </UserProvider>
  );
}
export default CustomUserProvider;
