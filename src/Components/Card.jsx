/* eslint-disable react/prop-types */
import { FaUserCircle } from "react-icons/fa";
import { LuFileEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useState } from "react";
import { Db } from "../config/firebase";
import { Form } from "./Form";
const Card = ({ contacts }) => {
  const [Editingindex, setEditingindex] = useState(null);

  const handleEdit = (index) => {
    setEditingindex(index);
  };
  const deletecontact = async (id) => {
    try {
      const contactRef = doc(Db, "contact", id);
      await deleteDoc(contactRef);
      toast.success("Contact Delete Succesfully");
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   async function fetchdata() {
  //     try {
  //       const Contactref = collection(Db, "contact");
  //       // const contactSnapShot = await getDocs(Contactref);
  //       onSnapshot(Contactref, (snapshot) => {
  //         const contactList = snapshot.docs.map((doc) => {
  //           return {
  //             id: doc.id,
  //             ...doc.data(),
  //           };
  //         });
  //         setcontacts(contactList);
  //         return contactList;
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchdata();
  // }, [contacts, setcontacts]);

  return (
    <>
      {contacts.map((contact, i) => (
        <section
          key={contact.id}
          className=" bg-yellow-400 flex  items-center justify-between  gap-x-3 p-2 rounded-xl mt-4 z-0"
        >
          <FaUserCircle className="  text-[40px]" />
          <div className="  w-full">
            <h1 className=" font-bold  text-[16px]"> {contact.name}</h1>
            <p className=" font-normal text-[14px]">{contact.email}</p>
          </div>
          <div className=" flex">
            <LuFileEdit
              onClick={() => {
                handleEdit(i);
              }}
              className="  text-[40px]  "
            />
            <MdDelete
              className="  text-[40px]"
              onClick={() => {
                deletecontact(contact.id);
                console.log(contact.id);
              }}
            />
          </div>
          {Editingindex === i && (
            <>
              <Form
                setopen={setEditingindex}
                contacts={contacts}
                isAddbtn={false}
                contactindex={i}
              />
            </>
          )}
        </section>
      ))}
      <ToastContainer autoClose={1000} pauseOnFocusLoss={false} />
    </>
  );
};

export default Card;
