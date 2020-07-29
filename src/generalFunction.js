import moment from "moment";

export function getDaysArrayByMonth(month) {
  let daysInMonth = moment().add(month, "month").daysInMonth();
  let arrDays = [];

  while (daysInMonth) {
    let current = moment().add(month, "month").date(daysInMonth);
    arrDays.unshift(current);
    daysInMonth--;
  }

  return arrDays;
}

export const filterTasks = (date, array) => {
  return array.filter((i) => i.date === date);
};

export const urgently = (array) => {
    return array.filter(i =>  i.category === "urgently")
}

export const neverMind = (array) => {
  return array.filter(i => i.category === "not very urgent")
}

export const tommorow = (array) => {
  return array.filter(i => i.category === "can be tomorrow")
}