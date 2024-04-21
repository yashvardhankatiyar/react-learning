import { useState } from "react";

function Appheading({ ButtonHandling }) {
  const [namechange, setnamechange] = useState("");
  const [datechange, setdatechange] = useState("");

  const onnamechange = (event) => {
    setnamechange(event.target.value);
  }

  const ondatechange = (event) => {
    setdatechange(event.target.value);
  }

  const clickhandle = () => {
    ButtonHandling(namechange, datechange);
    setnamechange("");
    setdatechange("");
  }

  return (
    <div>
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo Here "
            onChange={onnamechange}
            value={namechange}
            className={namechange ? "black-input" : ""}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            id=""
            onChange={ondatechange}
            value={datechange}
            className={datechange ? "black-input" : ""}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-outline-primary del add"
            onClick={clickhandle}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appheading;
