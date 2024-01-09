import React, { useReducer, createContext, useContext } from "react";

// Initial state for the auth reducer
const initialState = {
  isAuthenticated: false,
  user: null,
};

// Create a context for the auth state
const UserContext = createContext<{
  dispatch: ({ type, payload }: { type: string; payload?: any }) => void;
  state: any;
}>({
  dispatch: ({ type, payload }) => null,
  state: initialState,
});

// Auth reducer function
const authReducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

// Auth provider component
export const UserProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for accessing the auth context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};
