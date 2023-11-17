import React, { useState } from 'react'

export default function TextArea(props) {
    const [text, setText] = useState("This is demo text");
    const changeText = (event) => {
        setText(event.target.value);
    }
    function changeTextUpper() {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper","success");
    }
    const changeTextLowercase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower","success");
    }
    function changeTextSentenceCase(){
        let newText = text.toLowerCase();
        newText = newText.split(".");
        
        for(let i=0;i<newText.length;i++){
            newText[i] = newText[i].trim();
            newText[i] = newText[i].charAt(0).toUpperCase()+newText[i].substring(1);
        }
        newText = newText.join(". ");
        setText(newText);
        props.showAlert("Converted to Sentence Case","success");
    }
    const removeBlanks = (array)=>{
        let newArray = [];
        let index=0;
        for(let i=0;i<array.length;i++){
            if(array[i]==='' || array[i]==='\\n'){
                continue;
            }
            newArray[index] = array[i];
            index++;
        }
        return newArray;
    }
    return (
        <>
            <div className="container mt-4">
                <h1>{props.title}</h1>
                <textarea className={`form-control bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} name="" onChange={changeText} value={text} id="" cols="30" rows="10"></textarea>
                <div className="d-flex justify-content-center">
                    <button onClick={changeTextUpper} className="btn btn-primary mt-2">Convert to Upper</button>
                    <button onClick={changeTextLowercase} className="btn btn-primary mt-2">Convert to Lower</button>
                    <button onClick={changeTextSentenceCase} className="btn btn-primary mt-2">Convert to Sentence</button>
                </div>
            </div>
            <div className="container mt-2">
                <p>Your Text Has {removeBlanks(text.split(" ")).length} Words and {text.length} Characters</p>
                <p>Total time need for read text {removeBlanks(text.split(" ")).length*0.200} Seconds</p>
            </div>

        </>
    )
}
TextArea.defaultProps = {
    title: "Enter Text Here",
} 