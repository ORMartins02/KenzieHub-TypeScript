import { AuthProvider } from "./context/AuthContext";
import { Router } from "./Router/Router";
import { Toaster } from "react-hot-toast";
import Global from "./styles/global";
import "./App.css";

export const App = () => {
  return (
    <div id="App">
      <AuthProvider>
        <Global />
        <Router />
        <Toaster />
      </AuthProvider>
    </div>
  );
};
