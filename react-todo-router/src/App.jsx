import React, {useEffect, useState} from 'react';
import "./assets/css/reset.css";
import "./assets/css/index.css";
import TaskList from "./assets/Components/TaskList.jsx";
import {
    Route,
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Link, Outlet, Routes
} from "react-router-dom";


function App() {
    const input =   document.querySelector('.input-value');
    const [inputValue, setInputValue] = useState(" ")

    const StoredItems = JSON.parse(localStorage.getItem("ITEMS"));
    const [items, setItems] = useState(StoredItems);

    const StoredCompletedItems = JSON.parse(localStorage.getItem("COMPLETEDITEMS"));
    const [completedItems, setCompletedItems] = useState(StoredCompletedItems);

    const StoredDeletedItems = JSON.parse(localStorage.getItem("DELTEDITEMS"));
    const [deletedItems, setDeletedItems] = useState(StoredDeletedItems);

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(items));
    }, [items]);


    function deleteItem(index) {
        const newItems = [...items];
        newItems.splice(index, 1);
        localStorage.setItem("ITEMS", JSON.stringify(newItems));
        setItems(newItems);
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={"/"} element={<Root />}>
                <Route index path="/planned" element={<TaskList items={items} deleteItem={deleteItem}/>}/>
                <Route path="/completed" element={<TaskList items={completedItems} deleteItem={deleteItem}/>}/>
                <Route path="/deleted" element={<TaskList items={deletedItems} deleteItem={deleteItem}/>}/>
                </Route>))

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
        <RouterProvider router={router}/>
    </>
  )
}
const Root=()=>{
    return <>

        <div className="navbar">
            <Link to={"/planned"} ><div className={"navbar-element"}>Planned</div></Link>
            <Link to={"/deleted"} ><div className={"navbar-element"}>Deleted</div></Link>
            <Link to={"/completed"} ><div className={"navbar-element"}>Completed</div></Link>
        </div>

        <div>
            <Outlet/>
        </div>
    </>
}
export default App
