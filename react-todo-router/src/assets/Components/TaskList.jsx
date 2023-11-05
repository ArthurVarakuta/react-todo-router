import React from 'react';

const TaskList = ({items,setDeletedItems,deletedItems, completedItems,setCompletedItems, deleteItem}) => {
    return (
            <ul className="tasks">
                {    items.map((item, index) => {
                    return <li key={index} className="task">
                        <button className={"button-2 btn btn-success"} onClick={()=>{setCompletedItems([...completedItems, index])}}>V</button>
                        <span>{item}</span>
                        <button className={"button-2 btn btn-danger"} onClick={()=>{deleteItem(item,index)}}>X</button>
                    </li>
                })}

            </ul>
    );
};

export default TaskList;
