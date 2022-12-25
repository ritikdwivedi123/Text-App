import React, {useState} from 'react'

export default function TextBox(props) {
    const [Text, setText] = useState('');
    const HandleOnUpClick=()=>{
        console.log('button is clicked');
        let newText= Text.toUpperCase();
        setText(newText)
        props.showAlert('Converted in UpperCase', 'success')
    }
    const HandleOnLoClick=()=>{
      console.log('button is clicked');
      let newText= Text.toLowerCase();
      setText(newText)
      props.showAlert('Converted in LowerCase', 'success')
  }

  const HandleOnInverseClick=()=>{
    let newText = "";
    for (let i = Text.length - 1; i >= 0; i--) {
      newText += Text[i];
    }
    setText(newText)
    props.showAlert('Converted in reverse data', 'success') 
}
const HandleOnCopy=()=>{
  var Text = document.getElementById("myBox");
  Text.select();
  navigator.clipboard.writeText(Text.value);
  document.getSelection().removeAllRanges();
  props.showAlert("Copied to clipboard", "success");
}

    const HandleOnChange=(event)=>{
        console.log('on change');
        setText(event.target.value)
    }

  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
              <h1>{props.Heading} </h1>
            <div className="mb-3">
                  <textarea className="form-control my-2" value={Text} style={{background: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} onChange= {HandleOnChange}id="myBox" rows="8"></textarea>
                  <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleOnUpClick}>Convert to upperCase</button>
                  <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleOnLoClick}>Convert to lowerCase</button>
                  <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleOnInverseClick}>Convert to Inverse</button>
                  <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleOnCopy}>Copy to clipboard</button>

            </div>
            <div className="container" >
                  {Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters
            </div>
            <div className="container">
                <p> {0.008 *Text.split(" ").filter((element)=>{return element.length!==0}).length } minutes read</p>
            </div>

        </div>
    </>
  )
}
