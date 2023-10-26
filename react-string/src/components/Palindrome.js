import React, { useState } from "react";
import './style/MyStyle.css';

function Palindrome() {
    const [inputPalindrome, setInputPalindrome] = useState('');
    const [checkPali, setCheckPali] = useState(false);

    const checkPalindrome = (val) => {
        let palindrome = val.replace(/[^a-zA-Z]/g, '').toLowerCase();
        const reversedStr = palindrome.split('').reverse().join('');
        return palindrome === reversedStr;
    };

    const handleInputChange = (e) => {
        const inputVal = e.target.value;
        setInputPalindrome(inputVal);
        setCheckPali(checkPalindrome(inputVal));
    };

    return (
        <>
        <div className="component">
            <h1 className="header">Check for Palindrome</h1>
            <input 
                type="text"
                placeholder="Enter your palindrome"
                value={inputPalindrome}
                onChange={handleInputChange}
            />

            <div className="palindrome">
               Is this a palindrome?
               <span className="intro">
                    {checkPali ? 'true' : 'false'}
                </span>
            </div>
        </div>
        </>
    );

}

export default Palindrome;