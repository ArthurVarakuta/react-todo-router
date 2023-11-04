import React from 'react';

const CompletedTaskList = ({
                               completedItems,
                               setItems,
                               items
                           }) => {
    return (
        <ul className="tasks">
            <li className="task">
                <button className={"button-2 btn btn-success"}>V</button>
                <span>eat some milk</span>
                <button className={"button-2 btn btn-danger"} >X</button>
            </li>
            {    completedItems.map((item, index) => {
                return <li key={index} className="task">
                    <button className={"button-2 btn btn-success"} onClick={()=>{items.splice(index, 1)}}>V</button>
                    <span>{item}</span>
                    <button className={"button-2 btn btn-danger"} onClick={()=>{setItems([...items, index])}}>X</button>
                </li>
            })}

        </ul>
    );
};

export default CompletedTaskList;
