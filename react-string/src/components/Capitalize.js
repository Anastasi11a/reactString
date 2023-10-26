import React, { useState } from "react";
import './style/MyStyle.css';

function Capitalize() {
    const [firstLetter, setFirstLetter] = useState('');
    const [capitalizedLetter, setCapitalizedLetter] = useState('');
    const [convertedStr, setConvertedStr] = useState('');

    const capitalizedFirstLetter = (string) => {
        let splittedString = string.split(' ');
        let newString = 
            splittedString.map((splittedString) => {
                return splittedString.charAt(0).toUpperCase() + splittedString.slice(1);
        });
        return newString.join(' ');
    };

    const convertedToUppercase = (str) => {
        return str.toUpperCase();
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        setFirstLetter(inputValue);
        setCapitalizedLetter(capitalizedFirstLetter(inputValue));
        setConvertedStr(convertedToUppercase(inputValue));
    };

    return (
        <>
        <div className="component">
            <h1 className="header">Capitalize the First Letter</h1>
            <input 
                type="text"
                placeholder="Enter your text"
                value={firstLetter}
                onChange={handleInputChange}
            />

            <div className="capitalize">
               Your new string with first letter capitalized: 
                <span className="intro">
                    {capitalizedLetter}
                </span>
                <br />
                Your converted string to UpperCase:
                <span className="intro">
                    {convertedStr}
                </span>
            </div>
        </div>
        </>
    );
}

export default Capitalize;