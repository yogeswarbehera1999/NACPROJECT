import { useContext } from "react";
import { RoleContext } from "../context/RoleContext";
import { logout } from "../firebase/authUtils";

export default function Navbar() {
  const { role } = useContext(RoleContext);
  return (
    <nav className="px-4 py-2 bg-blue-600 text-white flex justify-between items-center">
      <div className="text-xl font-semibold">Logo</div>
      <div>{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</div>
      <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
    </nav>
  );
}
