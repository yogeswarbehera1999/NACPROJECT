import { useEffect, useState, createContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { auth, db } from "./firebase/firebase"; // your firebase config
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import LoginPage from "./pages/LoginPage";
import Citizen from "./pages/Citizen";
import Supervisor from "./pages/Supervisor";
import Admin from "./pages/Admin";

import { ThemeProvider } from "./context/ThemeContext";
import { RoleContext } from "./context/RoleContext";

function RequireAuth({ children, role, currentRole }) {
  if (!currentRole) {
    return <Navigate to="/login" replace />;
  }
  if (role && role !== currentRole) {
    return <Navigate to={`/${currentRole}`} replace />;
  }
  return children;
}

export default function App() {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setFirebaseUser(user);
        // Fetch user role from Firestore
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setRole(data.role || null);
          } else {
            setRole(null);
            console.warn("User doc not found in Firestore");
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
          setRole(null);
        }
      } else {
        setFirebaseUser(null);
        setRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <RoleContext.Provider value={{ role, setRole, firebaseUser }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={firebaseUser ? <Navigate to={`/${role}`} /> : <LoginPage />}
            />

            {/* Citizen Dashboard routes */}
            <Route
              path="/citizen/*"
              element={
                <RequireAuth role="citizen" currentRole={role}>
                  <Citizen />
                </RequireAuth>
              }
            />

            {/* Supervisor Dashboard routes */}
            <Route
              path="/supervisor/*"
              element={
                <RequireAuth role="supervisor" currentRole={role}>
                  <Supervisor />
                </RequireAuth>
              }
            />

            {/* Admin Dashboard routes */}
            <Route
              path="/admin/*"
              element={
                <RequireAuth role="admin" currentRole={role}>
                  <Admin />
                </RequireAuth>
              }
            />

            {/* Default fallback */}
            <Route path="*" element={<Navigate to={firebaseUser ? `/${role}` : "/login"} />} />
          </Routes>
        </BrowserRouter>
      </RoleContext.Provider>
    </ThemeProvider>
  );
}