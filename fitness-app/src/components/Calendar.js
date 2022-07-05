import React from 'react';
import Week from './Week.js';

function Calendar(props){
    return (
      <>
        <table id="calendar">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tues</th>
              <th>Wed</th>
              <th>Thurs</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <Week weekNum={0} weekArr={props.calendarArr[0]} />
            <Week weekNum={1} weekArr={props.calendarArr[1]}/>
            <Week weekNum={2} weekArr={props.calendarArr[2]}/>
            <Week weekNum={3} weekArr={props.calendarArr[3]}/>
            <Week weekNum={4} weekArr={props.calendarArr[4]}/>
            <Week weekNum={5} weekArr={props.calendarArr[5]}/>
          </tbody>
        </table>
      </>
    );
}

function getFirstDateOfTheWeek(daysPrevMonth,offset){
  console.log(daysPrevMonth);
  console.log(offset);
  if(offset===0){
    return 1;
  }
  return daysPrevMonth-offset;
}

export default Calendar;
