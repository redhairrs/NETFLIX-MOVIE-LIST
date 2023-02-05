import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';
import Navbar from './Navbar';


function ncard(x){
  return (
    <Card
    imgsrc={x.imgsrc}
    title={x.title}
    sname={x.sname}
    link={x.link}
    />
  );
}

ReactDOM.render(
  <>
    <Navbar/>
    {Sdata.map(ncard)}
  </>,
  document.getElementById('root')
);