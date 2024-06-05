import React,{useState} from 'react'
export default function Textar() {
    const handleUpClick=(event)=>{
        console.log("Clicked");
        const newtext=text;
        setText(newtext);
    }
    const handleOnchange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text,setText]=useState('Enter Text');
  return (
    <>
    <div className="form-floating light-hue-bg">
    <textarea class="form-control" value={text} id="floatingTextarea" onChange={handleOnchange}/>
    <label for="floatingTextarea">Comments</label>
    <button className="btn btn-primary" onClick={handleUpClick} >Add Comment</button>
    </div>
    <div className="container">
        <p>hi widndn.alnfulerfluabfe.fj </p>
    </div>
    </>
  );
}
