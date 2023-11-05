import React from 'react';

const DeletedTaskList = ({deletedItems, items, setItems, deleteDeletedItem}) => {
    return (
        <ul className="tasks">
            {    deletedItems.map((item, index) => {
                return <li key={index} className="task">
                    <button className={"button-2 btn btn-success"} onClick={()=>{setItems([...items, index])}}>V</button>
                    <span>{item}</span>
                    <button className={"button-2 btn btn-danger"} onClick={()=>{deleteDeletedItem(index)}} >X</button>
                </li>
            })}

        </ul>
    );
};

export default DeletedTaskList;
