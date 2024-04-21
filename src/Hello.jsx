
function Hello() {

  let myname = 'yash';
  let number = 89;

  let fullname = () => {
    return 'Yashvardhan katiyar';
  }

  return <div>
    <h1>
      Message number : {number} this is hello component. I am a master {myname} and my full name is {fullname()}.
    </h1>
  </div>
}

export default Hello;

//jsx allows dynamic component using {} brackets.

//reusabe components : 1. consistency, 2. efficiency, 3. maintainability, 4. modularity
