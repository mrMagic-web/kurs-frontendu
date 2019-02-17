import React from 'react';

const Day2 = props => {

    const {date2, city, temp2, err, icon2 } = props.weather;

    const icona = `http://openweathermap.org/img/w/${icon2}.png`;

    let tempe = Math.round(temp2);

    let content = null;

    if(!err && city) {
        content = (
            <div className="day2"> 
            <h2>{tempe}&#176;C</h2>
            <img src={icona} alt="" className="obr"/>
            <h3> {date2}</h3>
            </div>
        )
    }

    return(
        <div>
        {err ? '' : content} 

        </div>
    );
}

export default Day2;