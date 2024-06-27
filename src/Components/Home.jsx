/* eslint-disable react/prop-types */
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import "./components.css";
import { Form } from "./Form";

const Home = ({ contacts }) => {
  const [open, setopen] = useState(false);
  const isOpenModel = () => {
    setopen(true);
  };

  return (
    <>
      <main className="">
        <section className=" bg-white flex  justify-center  p-2 rounded-xl items-center">
          <img src="/public/logos_firebase.svg" alt="" />
          <p> Firebase Contact App</p>
        </section>
        <section className=" flex mt-4 bac w-full gap-3">
          <div className=" flex border-2 border-white rounded-xl w-full justify-start items-center">
            <CiSearch className="  text-[35px]  text-white" />

            <input
              type="Search Contact"
              className="w-full rounded-md bg-transparent border-none p-3"
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
