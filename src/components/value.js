import React from 'react';
import Counter from './counter.js';


function Value() {

 const value = 1;

  return (
    <>
     <Counter step={value}/>
     </>
  );
};

export default Value;