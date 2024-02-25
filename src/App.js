import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import Welcome from "./pages/Welcome";
import SignOut from "./pages/SignOut";
import CompleteProfile from "./pages/CompleteProfile";

function App() {
  
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/signin" Component={SignIn} />
        <Route path="/welcome" Component={Welcome} />
        <Route path="/signout" Component={SignOut} />
        <Route path="/complete-profile" Component={CompleteProfile} />
        <Route path="*" Component={NotFound}></Route>
      </Routes>
    </AuthProvider>
  );
}



export default App;
