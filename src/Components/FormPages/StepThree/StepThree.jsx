  import React, { useContext, useState} from 'react'
  import {StepsContext, UserContext} from '../../../pages/SurveyForm.jsx'
import './StepThree.css';

const StepThree = () => {

  const {step, setSteps} = useContext(StepsContext)
  const {clearSystemCheck, setClearSystemCheck} =useContext(UserContext)

  const [isValide, setIsValide] = useState(true)

  function handleNext() {
    if(clearSystemCheck !== ''){
      setSteps({position: 4, animationClass: 'card-container animate__animated animate__slideInRight'})
    }else{
      setIsValide(false)
    }
  }

  function handlePrevious() {
    setSteps({position: 2, animationClass: 'card-container animate__animated animate__slideInLeft'})
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
            style={{width: "42.9%"}}
          ></div>
        </div>
        <p className="progress-text">
          Step 3 of <span>7</span>
        </p>
      </div>

      <div className='card-form-section'>
        <h2>SYSTEM CHECK</h2>
        <p>How clear were the System Check instructions?</p>
        {(!isValide) && 
          <p className='text-danger animate__animated animate__bounceIn'>Please select one of the options</p>
        }
        <div className='form-row py-5'>
          <div className="form-input-radio-labels">
            <label>Very poor</label>
            <label>Poor</label>
            <label className=''>OK</label>
            <label className=''>Good</label>
            <label>Very good</label>
            
          </div>

          <div className="form-input-radio">
            <input
              type="radio"
              name="How_clear_were_the_System_Check_instructions?"
              value="very poor"
              onChange={(e) => setClearSystemCheck(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_clear_were_the_System_Check_instructions?"
              value="poor"
              onChange={(e) => setClearSystemCheck(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_clear_were_the_System_Check_instructions?"
              value="ok"
              onChange={(e) => setClearSystemCheck(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_clear_were_the_System_Check_instructions?"
              value="good"
              onChange={(e) => setClearSystemCheck(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_clear_were_the_System_Check_instructions?"
              value="very good"
              onChange={(e) => setClearSystemCheck(e.target.value)}
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

export default StepThree
