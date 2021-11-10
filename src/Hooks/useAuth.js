import { useContext } from "react";
import { authContext } from "../context/AuthProvider";

const useAuth = () => useContext(authContext);

export default useAuth;