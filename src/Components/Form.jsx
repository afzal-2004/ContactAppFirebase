/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { Db } from "../config/firebase";
import "./components.css";
export const Form = ({ setopen, isAddbtn, contacts }) => {
  const [name, setname] = useState(isAddbtn ? "" : contacts.name);
  const [email, setemail] = useState(isAddbtn ? "" : contacts.email);

  const onNamesubmit = (e) => {
    setname(e.target.value);
  };

  const OnemailSumbit = (e) => {
    setemail(e.target.value);
  };
  const addcontact = async (conatct) => {
    try {
      const ContactRef = collection(Db, "contact");
      await addDoc(ContactRef, conatct);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="    h-[50vh]  w-[100vw] absolute  flex  items-center  justify-center  backgroundClass ">
        <form
          action=""
          onSubmit={() => {
            console.log(name);
            console.log(email);
          }}
          className="flex flex-col p-3  bg-white z-50 gap-y-3 rounded-lg"
        >
          <div className=" flex    justify-end">
            <IoClose className="  text-[40px]" onClick={() => setopen(false)} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Name" className="text-[16px] font-bold">
              Name
            </label>
            <input
              type="text"
              className=" border-2 border-black p-3  w-full "
              onChange={onNamesubmit}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              className=" border-2 border-black p-3  w-full"
              onChange={OnemailSumbit}
            />
          </div>
          <div
            className="  mt-3"
            onClick={() => {
              console.log(name);
              console.log(email);
              setopen(false);
              addcontact({
                name: name,
                email: email,
              });
            }}
          >
            <div className=" bg-yellow-400   flex   float-right  p-3 rounded-lg ">
              {isAddbtn ? "Add" : "Update"} Contact
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
