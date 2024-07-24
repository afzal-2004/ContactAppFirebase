/* eslint-disable react/prop-types */
import { FiPlus } from "react-icons/fi";
import { useState, useEffect } from "react";
import "./components.css";
import { collection, onSnapshot } from "firebase/firestore";
import { Db } from "../config/firebase";
import FirebaseImage from "/logos_firebase.svg";

import { Form } from "./Form";

const Home = ({ contacts, setcontacts }) => {
  const [open, setopen] = useState(false);

  const isOpenModel = () => {
    setopen(true);
  };

  useEffect(() => {
    async function fetchdata() {
      try {
        const Contactref = collection(Db, "contact");

        onSnapshot(Contactref, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setcontacts(contactList);
          return contactList;
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, [contacts, setcontacts]);

  return (
    <>
      <main className="">
        <section className=" bg-white flex  justify-center  p-2 rounded-xl items-center gap-5">
          <img src={FirebaseImage} alt="" />
          <p> Firebase Contact App</p>
        </section>
        <section className=" flex mt-4  w-full gap-3">
          <FiPlus
            className="  text-[40px]  text-black bg-white   rounded-full text-center"
            onClick={isOpenModel}
          />
        </section>
      </main>
      {open && <Form setopen={setopen} isAddbtn={true} contacts={contacts} />}
    </>
  );
};

export default Home;
