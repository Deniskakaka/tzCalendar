import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getDaysArrayByMonth, filterTasks } from "../generalFunction.js";
import { getList, delTask, change } from "../redux/taskActions.js";
import FormCreate from "../components/formCreate/FormCreate.jsx";
import Tomorrow from "../components/Tomorrow.jsx";
import NeverMind from "../components/NeverMind.jsx";
import Urgently from "../components/Urgently.jsx";
import Popap from "../components/popap/Popap.jsx";
import "./app.scss";

function App({ listTasks, get, del, changeTask }) {

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
    const [changeMonth, setChangeMonth] = useState(0);

    function showTasksDay(event) {
        if (!isNaN(+event.target.innerHTML)) {
            event.persist()
            if (!showPopap) setTimeout(() => { setShowTasks(event.target.innerHTML) }, 500)
        }
    }

    function changeTaskPoints(title, description, date, id, category) {
        setTitleChange(title)
        setDescriptionChange(description)
        setId(id)
        setDate(date)
        setCategory(category)
    }

    function next() {
        setChangeMonth(changeMonth + 1)
    }

    function prev() {
        setChangeMonth(changeMonth - 1)
    }

    return (
        <>
            {showPopap ? <Popap
                titleChange={titleChange}
                descriptionChange={descriptionChange}
                id={id}
                date={date}
                category={category}
                setShowPopap={setShowPopap}
                changeTask={changeTask}
            /> : ""}
            <FormCreate
                get={get}
                date={date}
                setDate={setDate}
                category={category}
                setCategory={setCategory}
            />
            <button onClick={next}>nextMonth</button>
            <button onClick={prev}>prevMonth</button>
            <div className="month">
                {getDaysArrayByMonth(changeMonth)[0].format("MMMM-YYYY")}
                {getDaysArrayByMonth(changeMonth).map(day =>
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
                                    changeTaskPoints={changeTaskPoints}
                                />
                                <NeverMind
                                    del={del}
                                    tasksList={filterTasks(day.format("YYYY-MM-DD"), listTasks)}
                                    show={setShowPopap}
                                    changeTaskPoints={changeTaskPoints}
                                />
                                <Tomorrow
                                    del={del}
                                    tasksList={filterTasks(day.format("YYYY-MM-DD"), listTasks)}
                                    show={setShowPopap}
                                    changeTaskPoints={changeTaskPoints}
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
    del: delTask,
    changeTask: change
}

export default connect(mapState, mapDispatch)(App)