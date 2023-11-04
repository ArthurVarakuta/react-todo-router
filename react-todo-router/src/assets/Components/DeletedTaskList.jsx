import React from 'react';

const DeletedTaskList = ({deletedItems, items, setItems}) => {
    return (
        <ul className="tasks">
            <li className="task">
                <button className={"button-2 btn btn-success"}>V</button>
                <span>eat some milk</span>
                <button className={"button-2 btn btn-danger"} >X</button>
            </li>
            {    deletedItems.map((item, index) => {
                return <li key={index} className="task">
                    <button className={"button-2 btn btn-success"} onClick={()=>{setItems([...items, index])}}>V</button>
                    <span>{item}</span>
                    <button className={"button-2 btn btn-danger"} onClick={()=>{items.splice(index, 1); }} >X</button>
                </li>
            })}

        </ul>
    );
};

export default DeletedTaskList;
