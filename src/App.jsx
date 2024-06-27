import Home from "./Components/Home";
import Card from "./Components/Card";
import { useState } from "react";

function App() {
  const [contacts, setcontacts] = useState([]);

  return (
    <>
      <Home contacts={contacts} setcontacts={setcontacts} />
      <Card contacts={contacts} setcontacts={setcontacts} />
    </>
  );
}

export default App;
