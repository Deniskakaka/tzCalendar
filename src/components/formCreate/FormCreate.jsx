import React, { useState } from "react";
import { createTask } from "../../gateAwayFunction.js";
import "./formCreate.scss";

function FormCreate({ get, setDate, date, setCategory, category }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function preventSubmit(e) {
        e.preventDefault()
        setTitle("");
        setDescription("");
        setDate("");
        setCategory("not very urgent")
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
    }

    function onChangeDate(event) {
        setDate(event.target.value)
    }

    function onChangeDescription(event) {
        setDescription(event.target.value)
    }

    function onChangeCategory(event) {
        setCategory(event.target.value)
    }

    return (
        <form onSubmit={preventSubmit} className="formCreate">
            <input type="text" className="title" value={title} onChange={onChangeTitle} />
            <input type="date" className="date" value={date} onChange={onChangeDate} />
            <input
                type="text"
                className="description"
                value={description}
                onChange={onChangeDescription}
            />
            <select value={category} onChange={onChangeCategory}>
                <option>urgently</option>
                <option>not very urgent</option>
                <option>can be tomorrow</option>
            </select>
            <button
                onClick={() => {
                    title !== "" && date !== "" && description !== "" ?
                        createTask({
                            title: title,
                            date: date,
                            description: description,
                            category: category
                        }) : null,
                        setTimeout(() => { get() }, 1000)
                }}>Submit</button>
        </form>
    )
}

export default FormCreate