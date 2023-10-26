import React, { useEffect, useState } from "react";
import './style/MyStyle.css';

function CounterOfVowels() {
    const [inputText, setInputText] = useState('');
    const [vowelCount, setVowelcount] = useState(0);


    const countVowels = (txt) => {
        const vowels = 'aeiouAEIOU'; 
        let counter = 0;

        for (let i = 0; i < txt.length; i++) {
            if (vowels.includes(txt[i])) { 
                counter ++;
            }
        }
    
        return counter;
    }

    const handleInputChange = (e) => {
        const inputValue = e.target.value; 
        setInputText(inputValue);
    }

    useEffect(() => {
        setTimeout(() => {
            setVowelcount(
                countVowels(inputText, vowelCount)
            );
        }, 1000);
    });

    return (
        <>
        <div className="component">
            <h1 className="header">Counter of vowels</h1>
            <input 
                type="text"
                placeholder="Enter your text"
                value={inputText}
                onChange={handleInputChange}
            />

            <div className="counter">
                Number of vowels: 
                <span className="intro">
                    {vowelCount}
                </span>
                </div>
        </div>
        </>
    );
}

export default CounterOfVowels;