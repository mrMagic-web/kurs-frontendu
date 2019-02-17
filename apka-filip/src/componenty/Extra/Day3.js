import React from 'react';

const Day3 = props => {

    const {date3, city, temp3, err, icon3 } = props.weather;

    const icona = `http://openweathermap.org/img/w/${icon3}.png`;

    let tempe = Math.round(temp3);

    let content = null;

    if(!err && city) {
        content = (
            <div className="day3"> 
            <h2>{tempe}&#176;C</h2>
            <img src={icona} alt="" className="obr"/>
            <h3> {date3}</h3>
            </div>
        )
    }

    return(
        <div>
        {err ? '' : content} 

        </div>
    );
}

export default Day3;