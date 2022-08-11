import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import React, { useState, useRef, useEffect } from "react";
import Message from "./Message";
import SendMessages from "./SendMessages";

const style = {
  main: `flex flex-col p-[10px] relative`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {messages.length > 0 &&
          messages.map((message) => {
            return <Message key={message.id} message={message} />;
          })}
      </main>
      {/* Enviar tu mensaje */}
      <SendMessages />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
