import { useState } from 'react';

import './App.css';
import ArrowIcon from './assets/icon-arrow.svg';

function App() {
  const handleSubmit = () => {
    calculate(year, month, day);
  };

  const calculate = (year, month, day) => {
    const data = new Date(`${year},${month},${day}`);
    const nowD = Date.now();
    const decorridoMili = nowD - data;
    const decorridoDias = decorridoMili / 86400000;
    const decorridoMeses = decorridoDias / 30;
    const decorridoAnos = decorridoMeses / 12;

    // --------------- Ajustar --------------- //

    const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;

    const interval = nowD - data;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const dayT = hour * 24;
    const monthT = day * 30;
    const yearT = month * 12;

    const yearNumber = Math.floor(interval / yearT);
    const monthNumber = Math.floor((interval % yearT) / month);
    const dayNumber = Math.floor((interval % monthT) / dayT);
    const hourNumber = Math.floor((interval % dayT) / hour);
    const minuteNumber = Math.floor((interval % hour) / minute);
    const secondNumber = Math.floor((interval % minute) / second);

    // --------------- Ajustar --------------- //

    setResult({
      Year: decorridoAnos,
      Month: decorridoMeses,
      Day: decorridoDias,
    });
  };

  const [year, setYear] = useState('--');
  const [month, setMonth] = useState('--');
  const [day, setDay] = useState('--');

  const [result, setResult] = useState({
    Year: '--',
    Month: '--',
    Day: '--',
  });

  const handleChangeDay = (e) => {
    setDay(e.target.value);
  };

  const handleChangeMonth = (e) => {
    setMonth(e.target.value);
  };

  const handleChangeYear = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className="App">
      <form action="#">
        <div className="inputWrapper">
          <div className="inputBox">
            <label htmlFor="">Day</label>
            <input type="number" placeholder="DD" onChange={handleChangeDay} />
          </div>

          <div className="inputBox">
            <label htmlFor="">Month</label>
            <input
              type="number"
              placeholder="MM"
              onChange={handleChangeMonth}
            />
          </div>

          <div className="inputBox">
            <label htmlFor="">Year</label>
            <input
              type="number"
              placeholder="YYYY"
              onChange={handleChangeYear}
            />
          </div>
        </div>

        <button className="btn" onClick={handleSubmit}>
          <img src={ArrowIcon} alt="" />
        </button>
      </form>

      <div className="results">
        <div className="dateWrapper">
          <p className="hl">{result.Year}</p>
          <p>years</p>
        </div>

        <div className="dateWrapper">
          <p className="hl">{result.Month}</p>
          <p>months</p>
        </div>

        <div className="dateWrapper">
          <p className="hl">{result.Day}</p>
          <p>days</p>
        </div>
      </div>
    </div>
  );
}

export default App;
