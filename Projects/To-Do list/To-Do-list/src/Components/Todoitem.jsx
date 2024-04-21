import React from 'react';

const Todoitem = ({ n, d, index, deletehandling}) => {

const handleclick = () => {
  deletehandling(index);
}

  return (
    <>
      <div className="row kg-row">
        <div className="col-4 task">{n}</div>
        <div className="col-4 task">{d}</div>
        <div className="col-4">
          <button type="button" className="btn btn-outline-danger del" onClick = {handleclick} >
            delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Todoitem;
