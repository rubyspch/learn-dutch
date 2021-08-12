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
    // function colourAdd(){
    //     console.log(colour);
    //     const divContainer = document.getElementById('container');
    //     divContainer.style.border = `3px solid rgb(${colour})`;
    //     divContainer.style.boxShadow = `3px 3px 3px rgb(${colour})`;
    // }
    // window.onload = colourAdd();
    return (
        <div id="container" style={{border:`3px solid rgb(${colour})`, boxShadow: `3px 3px 3px rgb(${colour})`}}>
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