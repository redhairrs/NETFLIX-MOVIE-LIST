import React from "react";


function Card(props) {
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} alt="pic_1" className='card__img' />
                    <div className='card__info'>
                        <span className='card__category'>{props.title}</span>
                        <h3 className='card__title'>{props.sname}</h3>
                        <span><a href={props.link} target="_blank"></a></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
