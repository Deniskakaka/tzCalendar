import React from "react";
import { urgently } from "../generalFunction.js";

function Urgently({
    del,
    tasksList,
    show,
    setTitle,
    setDescription,
    setId,
    setDate,
    setCategory
}) {
    return (
        <div className="urgently" key={Math.random()}>
            <span>Urgently</span>
            {urgently(tasksList).map(task =>
                <div className="task" key={Math.random()}>
                    <span>{task.title}</span>
                    <span>{task.description}</span>
                    <button onClick={() => del(task.id)}>X</button>
                    <button onClick={() => {
                            show(true),
                            setTitle(task.title),
                            setDescription(task.description),
                            setId(task.id),
                            setDate(task.date),
                            setCategory(task.category)
                    }}>Change</button>
                </div>
            )}
        </div>
    )
}

export default Urgently;