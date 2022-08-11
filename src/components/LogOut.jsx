import React from "react";
import { auth } from "../firebase";

const style = {
  button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
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
