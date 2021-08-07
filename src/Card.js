import React from "react";
import {translations} from './Dutch-to-English'



function Card(){
    // function reveal(element){
    //     let targetElement = document.getElementsByClassName(element);
    //     console.log(targetElement)
    //     switch (targetElement[0].parentNode.style.display){
    //         case 'block':
    //             targetElement[0].parentNode.style.display = "none";
    //             break;
    //         case "none":
    //             targetElement[0].parentNode.style.display = "block";
    //     }
    // } PROBLEM IS YOU CAN'T GET PARENT NODE OF AN 'HTMLCOLLECTION' WHICH IS WHAT IT READS THE ELEMENT AS - NEED TO RESEARCH REACT EVENTS
    let number = Math.floor((Math.random() * 998));
    let word = translations[number].Dutch;
    let answer = translations[number].English;
    return (
        <div>
            <div className="word">
                <h1 onClick={console.log("word")} >
                    {word}
                </h1>
            </div>
            <div className="answer">
                <h1 onClick={console.log("answer")}>
                    {answer}
                </h1>
            </div>
        </div>
    );
}
export default Card;

// ALT: <h1 onClick={reveal('answer')}>  <h1 onClick={reveal('word')}>

// ALT: <h1 onClick={console.log("word")} > <h1 onClick={console.log("answer")}>