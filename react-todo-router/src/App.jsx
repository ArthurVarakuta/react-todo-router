import React, {useEffect, useState} from 'react';
import "./assets/css/reset.css";
import "./assets/css/index.css";
import TaskList from "./assets/Components/TaskList.jsx";
import {
    Route,
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Link, Outlet
} from "react-router-dom";
import DeletedTaskList from "./assets/Components/DeletedTaskList.jsx";
import CompletedTaskList from "./assets/Components/CompletedTaskList.jsx";


function App() {
    const input =   document.querySelector('.input-value');
    const [inputValue, setInputValue] = useState(" ")

    const StoredItems = JSON.parse(localStorage.getItem("ITEMS"));
    const [items, setItems] = useState(StoredItems||[]);

    const StoredCompletedItems = JSON.parse(localStorage.getItem("COMPLETEDITEMS"));
    const [completedItems, setCompletedItems] = useState(StoredCompletedItems||[]);

    const StoredDeletedItems = JSON.parse(localStorage.getItem("DELETEDITEMS"));
    const [deletedItems, setDeletedItems] = useState(StoredDeletedItems||[]);

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(items));
    }, [items]);
    useEffect(() => {
        localStorage.setItem("DELETEDITEMS", JSON.stringify(deletedItems));
    }, [deletedItems]);
    useEffect(() => {
        localStorage.setItem("COMPLETEDITEMS", JSON.stringify(completedItems));
    }, [completedItems]);


    function completeDeletedItem(item,index){
        setItems([...items,  item]);
        localStorage.setItem("DELETEDITEMS", JSON.stringify(item));
        const newDeletedItems = [...deletedItems];
        newDeletedItems.splice(index, 1);
        localStorage.setItem("DELETEDITEMS", JSON.stringify(newDeletedItems));
        setDeletedItems(newDeletedItems);
    }
    function completeItem(item,index) {
        // добавиться в выполенные
        setCompletedItems([...completedItems, item]);
        // убраться из текущего
        const newItems = [...items];
        newItems.splice(index,1);
        //add localstorage izmeneniya
        localStorage.setItem("ITEMS", JSON.stringify(newItems));
        setItems(newItems);
    }
    function completeCompletedItem(index) {
        const newCompletedItems = [...completedItems];
        newCompletedItems.splice(index,1);
        localStorage.setItem("COMPLETEDITEMS", JSON.stringify(newCompletedItems));
        setCompletedItems(newCompletedItems);
    }
    function deleteItem(item,index) {
        setDeletedItems([...deletedItems, item])
        const newItems = [...items];
        newItems.splice(index, 1);
        localStorage.setItem("ITEMS", JSON.stringify(newItems));
        setItems(newItems);
    }
    function deleteDeletedItem(index) {
        const newDeletedItems = [...deletedItems];
        newDeletedItems.splice(index, 1);
        localStorage.setItem("DELETEDITEMS", JSON.stringify(newDeletedItems));
        setDeletedItems(newDeletedItems);
    }
    function deleteCompletedItem(item,index) {
        setItems([...items,  item]);
        localStorage.setItem("COMPLETEDITEMS", JSON.stringify(item));
        const newCompletedItems = [...completedItems];
        newCompletedItems.splice(index, 1);
        localStorage.setItem("COMPLETEDITEMS", JSON.stringify(newCompletedItems));
        setCompletedItems(newCompletedItems);
    }



    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={"/"} element={<Root />}>
                <Route path="/completed" element={<CompletedTaskList completedItems={completedItems}  deleteCompletedItem={deleteCompletedItem}   completeCompletedItem={completeCompletedItem}  />}/>
                <Route index path="/planned" element={<TaskList items={items} setItems={setItems} setDeletedItems={setDeletedItems} deletedItems={deletedItems} completedItems={completedItems} setCompletedItems={setCompletedItems} deleteItem={deleteItem} completeItem={completeItem} />}/>
                <Route path="/deleted" element={<DeletedTaskList deletedItems={deletedItems}  items={items} setItems={setItems} deleteDeletedItem={deleteDeletedItem} completeDeletedItem={completeDeletedItem} />}/>
                </Route>))

    return (
    <>

      <div className="header">
          <input onChange={(e)=>{setInputValue(e.target.value)}} className={"input-value"} type="text"/>
          <button role={"button"} className={'button-1'} onClick={()=>{
              if (inputValue!==""){
                  setItems([...items,inputValue]);
              setInputValue("");
              input.innerHTML="";
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
            <Link className={"link-router"} to={"/completed"} ><div className={"navbar-element"}>Completed</div></Link>
            <Link className={"link-router"} to={"/planned"} ><div className={"navbar-element"}>Planned</div></Link>
            <Link className={"link-router"} to={"/deleted"} ><div className={"navbar-element"}>Deleted</div></Link>
        </div>

        <div>
            <Outlet/>
        </div>
    </>
}
export default App
