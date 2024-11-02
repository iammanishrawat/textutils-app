import React, { useState } from 'react'

const TextForm = (props) => {
    const [state, setState] = useState('')
    const onClickHandler = () => {
        // console.log(`button triggered: ${state}`);
        const newText = state.toLocaleUpperCase()
        setState(newText)
    }
    const onChangeHandler = (e) => {
        // console.log('onchange triggered');
        setState(e.target.value)
    }
  return (
    <form action="">
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows={10} onChange={onChangeHandler} value={state} placeholder={props.placeholder}></textarea>
            <button type='button' className='btn btn-primary bg-primary text-white' onClick={onClickHandler}>
                Convert to uppercase
            </button>
        </div>
    </form>
  )
}

export default TextForm