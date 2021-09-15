import React from "react";
import {translations} from './Dutch-to-English'
import './Card.css';

function Card({number, colour}){

    function reveal(){
        let wordElement = document.getElementsByClassName('word');
        let answerElement = document.getElementsByClassName('answer');
        wordElement[0].classList.toggle("displayBlockNone");
        answerElement[0].classList.toggle("displayBlockNone");
    }

    let word = translations[number].Dutch;
    let answer = translations[number].English;
    console.log(colour);
    
    const styleObj = {
        border: "3px solid "+ colour,
        boxShadow: "3px 3px 3px " + colour,
    }
    
    return (
        <div id="container" style={styleObj}>
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