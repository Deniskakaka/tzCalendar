import React, { useState } from "react";
import "./popap.scss";

function Popap({ titleChange, descriptionChange, id, category, date, setShowPopap, changeTask }) {

    const [title, setTitle] = useState(titleChange);
    const [description, setDescription] = useState(descriptionChange);

    function preventSubmit(e) {
        e.preventDefault()
        setShowPopap(false)
    }


    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    function onChangeDescription(event) {
        setDescription(event.target.value);
    }

    return (
        <form onSubmit={preventSubmit} className="popap">
            <input type="text" value={title} onChange={onChangeTitle} />
            <input type="text" value={description} onChange={onChangeDescription} />
            <button onClick={
                changeTask(id, {
                    title: title,
                    date: date,
                    description: description,
                    category: category
                })
            }>Change</button>
        </form>
    )
}

export default Popap;