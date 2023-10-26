import React, { useState } from "react";
import './style/MyStyle.css';

function Whitespace() {
    const [inputStr, setInputStr] = useState('');
    const [removedStr, setRemovedStr] = useState('');

    const removeWhitespace = (str) => {
        return str.replace(/\s+/g, '');
    };

    const handleInputChange = (e) => {
        const inputVal = e.target.value;
        setInputStr(inputVal);
        setRemovedStr(
            removeWhitespace(inputVal)
        );
    };

    return (
        <>
        <div className="component">
            <h1 className="header">Remove Whitespace from a String</h1>
            <input 
                type="text"
                placeholder="Enter your text"
                value={inputStr}
                onChange={handleInputChange}
            />

            <div className="whitespace">
                String without whitespace:
                <span className="intro">
                    {removedStr}
                </span>
            </div>
        </div>
        </>
    );
}

export default Whitespace;