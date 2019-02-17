import React from 'react';

const Result = props => {

    const {date, city, temp, press, wind, err, icon, humidity, temp_max, temp_min } = props.weather;

    const icona = `http://openweathermap.org/img/w/${icon}.png`;

    let tempe = Math.round(temp);
    let tempe_min = Math.round(temp_min);
    let tempe_max = Math.round(temp_max);

    let content = null;

    if(!err && city) {



        content = (
            <div>  
            <div className='anim'><img src={icona} alt=""/></div>
            <div className="W">{tempe} &#176;C</div>
            <div className="miasto">{city}</div>
             <div> {date}</div> 
             <button className="wiecej"><i class="demo-icon icon-sort-alt-up"></i></button>
             <div className="rozwi">
             <p>{tempe_min} &#176;C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {tempe_max} &#176;C</p>
             <p className="linia"> &nbsp;&nbsp;MIN<i class="demo-icon icon-thermometer-0"></i>&nbsp;&nbsp;  MAX<i class="demo-icon icon-thermometer-3"></i></p>
             <div><i class="demo-icon icon-gauge"></i> Ciśnienie: {press} hPa </div>
            <div><i class="demo-icon icon-air"></i> Szybkość Wiatru: {wind} m/s </div>
            <div><i class="demo-icon icon-tint"></i> Wilgotność: {humidity} % </div> 
            </div>
            </div>
        )
    }

    return(
        <div className="result">
        {err ? `${city} nie ma takiego miasta` : content} 
         {/* <React.Fragment>
            <div>Pogoda dla: {city}</div>
            <div><img src={icona} alt=""/></div>
            <div> {date}</div>
            <div>temp {tempe}</div>
            <div>cis {press}</div>
            <div>wiatr {wind}</div>
            <div>wilg {humidity}</div>
        </React.Fragment>  */}
        </div>
    );
}
export default Result;
