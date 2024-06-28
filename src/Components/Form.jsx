/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Db } from "../config/firebase";
import "./components.css";
import { toast } from "react-toastify";
export const Form = ({ setopen, isAddbtn, contacts, contactindex }) => {
  const [name, setname] = useState(isAddbtn ? "" : contacts[contactindex].name);
  const [email, setemail] = useState(
    isAddbtn ? "" : contacts[contactindex].email
  );

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
      toast.success(" Contact Added SuccesFully");
    } catch (error) {
      console.log(error);
    }
  };
  const Updatecontact = async (conatct, id) => {
    try {
      const ContactRef = doc(Db, "contact", id);
      await updateDoc(ContactRef, conatct);
      toast.success(" Contact Updated SuccesFully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="   h-[70vh]    w-[90vw]   flex  items-center  justify-center    m-0 z-50 absolute top-[150px] rounded-xl">
        <form
          action=""
          onSubmit={() => {
            console.log(name);
            console.log(email);
          }}
          className="flex flex-col p-3  bg-white z-50 gap-y-3 rounded-lg w-full"
        >
          <div className=" flex    justify-end">
            <IoClose
              className="  text-[40px] cursor-pointer"
              onClick={() => setopen(null)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Name" className="text-[16px] font-bold">
              Name
            </label>
            <input
              type="text"
              value={name}
              className=" border-2 border-black p-3  w-full  "
              onChange={onNamesubmit}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              value={email}
              className=" border-2 border-black p-3  w-full"
              onChange={OnemailSumbit}
            />
          </div>
          <div
            className="  mt-3"
            onClick={() => {
              console.log(name);
              console.log(email);
              setopen(null);

              isAddbtn
                ? addcontact({
                    name: name,
                    email: email,
                  })
                : Updatecontact(
                    {
                      name: name,
                      email: email,
                    },

                    contacts[contactindex].id
                  );
            }}
          >
            <div className=" bg-yellow-400   flex   float-right  p-3 rounded-lg  cursor-pointer">
              {isAddbtn ? "Add" : "Update"} Contact
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
