import React from "react";
import './ComingSoon.css';

export default class ComingSoon extends React.Component {

   findDateOfLaunch(){
    //    let dateTarget = new Date('07/20/2022');
    //    let dateToday = new Date();
    //    let difference = dateTarget.getTime() - dateToday.getTime();
    //    let days = Math.ceil(difference / (1000 * 3600 * 24));
    //    return days;

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;

        if(month === 4){
            let daysLeft = (30 - date) + 31 + 30
            return daysLeft;
        } else if(month === 5){
            let daysLeft = (31 - date) + 30
            return daysLeft;
        } else if(month === 6){
            let daysLeft = 20 - date;
            return daysLeft;
        }

        
   } 

   render(){
    return (
        <div className="container">
        <div className="coming-soon">
            <h1 className="title">Oops, sorry...</h1>
            <h3 className="subtitle">Currently working on creating a new portfolio.</h3>
            <h3 className="subtitle">Expected Launch Date: June 20th 2022 - {this.findDateOfLaunch()} days from now.</h3>
            <h3 className="subtitle email">petros.chantz [at] gmail [dot] com</h3>
        </div>
        </div>
      );
   }
}

