import React from "react";
import { auth } from "../firebase";

const style = {
  button: `bg-red-400 px-4 py-2 hover:bg-red-300 rounded-xl`,
};

const LogOut = () => {
  const singOut = () => {
    singOut(auth);
}
  return (
    <button onClick={() => auth.signOut()} className={style.button}>
      Irme
    </button>
  );
};

export default LogOut;
