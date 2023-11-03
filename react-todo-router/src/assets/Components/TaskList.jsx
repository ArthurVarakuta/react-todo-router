import React from 'react';

const TaskList = ({items, deleteItem}) => {
    return (
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
    );
};

export default TaskList;
