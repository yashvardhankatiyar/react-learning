import Todoitem from "./Todoitem";

function Appitems({data, deletehandling}) {
  return(
    <div>
      
      {data.map((item, index) => (
        <Todoitem key = {index} index = {index} n = {item.name} d = {item.date} deletehandling = {deletehandling}/>
      ))}
    </div>
  )
}

export default Appitems;