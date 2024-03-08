import { useState } from "react";
import { UserProvider } from "../contexts/UserContext";

function CustomUserProvider({ children }) {
  const [user, setUser] = useState({
    username: "Guest",
    maxScore: 0,
    minScore: 0,
    score: 0,
    Win: false,
    Fail: false,
  });
  const [userItems, setUserItems] = useState([]);

  return (
    <UserProvider value={{ user, setUser, userItems, setUserItems }}>
      {children}
    </UserProvider>
  );
}
export default CustomUserProvider;
