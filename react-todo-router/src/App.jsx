import React from 'react';
import "./assets/css/reset.css";
import "./assets/css/index.css";

function App() {







  return (
    <>
      <div className="header">
          <input type="text"/>
          <button role={"button"} className={'button-1'} >+</button>
      </div>
        <div className="navbar">
            <div className={"navbar-element"}>Planned</div>
            <div className={"navbar-element"}>Completed</div>
            <div className={"navbar-element"}>Deleted</div>
        </div>
        <div className="tasks">
            <div className="task">
                <button className={"button-2 btn btn-success"}>V</button>
                <span>eat some milk</span>
                <button className={"button-2 btn btn-danger"}>X</button>
            </div>
        </div>
    </>
  )
}

export default App
