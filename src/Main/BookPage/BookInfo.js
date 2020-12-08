/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './bookinfo.css';

const BookInfo = function(props){
        return(
            <div className="totalinfo">
                <img src={props.img} />
                <div>
                    <h3>{props.title}</h3>
                    <h4>{props.authors}</h4>
                    <br/>
                    <p>{props.publisher}</p>
                     <p>{props.desc}</p>
                </div>
            </div>
        )
    }


export default BookInfo;