import style from "./FoodInput.module.css";

const FoodInput = ({handleonchange}) => {

  return(<>
  <input type="text" placeholder="Enter your food here" className= {style.textbox} onKeyDown={handleonchange}/>
  </>
  );
}

export default FoodInput;