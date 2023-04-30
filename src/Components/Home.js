import React from 'react'
import { useState } from 'react';
export default function Home() {

const [text, setText] = useState('Enter your text to play');     
const upparCaseHandler = () => {
    const upparCase = text.toUpperCase();
    setText(upparCase);
}
const lowerCaseHandler = () => {
    const upparCase = text.toLowerCase();
    setText(upparCase);
}
const onChangeHandler = (evnet) => {
    console.log("change handler");
    
    if(evnet.target.value!=="")
    setText(evnet.target.value);
    else
    setText('');
}
  return ( 
    <>
    <div className='container pt-5'>
    <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
    <textarea onChange={onChangeHandler} className="form-control" value={text} id="exampleFormControlTextarea1" rows="6"></textarea>
    </div>
    <div className='my-2'>
    <button type="button" onClick={upparCaseHandler} className="mx-1 btn btn-primary">Uppar Case</button>
    <button type="button" onClick={lowerCaseHandler} className="mx-1 btn btn-secondary">Lower Case</button>
    <button type="button" className="mx-1 btn btn-success">Success</button>
    <button type="button" className="mx-1 btn btn-danger">Danger</button>
    <button type="button" className="mx-1 btn btn-warning">Warning</button>
    <button type="button" className="mx-1 btn btn-info">Info</button>
    <button type="button" className="mx-1 btn btn-light">Light</button>
    <button type="button" className="mx-1 btn btn-dark">Dark</button>

    
    </div>

    </div>
    </>
  )
}
