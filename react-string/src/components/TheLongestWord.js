import React, { useState } from "react";
import './style/MyStyle.css';

function TheLongestWord() {
    const [inputStr, setInputStr] = useState('');
    const [outputStr, setOutputStr] = useState('');

    const findLongestWord = (str) => {
        let words = str.split(' ');
        let longestWord = '';

        words.forEach((word) => {
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        });

        return longestWord;
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        setInputStr(inputValue);
        setOutputStr(findLongestWord(inputValue));
    };

    return (
        <>
        <div className="component">
            <h1 className="header">Find the Longest Word</h1>
            <input 
                type="text"
                placeholder="Enter your text"
                value={inputStr}
                onChange={handleInputChange}
            />

            <div className="word">
               The longest word is: 
                <span className="intro">
                    {outputStr}
                </span>
            </div>
        </div>
        </>
    );
}

export default TheLongestWord;