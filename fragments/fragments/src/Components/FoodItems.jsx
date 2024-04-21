import Item from "./Items";
import style from "./FoodItems.module.css"

const FoodItems = (props) => {
  return (
    <ul className={`${style["food"]} list-group`}>
      {props.items.map((item) => (
        <Item fooditem={item} key = {item} HandleClickButton = {() => console.log(`${item} is brought`)}/>
      ))}
    </ul>
  );
};

export default FoodItems;
