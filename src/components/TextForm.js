import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event)=>
    {
        setText(event.target.value);
    }

    const handleUpClick = ()=>
    {
        console.log("Upper Case clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.displayAlert(["Success:"," Changed to UPPER-CASE"],"success")
    }
    const handleLowClick = ()=>
    {
        console.log("Lower Case clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.displayAlert(["Success:"," Changed to lower-case"],"success")
    }
    const handleClearClick = ()=>
    {
        console.log("Text Cleared");
        setText("");
        props.displayAlert(["Success:"," Text Cleared"],"success")
    }
    
    const [text, setText] = useState("");
    
  return (
    <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" style={{color: props.mode === 'dark'?'white':'black', backgroundColor: props.mode === 'dark'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className={`btn btn-outline-${(props.mode === 'dark')?'light':'dark'}`} onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className={`btn btn-outline-${(props.mode === 'dark')?'light':'dark'} mx-3`} onClick={handleLowClick}>Convert to lowercase</button>
            <button className={`btn btn-outline-${(props.mode === 'dark')?'light':'dark'}`} onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h3> Text Summary </h3>
            <p>{(text.length===0)?0:text.split(" ").length} words and {text.length} characters ({(text.length===0)?0:text.split(" ").length*0.008} minutes read)</p>
            <h3>Preview</h3>
            <p>{(text.length===0)?"Enter Text to Preview":text}</p>
        </div>

    </>
  )
}
