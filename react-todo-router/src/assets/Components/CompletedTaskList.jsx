import React from 'react';

const CompletedTaskList = ({
                               completedItems,
                               deleteCompletedItem,
                               completeCompletedItem
                           }) => {
    return (
        <ul className="tasks">
            {    completedItems.map((item, index) => {
                return <li key={index} className="task">
                    <button className={"button-2 btn btn-success"} onClick={()=>{completeCompletedItem(index)}}>V</button>
                    <span>{item}</span>
                    <button className={"button-2 btn btn-danger"} onClick={()=>{deleteCompletedItem(item,index)}}>X</button>
                </li>
            })}

        </ul>
    );
};

export default CompletedTaskList;
