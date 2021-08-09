import React from "react";
import {translations} from './Dutch-to-English'
import './Card.css';

function Card(){
    function reveal(){
        let wordElement = document.getElementsByClassName('word');
        let answerElement = document.getElementsByClassName('answer');
        wordElement[0].classList.toggle("displayBlockNone");
        answerElement[0].classList.toggle("displayBlockNone");
    } 
    let number = Math.floor((Math.random() * 998));
    let word = translations[number].Dutch;
    let answer = translations[number].English;
    return (
        <div>
            <div >
                <h1 className="word" onClick={reveal}> 
                    {word}
                </h1>
            </div>
            <div >
                <h1 className="answer displayBlockNone" onClick={reveal}> 
                    {answer}
                </h1>
            </div>
        </div>
    );
}
export default Card;