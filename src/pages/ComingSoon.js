import React from "react";
import './ComingSoon.css';

export default class ComingSoon extends React.Component {

   findDateOfLaunch(){
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let daysLeft = 0;

        if(month === 4){
            return daysLeft = (30 - date) + 31 + 30
        } else if(month === 5){
            return daysLeft = (31 - date) + 30
        } else if(month === 6){
            return daysLeft = 20 - date;
        }
   } 

   render(){
    return (
        <div className="coming-soon">
            <h1 className="title">Oops, sorry...</h1>
            <h3 className="subtitle">Currently working on creating a new portfolio</h3>
            <h3 className="subtitle">Expected Launch Date: June 20th 2022 - {this.findDateOfLaunch()} days from now</h3>
            <h3 className="subtitle email">petros.chantz [at] gmail [dot] com</h3>
        </div>
      );
   }

}

