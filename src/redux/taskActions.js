import { getListTasks, deleteTask, changeTask } from "../gateAwayFunction.js";

export const LIST_TASKS = "LIST_TASKS";

export const ListTasks = (list) => {
    return {
        type: LIST_TASKS,
        payload: {
            list
        }
    }
};

export function getList() {
    return function(dispatch) {
        getListTasks().then(res => dispatch(ListTasks(res)))
    }
}

export function delTask(id) {
    return function(dispatch) {
        deleteTask(id).then(() => dispatch(getList()))
    }
}

export function change(id, task) {
    return function(dispatch) {
        changeTask(id, task).then(() => dispatch(getList()))
    }
}