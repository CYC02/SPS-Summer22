import React from 'react';
import Day from './Day.js';

function Week(props){
  console.log(props.weekArr);
  return (
    <>
      <tr>
        <Day dayOfWeekIdx={0} value={props.weekArr[0]}/>
        <Day dayOfWeekIdx={1} value={props.weekArr[1]}/>
        <Day dayOfWeekIdx={2} value={props.weekArr[2]}/>
        <Day dayOfWeekIdx={3} value={props.weekArr[3]}/>
        <Day dayOfWeekIdx={4} value={props.weekArr[4]}/>
        <Day dayOfWeekIdx={5} value={props.weekArr[5]}/>
        <Day dayOfWeekIdx={6} value={props.weekArr[6]}/>
      </tr>
    </>
  );
}

function getDateValue(weekArr,idx){
  return weekArr[idx];
}

export default Week;
