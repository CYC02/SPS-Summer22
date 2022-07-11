const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();

async function renderCalendar(){
    var calendar = getCalendarArr();
    var daysOfWeekHtml="<tr><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thurs</td><td>Fri</td><td>Sat</td></tr>";
    var htmlCalendar = "<table>" + daysOfWeekHtml;
    for(var i = 0; i < calendar.length; i++){
        htmlCalendar += "<tr>";
        for(var j = 0; j < calendar[0].length; j++){
            var dateValue = calendar[i][j] + "";
            htmlCalendar += "<td>"+ dateValue + "</td>";
        }
        htmlCalendar += "</tr>";
    }
    htmlCalendar +="</table>";

    const calendarContainer = document.getElementById('calendar-container');
    calendarContainer.innerHTML = htmlCalendar;
}

function getCalendarArr(){
    var daysInCurrentMonth = daysEachMonth[d.getMonth()];
    var currentDate = d.getDate();
    var dayIdx = d.getDay();
    var daysInPreviousMonth = daysEachMonth[d.getMonth()-1];
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

    return calendar2DArr;
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