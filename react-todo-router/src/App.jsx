import React, {useEffect, useState} from 'react';
import "./assets/css/reset.css";
import "./assets/css/index.css";

function App() {
    const input =   document.querySelector('.input-value');
    const [inputValue, setInputValue] = useState(" ")

    const StoredItems = JSON.parse(localStorage.getItem("ITEMS"));
    const [items, setItems] = useState(StoredItems);

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(items));
    }, [items]);


    function deleteItem(index) {
        const newItems = [...items];
        newItems.splice(index, 1);
        localStorage.setItem("ITEMS", JSON.stringify(newItems));
        setItems(newItems);
    }

    return (
    <>
      <div className="header">
          <input onChange={(e)=>{setInputValue(e.target.value)}} className={"input-value"} type="text"/>
          <button role={"button"} className={'button-1'} onClick={()=>{
              if (inputValue!==""){
                  setItems([...items,inputValue]);
              setInputValue("")
              }
          }}>+</button>
      </div>
        <div className="navbar">
            <div className={"navbar-element"}>Planned</div>
            <div className={"navbar-element"}>Completed</div>
            <div className={"navbar-element"}>Deleted</div>
        </div>
        <ul className="tasks">
            <li className="task">
                <button className={"button-2 btn btn-success"}>V</button>
                <span>eat some milk</span>
                <button className={"button-2 btn btn-danger"} >X</button>
            </li>
            {    items.map((item, index) => {
                return <li key={index} className="task">
            <button className={"button-2 btn btn-success"}>V</button>
            <span>{item}</span>
            <button className={"button-2 btn btn-danger"} onClick={()=>{deleteItem(index)}}>X</button>
        </li>
      })}

        </ul>
    </>
  )
}

export default App
