import React, { useState } from "react";

export default function TextForm(props) {
    

    const handleOnChange = (event) => {       //For Writing in Textbox
        setText(event.target.value)
    }

    const handleUpClick = () => {             //UpperCase
      let textBox = text.toUpperCase();
      setText(textBox)
      props.showAlert("Converted to Uppercase", 'success');
  }

    const handleLoClick = () => {             //LowerCase
        let textBox = text.toLowerCase();
        setText(textBox)
        props.showAlert("Converted to Lowercase", 'success');
    }

    const handleCopyClick = () => {           //Copy To cLipboard
      let text = document.getElementById('myBox')
      text.select()
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied To Clipboard", "success")
    }

    const handleSpaceRemoveClick = () => {
      // eslint-disable-next-line
      let newText = text.split(/[  ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removd.", "success");
    }

    const clearClick = () => {
      let textBox = ''
      setText(textBox)
      props.showAlert("Text Cleared", 'success');
    }

  const [text, setText] = useState('');
  return (
    <div style={{color: props.mode === 'dark'?'white':'black'}}>
      <div className="container" >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" 
          value={text} 
          onChange={handleOnChange} id="myBox" 
          style={{
            backgroundColor: props.mode === 'dark'?'#212109':'white', 
            color: props.mode === 'dark'?'white':'black'}}
          rows="8" 
          placeholder="Enter Your Text To Change Into Uppercase"></textarea>
        </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Covert To LowerCase</button>
          <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleSpaceRemoveClick}>Remove Extra Whitespace</button>
          <button className="btn btn-primary mx-2" onClick={clearClick}>Clear</button>
      </div>
      <div className="container my-3">
          <h1>Your Text Summary</h1>
          {/* <p>{text.split(" ").length} words and {text.length} characters.</p>
          <p>{0.008 * text.split(" ").length} Minutes read.</p> */}
          <h2>Preview</h2>
          <p>{text.length>0?text:'Write something in the textbox above to preview it.'}</p>
      </div>
    </div>
  );
}
