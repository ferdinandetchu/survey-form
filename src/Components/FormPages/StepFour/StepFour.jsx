import React, { useContext, useState } from 'react'
import {StepsContext, UserContext} from '../../../pages/SurveyForm.jsx'
import './StepFour.css';

const StepFour = () => {
  const {step, setSteps} = useContext(StepsContext)
  const {easyComplete, setEasyComplete} =useContext(UserContext)

  const [isValid, setisValid] = useState(true)

  function handleNext() {
    if(easyComplete){
      setSteps({position: 5, animationClass: 'card-container animate__animated animate__slideInRight'})
    }else {
      setisValid(false)
    }
  }

  function handlePrevious() {
    setSteps({position: 3, animationClass: 'card-container animate__animated animate__slideInLeft'})
  }

  return (
    <div className={step.animationClass}>
      <div className="card-header">
        <h1>DEMO SURVEY</h1>
      </div>

      <div className="card-progress">
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="1"
            aria-valuemin="0"
            aria-valuemax="7"
            style={{width: "57.2%"}}
          ></div>
        </div>
        <p className="progress-text">
          Step 4 of <span>7</span>
        </p>
      </div>

      <div className='card-form-section'>
        <h2>SYSTEM CHECK</h2>
        <p>How clear were the System Check instructions?</p>
        {(!isValid) && 
          <p className='text-danger animate__animated animate__bounceIn'>Please select one of the options</p>
        }
        <div className='form-row py-5'>
          <div className="form-input-radio-labels">
            <label>Very Easy</label>
            <label>Easy</label>
            <label className=''>OK</label>
            <label className=''>Difficult</label>
            <label>Very Difficult</label>
            
          </div>

          <div className="form-input-radio">
            <input
              type="radio"
              name="How_clear_were_the_System_Check_instructions?"
              value="very easy"
              onChange={(e) => setEasyComplete(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_clear_were_the_System_Check_instructions?"
              value="easy"
              onChange={(e) => setEasyComplete(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_clear_were_the_System_Check_instructions?"
              value="ok"
              onChange={(e) => setEasyComplete(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_clear_were_the_System_Check_instructions?"
              value="difficult"
              onChange={(e) => setEasyComplete(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_clear_were_the_System_Check_instructions?"
              value="very difficult"
              onChange={(e) => setEasyComplete(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      <div className="card-actions">
        {/* <p>You have spent 2 mins doing this form</p> */}
        <div>
          <button 
            className="btn btn-primary mx-2 rounded-5 px-6"
            onClick={() =>{handlePrevious()}}
          >
            Previous
          </button>
          <button
            className="btn btn-primary rounded-5 px-6"
            onClick={() =>{handleNext()}}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default StepFour
