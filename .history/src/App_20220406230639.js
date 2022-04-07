import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import { Toaster } from "react-hot-toast";
import AuthModal from "./components/Modals/AuthModal";

function App() {
  return (
    <div className="w-screen min-h-[100vh] font-[Ubuntu]">
      <div className="py-10 w-full 2xl:w-4/6 m-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="templates" element={<Templates />} />
          <Route path="wishlists" element={<>wishlists</>} />
          <Route path="about" element={<>about</>} />
        </Routes>
        <AuthModal />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
