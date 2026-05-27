import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(undefined);

// Helper for safe localStorage access in sandbox iframes
const safeGetItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.warn("localStorage is blocked or insecure in this sandbox browser environment:", e);
    return null;
  }
};

const safeSetItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn("localStorage is blocked or insecure in this sandbox browser environment:", e);
  }
};

const safeRemoveItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.warn("localStorage is blocked or insecure in this sandbox browser environment:", e);
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = safeGetItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Failed to parse saved user JSON:", e);
        safeRemoveItem("user");
      }
    }
  }, []);

  const login = (token, userData) => {
    safeSetItem("token", token);
    safeSetItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    safeRemoveItem("token");
    safeRemoveItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

