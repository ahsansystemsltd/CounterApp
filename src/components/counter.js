import React, {useState} from 'react';
import style from './counter.module.css';

function Counter({step}) {

const [count, setCurrent] = useState(0);

const increment = () => {
   setCurrent(count + step);
};

const decrement = () => {
    if(count - step >= 0) 
    {
        setCurrent(count - step);
    } 
    else 
    {
    alert("Error: Count can't decrease more than 0");
    }
 };

  return (
    <>
    <div className={style.Counter}>
     <div className={style.CounterContainer}>
    <h1 className={style.Value}>
        {count}
    </h1>
    <div className={style.ValueBox}></div>
    </div>
    <button className={`${style.Icon} ${style.Increment}`} onClick={increment}> Increment </button>
    <button className={`${style.Icon} ${style.Decrement}`} onClick={decrement}> Decrement </button>
    </div>
    <div className={style.Name}>
    Ahsan Ejaz
    </div>
    </>
  );
};

export default Counter;