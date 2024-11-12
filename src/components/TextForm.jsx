import React, { useState } from 'react'

const TextForm = (props) => {
  const [state, setState] = useState('')
  const onClickUpperHandler = () => {
    // console.log(`button triggered: ${state}`);
    const newText = state.toLocaleUpperCase()
    setState(newText)
  }
  const onClickLowerHandler = () => {
    const newText = state.toLocaleLowerCase()
    setState(newText)
  }
  const onChangeHandler = (e) => {
    // console.log('onchange triggered');
    setState(e.target.value)
  }
  const onClickClearHandler = () => {
    setState('')
  }
  return (
    <>
      <div className="container py-3">
        <form action="">
          <h3>{props.heading}</h3>
          <div className="mb-3">
            <textarea
              className="form-control mb-3"
              id="exampleFormControlTextarea1"
              rows={10}
              onChange={onChangeHandler}
              value={state}
              placeholder={props.placeholder}
            ></textarea>
          </div>
          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-primary bg-primary text-white"
              onClick={onClickUpperHandler}
            >
              Convert to uppercase
            </button>
            <button
              type="button"
              className="btn btn-primary bg-primary text-white"
              onClick={onClickLowerHandler}
            >
              Convert to lowercase
            </button>
            <button
              type="button"
              className="btn btn-primary bg-primary text-white"
              onClick={onClickClearHandler}
            >
              Clear
            </button>
          </div>
        </form>
        <h4>Your text summary</h4>
        <p>
          total word is <strong>{state.split(' ').length}</strong> and total
          characters <strong>{state.length}</strong>
        </p>
        <p>
          This paragraph will be read in{' '}
          <strong>{0.00546 * state.split(' ').length}</strong> Minutes
        </p>
        <h3>Preview of the upper text area</h3>
        <p>{state}</p>
      </div>
    </>
  )
}

export default TextForm
