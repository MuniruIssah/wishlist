import React, { useState } from "react";
import { useAtom } from "jotai";
import { showAuthModalAtom } from "../../atoms";
import LoginForm from "../Forms/LoginForm";
import { motion } from "framer-motion";
import SignupForm from "../Forms/SignupForm";

const AuthModal = () => {
  const [visible, setVisible] = useAtom(showAuthModalAtom);
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin=()=>setIsLogin(prevState=>!prevState)
  const toggleModal = () => setVisible((prevState) => !prevState);
  return (
    <div
      className={`${
        visible ? "block" : "hidden"
      } absolute top-0 left-0 w-screen h-screen flex items-center justify-center z-30`}
    >
      <div
        className="absolute bg-black/20 w-screen h-screen cursor-pointer"
        onClick={toggleModal}
      ></div>
      <motion.div
        initial={{ scale: 0 }}
        transition={{ ease: "easeInOut", duration: 0.25 }}
        animate={{ scale: 1 }}
        className="relative bg-white w-[90%] sm:w-[30rem] rounded rounded-xl shadow-lg p-10 flex flex-col items-center justify-center"
      >
        {isLogin ? <LoginForm /> : <SignupForm />}
        <span onClick={} className="text-wishlistSecondary/80 hover:text-wishlistSecondary underline text-center block mt-4 cursor-pointer ">
          {isLogin ? "Do not have an Account?" : "Already have an account?"}
        </span>
      </motion.div>
    </div>
  );
};

export default AuthModal;
