import React, { useContext } from 'react'
import {StepsContext} from '../../../pages/SurveyForm.jsx'
import './SuccessPage.css';

const SuccessPage = () => {

  const {step, setSteps} = useContext(StepsContext)

  return (
    <div className={step.animationClass}>
      <div className="card-header">
        <h1>DEMO SURVEY</h1>
      </div>

      <div className='card-form-section'>
        <h2 className='text-center'>SUCCESS!</h2>
        <div className="d-flex justify-content-center my-4">
            {/* <i class="fa-solid fa-check"></i> */}
          <i className="fa-regular fa-thumbs-up fa-6x text-success"></i>
        </div>
        <p className='text-center'>Form submitted. Thanks for your feedback!</p>
      </div>

      <div className="d-flex justify-content-center my-4">
        {/* <p>You have spent 2 mins doing this form</p> */}
        <div>
          {/* <button 
            className="btn btn-primary mx-2 rounded-5 px-6"
            // onClick={() =>{handlePrevious()}}
          >
            Previous
          </button> */}
          <button
            className="btn btn-primary rounded-5 px-6"
            // onClick={() =>{handleNext()}}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage
