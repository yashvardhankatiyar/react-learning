import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";
import FoodContainer from "./Components/foodContainer";
import FoodInput from "./Components/FoodInput";

function App() {

  //let foodItems = [];
  //let emptylist = foodItems.length === 0 ? <h3> I am still hungry. </h3> : null

 
  let [foodItems, setfoodItems] = useState([
    "Dal",
    "Roti",
  ]);

  const texthandle = (event) => {
    if (event.key === "Enter") {
      let newitem = event.target.value;
      let addeditems = [...foodItems, newitem];
      setfoodItems(addeditems)
    }
  };

  return (
    // <React.Fragment>
    <>
      <FoodContainer>
        <h1>Healthy Foods</h1>
        <FoodInput handleonchange={texthandle} />
        
        <FoodItems items={foodItems} />
      </FoodContainer>
    </>

    // {/* //       <div class="list-group">
    // //   <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    // //     Healthy Foods
    // //   </a>
    // //   <a href="#" class="list-group-item list-group-item-action">Banana</a>
    // //   <a href="#" class="list-group-item list-group-item-action">Apple</a>
    // //   <a href="#" class="list-group-item list-group-item-action">Soya Bean</a>
    // //   <a class="list-group-item list-group-item-action disabled" aria-disabled="true">Chocolates</a>
    // // </div> */}
    //   //  </React.Fragment>
  );
}

export default App;

//this is how you use map
// {foodItems.map((item) => (
//   <li className="list-group-item">{item}</li>
// ))}
