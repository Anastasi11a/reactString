import React, { useEffect, useState } from "react";
import './style/MyStyle.css';

function CountSubstringOccurrences() {
    const [inputString, setInputStr] = useState('');
    const [subStr, setSubStr] = useState('');
    const [occurrencesCount, setOccurrencesCount] = useState(0);

    
    const countSubstringOccurrences = (str, substr) => {
        const strLower = str.toLowerCase();
        const substrLower = substr.toLowerCase();

        if (!strLower || !substrLower) {
            return 0;
        }

        const regex = new RegExp(substrLower, 'g');
        const matches = strLower.match(regex);

        return matches ? matches.length : 0;
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setInputStr(inputValue);
    };

    const handleSubInputChange = (e) => {
        const inputValue = e.target.value;
        setSubStr(inputValue);
    };

    useEffect(() => {
        const timmeoutId = setTimeout(() => {
            setOccurrencesCount(
                countSubstringOccurrences(inputString, subStr)
            );
        }, 500);

        return () => clearTimeout(timmeoutId);
    }, [inputString, subStr]);


    return (
        <>
        <div className="component">
            <h1 className="header">The Counter occurrences of a substring</h1>
            <input 
                type="text"
                placeholder="Enter your text"
                value={inputString}
                onChange={handleInputChange}
            />
            <input 
                type="text"
                placeholder="substring"
                value={subStr}
                onChange={handleSubInputChange}
            />

            <div className="substring">
                The number of occurrences of the substring within the string: 
                <span className="intro">
                    {occurrencesCount}
                </span>
            </div>
        </div>
        </>
    );
}

export default CountSubstringOccurrences;