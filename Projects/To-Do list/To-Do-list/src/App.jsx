import Appheading from "./Components/Appheading";
import Apptodo from "./Components/Apptodo";
import Appitems from "./Components/Appitems";
import "./App.css";
import { useState } from "react";

function App() {

  const [tododata, settododata] = useState([]);

  const AddHandling = (itemName, itemDate) => {
    settododata([
      ...tododata,
      {
        name: itemName,
        date: itemDate
      }
    ]);
  }
  
  const handleDeleteButton = (index) => {
    const newitems = [...tododata];
    newitems.splice(index, 1);
    settododata(newitems);
  }

  return (
    <div>
    <center className="todo-container">
      
      <Apptodo/>
      <Appheading ButtonHandling = {AddHandling}/>
      <div className="itemcontainer">
      <Appitems data = {tododata} deletehandling = {handleDeleteButton}></Appitems>
      </div>

    </center>
    </div>
  );
}

export default App;
