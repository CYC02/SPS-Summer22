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

    if(d.getMonth()-1 === -1){
      //when the current month is January, previous month's days are 31
      daysInPreviousMonth = 31;
    }
  
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

  async function showExercises(){

    const chest = document.getElementById('chest').value;
    const arms = document.getElementById('arms').value;
    const abdomen = document.getElementById('abdomen').value;
    const legs = document.getElementById('legs').value;

    const day1 = document.getElementById('day1').value;
    const day2 = document.getElementById('day2').value;
    const day3 = document.getElementById('day3').value;
    const day4 = document.getElementById('day4').value;
    const day5 = document.getElementById('day5').value;
    const day6 = document.getElementById('day6').value;
    const day7 = document.getElementById('day7').value;

    //appends key/value pair to the URLSearchParams object
    const params = new URLSearchParams();
    if (document.getElementById('chest').checked == true){params.append('chest', chest);}
    if (document.getElementById('arms').checked == true){params.append('arms', arms);}
    if (document.getElementById('abdomen').checked == true){params.append('abdomen', abdomen);}
    if (document.getElementById('legs').checked == true){params.append('legs', legs);}
    if (document.getElementById('day1').checked == true){params.append('day1', day1);}
    if (document.getElementById('day2').checked == true){params.append('day2', day2);}
    if (document.getElementById('day3').checked == true){params.append('day3', day3);}
    if (document.getElementById('day4').checked == true){params.append('day4', day4);}
    if (document.getElementById('day5').checked == true){params.append('day5', day5);}
    if (document.getElementById('day6').checked == true){params.append('day6', day6);}
    if (document.getElementById('day7').checked == true){params.append('day7', day7);}
    
    fetch('/input-handler', {
      method: 'POST',
      body: params
    }).then(response => response.json()) //read the response
    .then((translatedMessage) => { 
        fill_Calender(translatedMessage);
    });
  }

  //fills the calendar with exercises
  function fill_Calender(translatedMessage){

    const d = new Date();
    document.getElementById("date-container").innerHTML = d.toString();

    var calendar = getCalendarArr();
    var daysOfWeekHtml="<tr><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thurs</td><td>Fri</td><td>Sat</td></tr>";
    var htmlCalendar = "<table>" + daysOfWeekHtml;

    //array to hold the days of exercising
    const c = [];
   
    for (var i = 0; i < Object.keys(translatedMessage).length; i++) {
        c.push(Object.keys(translatedMessage)[i]);
    }

    var done = 'nd';

    for (var i = 0; i < calendar.length; i++){
        htmlCalendar += "<tr>";
        for(var j = 0; j < calendar[0].length; j++){
            done = 'nd';

            var dateValue = calendar[i][j] + "";

            if (c.includes("Monday") && j == 1){
                htmlCalendar += "<td>"+ dateValue + translatedMessage["Monday"] + "</td>";
                done = 'd';
            } 

            if (c.includes("Tuesday") && j == 2){
                htmlCalendar += "<td>"+ dateValue + translatedMessage["Tuesday"] + "</td>";
                done = 'd';
            } 

            if (c.includes("Wednesday") && j == 3){
                htmlCalendar += "<td>"+ dateValue + translatedMessage["Wednesday"] + "</td>";
                done = 'd';
            }

            if (c.includes("Thursday") && j == 4){
                htmlCalendar += "<td>"+ dateValue + translatedMessage["Thursday"] + "</td>";
                done = 'd';
            }

            if (c.includes("Friday") && j == 5){
                htmlCalendar += "<td>"+ dateValue + translatedMessage["Friday"] + "</td>";
                done = 'd';
            }

            if (c.includes("Saturday") && j == 6){
                htmlCalendar += "<td>"+ dateValue + translatedMessage["Saturday"] + "</td>";
                done = 'd';
            }

            if (c.includes("Sunday") && j == 0){
                htmlCalendar += "<td>"+ dateValue + translatedMessage["Sunday"] + "</td>";
                done = 'd';
            }
            
            if (done == 'nd'){
                htmlCalendar += "<td>"+ dateValue + "</td>";
            }
        }
        htmlCalendar += "</tr>";
    }
    localStorage.setItem("calendar", htmlCalendar);
    htmlCalendar +="</table>";
    const calendarContainer = document.getElementById('calendar-container');
    calendarContainer.innerHTML = htmlCalendar;
  }

  function show_calendar(){

    const container = document.getElementById('c-container');
    container.innerHTML = localStorage.getItem("calendar");
  }



