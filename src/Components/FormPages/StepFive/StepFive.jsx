import React, { useContext, useState } from 'react'
import {StepsContext, UserContext} from '../../../pages/SurveyForm.jsx'
import './StepFive.css';

const StepFive = () => {

  const {step, setSteps} = useContext(StepsContext)
  const {haveIssues, setHaveIssues} =useContext(UserContext)

  const [isValid, setisValid] = useState(true)

  function handleNext() {
    if(haveIssues !== ''){
      setSteps({position: 6, animationClass: 'card-container animate__animated animate__slideInRight'})
    }else{
      setisValid(false)
    }
  }

  function handlePrevious() {
    setSteps({position: 4, animationClass: 'card-container animate__animated animate__slideInLeft'})
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
            style={{width: "71.5%"}}
          ></div>
        </div>
        <p className="progress-text">
          Step 5 of <span>7</span>
        </p>
      </div>

      <div className='card-form-section'>
        <h2>SYSTEM CHECK</h2>
        <p>Did you have any issues during the System Check? If yes, please state below: <span className="started-input">*</span></p>
        <p></p>
        <div className='form-row py-5'>
          <div className="form-text-area-column">
            <textarea
              type="text"
              name="Did_you_have_any_issues_during_the_System_Check?"
              placeholder="Enter comment here"
              value={haveIssues}
              onChange={(e) => setHaveIssues(e.target.value)}
              required
            />

            {(!isValid) && 
              <p className='text-danger animate__animated animate__bounceIn'>Comment is required</p>
            }
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

export default StepFive
