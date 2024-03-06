import { createContext, useContext } from "react";
export const userContext = createContext({
  user: {
    username: "Guest",
    maxScore: 0,
    minScore: 0,
    score: 0,
  },
  addUser: () => {},
  allItems: [],
  userItems: [],
});

export const UserProvider = userContext.Provider;

function useUser() {
  return useContext(userContext);
}

export default useUser;
