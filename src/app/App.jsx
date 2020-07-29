import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getDaysArrayByMonth, filterTasks } from "../generalFunction.js";
import { getList, delTask } from "../redux/taskActions.js";
import FormCreate from "../components/formCreate/FormCreate.jsx";
import Tomorrow from "../components/Tomorrow.jsx";
import NeverMind from "../components/NeverMind.jsx";
import Urgently from "../components/Urgently.jsx";
import Popap from "../components/popap/Popap.jsx";
import "./app.scss";

function App({ listTasks, get, del }) {

    useEffect(() => {
        get()
    }, [])

    const [showTasks, setShowTasks] = useState("");
    const [showPopap, setShowPopap] = useState(false);
    const [titleChange, setTitleChange] = useState("");
    const [descriptionChange, setDescriptionChange] = useState("");
    const [id, setId] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("not very urgent");

    function showTasksDay(event) {
        if (!isNaN(+event.target.innerHTML)) {
            event.persist()
            if (!showPopap) setTimeout(() => { setShowTasks(event.target.innerHTML) }, 500) 
        }
    }

    return (
        <>
            {showPopap ? <Popap
                titleChange={titleChange}
                descriptionChange={descriptionChange}
                id={id}
                date={date}
                category={category}
                get={get}
                setShowPopap={setShowPopap}
            /> : ""}
            <FormCreate
                get={get}
                date={date}
                setDate={setDate}
                category={category}
                setCategory={setCategory}
            />
            <div className="month">
                {getDaysArrayByMonth().map(day =>
                    <div key={Math.random()}
                        className={showTasks === day.format("DD") ? "day green" : "day"}
                        onClick={showTasksDay}>
                        {day.format("DD")}
                        {showTasks === day.format("DD")
                            ? <div className="tasks">
                                <Urgently
                                    del={del}
                                    tasksList={filterTasks(day.format("YYYY-MM-DD"), listTasks)}
                                    show={setShowPopap}
                                    setTitle={setTitleChange}
                                    setDescription={setDescriptionChange}
                                    setId={setId}
                                    setDate={setDate}
                                    setCategory={setCategory}
                                />
                                <NeverMind
                                    del={del}
                                    tasksList={filterTasks(day.format("YYYY-MM-DD"), listTasks)}
                                    show={setShowPopap}
                                    setTitle={setTitleChange}
                                    setDescription={setDescriptionChange}
                                    setId={setId}
                                    setDate={setDate}
                                    setCategory={setCategory}
                                />
                                <Tomorrow
                                    del={del}
                                    tasksList={filterTasks(day.format("YYYY-MM-DD"), listTasks)}
                                    show={setShowPopap}
                                    setTitle={setTitleChange}
                                    setDescription={setDescriptionChange}
                                    setId={setId}
                                    setDate={setDate}
                                    setCategory={setCategory}
                                />
                            </div> : ""}
                    </div>
                )}
            </div>
        </>
    )
};

const mapState = state => {
    return {
        listTasks: state.main.tasks
    }
}

const mapDispatch = {
    get: getList,
    del: delTask
}

export default connect(mapState, mapDispatch)(App)