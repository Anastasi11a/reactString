import React, { useState } from "react";
import './style/MyStyle.css';

function ReverseString() {
    const [inputString, setInputString] = useState('');
    const [reversedString, setReversedString] = useState('');

    const reversMessage = (msg) => { 
        let message = '';

        for (let i = msg.length - 1; i >= 0; i--) {
            message += msg[i];
        }

        return message;
    }

    const handleInputChange = (e) => {
        const inputMessage = e.target.value;
        setInputString(inputMessage);
        setReversedString(reversMessage(inputMessage));
    }

    return (
        <>
        <div className="component">
            <h1 className="header">Reverse String</h1>
            <input 
                type="text"
                placeholder="Enter your text"
                value={inputString}
                onChange={handleInputChange}
            />

            <div className="string">
                Your reverse string: 
                <span className="intro">
                    {reversedString}
                </span>
            </div>
        </div>
        </>
    );
}

export default ReverseString;