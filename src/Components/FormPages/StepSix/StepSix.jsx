import React, { useContext, useState } from 'react'
import {StepsContext, UserContext} from '../../../pages/SurveyForm.jsx'
import './StepSix.css';

const StepSix = () => {

  const {step, setSteps} = useContext(StepsContext)
  const {effective, setEffective} =useContext(UserContext)

  const [isValid, setisValid] = useState(true)

  function handleNext() {
    if(effective !== ''){
      setSteps({position: 7, animationClass: 'card-container animate__animated animate__slideInRight'})
    }else{
      setisValid(false)
    }
  }

  function handlePrevious() {
    setSteps({position: 5, animationClass: 'card-container animate__animated animate__slideInLeft'})
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
            style={{width: "85.8%"}}
          ></div>
        </div>
        <p className="progress-text">
          Step 6 of <span>7</span>
        </p>
      </div>

      <div className='card-form-section'>
        <h2>SYSTEM CHECK</h2>
        <p>How effective do you think the environment checks were?</p>
        {(!isValid) && 
          <p className='text-danger animate__animated animate__bounceIn'>Please select one of the options</p>
        }
        <div className='form-row py-5'>
          <div className="form-input-radio-labels">
            <label>Very Poor</label>
            <label>Quite Poor</label>
            <label className=''>Acceptable</label>
            <label className=''>Good</label>
            <label>Extremely Good</label>
            
          </div>

          <div className="form-input-radio">
            <input
              type="radio"
              name="How_effective_do_you_think_the_environment_checks_were?"
              value="very poor"
              required
            />

            <input
              type="radio"
              name="How_effective_do_you_think_the_environment_checks_were?"
              value="quite poor"
              onChange={(e) => setEffective(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_effective_do_you_think_the_environment_checks_were?"
              value="acceptable"
              onChange={(e) => setEffective(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_effective_do_you_think_the_environment_checks_were?"
              value="good"
              onChange={(e) => setEffective(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_effective_do_you_think_the_environment_checks_were?"
              value="extremly good"
              onChange={(e) => setEffective(e.target.value)}
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

export default StepSix
