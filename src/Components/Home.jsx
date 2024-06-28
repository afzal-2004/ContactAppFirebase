/* eslint-disable react/prop-types */
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { useState, useEffect } from "react";
import "./components.css";
import { collection, onSnapshot } from "firebase/firestore";
import { Db } from "../config/firebase";

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

  // eslint-disable-next-line no-unused-vars

  return (
    <>
      <main className="">
        <section className=" bg-white flex  justify-center  p-2 rounded-xl items-center">
          <img src="/public/logos_firebase.svg" alt="" />
          <p> Firebase Contact App</p>
        </section>
        <section className=" flex mt-4  w-full gap-3">
          <div className=" flex border-2 border-white  w-full justify-start items-center rounded-xl">
            <CiSearch className="  text-[35px]  text-white absolute" />

            <input
              // onChange={() => }
              type="Search Contact"
              className="w-full bg-transparent border-none p-3"
            />
          </div>

          <FiPlus
            className="  text-[40px]  text-black bg-white   rounded-full"
            onClick={isOpenModel}
          />
        </section>
      </main>
      {open && <Form setopen={setopen} isAddbtn={true} contacts={contacts} />}
    </>
  );
};

export default Home;
