import { createContext, useContext } from "react";
export const userContext = createContext({
  user: {
    username: "Guest",
    score: 0,
    Win: false,
    Fail: false,
  },
  setUser: () => {},
  userItems: [],
  setUserItems: () => {},
});

export const UserProvider = userContext.Provider;

function useUser() {
  return useContext(userContext);
}

export default useUser;
