import React, { useEffect } from "react";
import { CalendarStyled } from "./CalendarStyled";
import moment from "moment";

const getCurrentMonth = (date) => {
  return moment(date).format("MMMM YYYY");
};

const getAllDayInMonth = (date) => {
  let lastDate = moment(date).endOf("month").date();
  let days = [];
  for (let i = 1; i <= lastDate; i++) days.push(i);
  return days;
};

const Calendar = (props) => {
  const {date} = props;
  const weekArray = moment.weekdays();
  const month = getCurrentMonth(date);
  const startOfMonth = moment(date).startOf("month");
  const dayCount = moment(startOfMonth).day();

  const cellData = getAllDayInMonth(date);
  let data = cellData.splice(0, 7 - dayCount);
  let firstRowData = [...data];

  for (let i = 0; i < 7 - data.length; i++) {
    firstRowData.unshift(0);
  }

  const rows = cellData.reduceRight(
    (r, i, _, s) => (r.push(s.splice(0, 7)), r),
    []
  );

  return (
    <CalendarStyled>
      <table className="container">
        <thead className="table-header">
          <th>{month}</th>
        </thead>
        <tbody className="table-body">
          <tr>
            {weekArray.map((item) => (
              <td>{item.slice(0, 2)}</td>
            ))}
          </tr>
          <tr>
            {firstRowData.map((item) => {
              return item === 0 ? <td></td> : <td>{item}</td>;
            })}
          </tr>
          {rows.map((row, i) => (
            <tr key={i} className="row">
              {row.map((cell, j) => (
                <td key={j} className={moment(date).date() === cell ? "active" : ""}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </CalendarStyled>
  );
};

export default Calendar;
