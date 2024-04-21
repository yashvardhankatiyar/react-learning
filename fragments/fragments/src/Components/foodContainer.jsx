import style from "./foodcontainer.module.css"
const FoodContainer = (props) =>
{
  return (
    <>
      <div className= {style.foodcontainer}>
      {props.children}  
      </div>    
    </>
  );

}

export default FoodContainer;