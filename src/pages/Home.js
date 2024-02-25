
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const navigate = useNavigate();

  const {currentUser} = useAuth();

  console.log(currentUser)

  if (!currentUser) {
    return <Navigate to={"/welcome"}/>
  } 

  if (!currentUser.displayName) {
    return <Navigate to={"/complete-profile"}/>
  }
 
  return (
    <div>
      {currentUser.displayName}
    </div>
    );
  
}
