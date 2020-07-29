import React from "react";
import { tommorow } from "../generalFunction.js";

function Tomorrow({
    del,
    tasksList,
    show,
    changeTaskPoints
}) {
    return (
        <div className="tommorow">
            <span>Can be tommorow</span>
            {tommorow(tasksList).map(task =>
                <div className="task" key={Math.random()}>
                    <span>{task.title}</span>
                    <span>{task.description}</span>
                    <button onClick={() => del(task.id)}>X</button>
                    <button onClick={() => {
                            show(true),
                            changeTaskPoints(
                                task.title, 
                                task.description, 
                                task.date, 
                                task.id, 
                                task.category)
                    }}>Change</button>
                </div>
            )}
        </div>
    )
}

export default Tomorrow;