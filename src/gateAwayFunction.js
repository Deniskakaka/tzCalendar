let baseUrl =
  "https://5ebd4202ec34e900161920b0.mockapi.io/monthCalendarTasks";

export const createTask = (taskData) => {
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });
};

export const getListTasks = () => {
  return fetch(baseUrl).then((response) => {
    if (response.ok) return response.json();
    throw new Error();
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
  });
};

export const changeTask = (taskId, task) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(task),
  });
};
