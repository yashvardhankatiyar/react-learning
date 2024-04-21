import style from "./Item.module.css";

const Item = (props) => {
  const { HandleClickButton } = props;

  return (
    <>
      <li key={props.fooditem} className={`${style["kg-list"]} list-group-item`}>
        {props.fooditem}
        <button type="button" className={`${style["button"]} btn btn-info`} onClick={HandleClickButton}>buy</button>
      </li>
    </>
  );
};

export default Item;
