import React, {useState} from "react";

export default function TextFrom(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!","success");
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!","success");
  }


  const [text, setText] = useState('');
  // text = "new text" wrong way to change state
  // setText = "new text" right way to change state


  return (
    <>
    <div className="container my-3 ">
      <h1 className="mb-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-info" onClick={handleUpClick}>Convert to Upper Case</button>
      <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleLoClick}>Convert to Lower Case</button>
      <button disabled={text.length===0} className="btn btn-info" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-info mx-2" onClick={handleExtraSpace}>Clear Extra Space</button>
      <button disabled={text.length===0} className="btn btn-info" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container">
      <h2>Your text summary</h2>
      <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>It will take {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview"}</p>
    </div>
    </>
    
  );
}