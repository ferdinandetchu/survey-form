import React, { useContext, useState } from 'react'
import {StepsContext, UserContext} from '../../../pages/SurveyForm.jsx'
import './StepTwo.css';

const StepTwo = () => {
  const {step, setSteps} = useContext(StepsContext);
  const {overallSystemCheck, setOverallSystemCheck} = useContext(UserContext);

  const [isValid, setIsValid] = useState(true)

  function handleNext() {
    if(overallSystemCheck !== '') {
      setSteps({position: 3, animationClass: 'card-container animate__animated animate__slideInRight'})
    }else{
      setIsValid(false)
    }
  }

  function handlePrevious() {
    setSteps({position: 1, animationClass: 'card-container animate__animated animate__slideInLeft'})
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
            style={{width: "28.6%"}}
          ></div>
        </div>
        <p className="progress-text">
          Step 2 of <span>7</span>
        </p>
      </div>

      <div className='card-form-section'>
        <h2>SYSTEM CHECK</h2>
        <p>How was the overall System Check experience?</p>
        {(!isValid) && 
          <p className='text-danger animate__animated animate__bounceIn'>Please select one of the options</p>
        }
        <div className='form-row py-5'>
          <div className="form-input-radio-labels">
            <label>Very Poor</label>
            <label>Poor</label>
            <label className=''>OK</label>
            <label className=''>Good</label>
            <label>Very Good</label>
            
          </div>

          <div className="form-input-radio">
            <input
              type="radio"
              name="How_was_the_overall_System_Check_experience?"
              value="very poor"
              onChange={(e) => setOverallSystemCheck(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_was_the_overall_System_Check_experience?"
              value="poor"
              onChange={(e) => setOverallSystemCheck(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_was_the_overall_System_Check_experience?"
              value="ok"
              onChange={(e) => setOverallSystemCheck(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_was_the_overall_System_Check_experience?"
              value="good"
              onChange={(e) => setOverallSystemCheck(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_was_the_overall_System_Check_experience?"
              value="very good"
              onChange={(e) => setOverallSystemCheck(e.target.value)}
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

export default StepTwo
