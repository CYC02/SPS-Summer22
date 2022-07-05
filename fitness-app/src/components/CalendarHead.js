import React from 'react';
import Calendar from './Calendar.js';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();

class CalendarHead extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      month: months[d.getMonth()],
      daysInCurrentMonth: daysEachMonth[d.getMonth()],
      daysInPreviousMonth: daysEachMonth[d.getMonth()-1],
      date: d.getDate(),
      year: d.getFullYear(),
      day: days[d.getDay()]
    };
  }
  render() {
    return (
      <>
        <h1>{this.state.month} {this.state.date}, {this.state.year}</h1>
        <h1>{this.state.day}</h1>
        <Calendar
          month={this.state.month}
          daysInCurrentMonth={this.state.daysInCurrentMonth}
          daysInPreviousMonth={this.state.daysInPreviousMonth}
          date={this.state.date}
          dayIdx={d.getDay()}
          offset={getOffset(d.getDay(),this.state.date)}
          calendarArr={getCalendarArr(
            this.state.daysInCurrentMonth,
            this.state.date,
            d.getDay(),
            this.state.daysInPreviousMonth
          )}
        />
      </>
    );
  }
}

function getCalendarArr(daysInCurrentMonth,currentDate,dayIdx,daysInPreviousMonth){
  var calendarArr=[];
  var prevMonth=[];
  var nextMonth=[];
  var offset;

  for(let i = 1; i<=daysInCurrentMonth; i++ ){
    calendarArr.push(i);
  }

  offset = getOffset(dayIdx,currentDate);

  for(let i = daysInPreviousMonth-offset+1; i <= daysInPreviousMonth; i++){
    prevMonth.push(i);
  }

  for(let i=1; i <= 42-(daysInCurrentMonth+offset); i++){
    nextMonth.push(i);
  }

  var mergedArr = prevMonth.concat(calendarArr).concat(nextMonth);

  var calendar2DArr=[];
  var start = 0;
  var end = 7;
  for(let i = 0; i < 6; i++){
    var weekArr = mergedArr.slice(start,end);
    calendar2DArr.push(weekArr);
    start += 7;
    end += 7;
  }

  console.log(calendar2DArr);
  return calendar2DArr
}

function diffBetweenTwoDays(firstDayIdx,secondDayIdx){
  if(firstDayIdx>=secondDayIdx){
    return firstDayIdx-secondDayIdx;
  }
  return firstDayIdx+(7-secondDayIdx);
}


function getOffset(dayIdx, date) {
  if(date <= 7){
    return diffBetweenTwoDays(dayIdx,date-1);
  }
  return (dayIdx-((date%7)-1));
}


export default CalendarHead;
