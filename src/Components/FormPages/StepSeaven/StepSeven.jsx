import React, { useContext, useState } from 'react'
import {StepsContext, UserContext} from '../../../pages/SurveyForm.jsx'
import './StepSeaven.css';

const StepSeven = () => {

  const {step, setSteps} = useContext(StepsContext)
  const {firstName, lastName, emailAddress, position, title, phoneNumber, country, company, website, overallSystemCheck, clearSystemCheck, easyComplete, haveIssues, effective, userFriendly, setUserFriendly} = useContext(UserContext)

  const [isValid, setisValid] = useState(true)

  function handleSubmit() {
    if(userFriendly !== ''){
      let data = {
        firstName,
        lastName,
        emailAddress,
        position,
        title,
        phoneNumber,
        country,
        company,
        website,
        How_was_the_overall_System_Check_experience: overallSystemCheck,
        How_clear_were_the_System_Check_instructions: clearSystemCheck,
        How_easy_to_complete_were_the_System_Check_steps: easyComplete,
        Did_you_have_any_issues_during_the_System_Check: haveIssues,
        How_effective_do_you_think_the_environment_checks_were: effective,
        How_user_friendly_was_the_System_Check_user_interface: userFriendly
      };
      // console.log(data)
      try{
        var http = new XMLHttpRequest();
        http.open("POST", "https://script.google.com/macros/s/AKfycbxEazd0biScOBI1ni3lWCgcV9WZcPc9-o955lT-Lt-OmT7jvkHZXXyB8v1NLeAsNclddg/exec", true);
        http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        http.send(data);
        http.onload = function() {
          // alert(http.responseText);
          setSteps({position: 8, animationClass: 'card-container animate__animated animate__flip'})
        }
      }catch(error){
        console.log(error)
      }
    }else{
      setisValid(false)
    }
  }

  function handlePrevious() {
    setSteps({position: 6, animationClass: 'card-container animate__animated animate__slideInLeft'})
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
            style={{width: "100%"}}
          ></div>
        </div>
        <p className="progress-text">
          Step 7 of <span>7</span>
        </p>
      </div>

      <div className='card-form-section'>
        <h2>SYSTEM CHECK</h2>
        <p>How user-friendly was the System Check user interface?</p>
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
              name="How_user-friendly_was_the_System_Check_user_interface?"
              value="very poor"
              onChange={(e) => setUserFriendly(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_user-friendly_was_the_System_Check_user_interface?"
              value="quite poor"
              onChange={(e) => setUserFriendly(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_user-friendly_was_the_System_Check_user_interface?"
              value="acceptable"
              onChange={(e) => setUserFriendly(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_user-friendly_was_the_System_Check_user_interface?"
              value="good"
              onChange={(e) => setUserFriendly(e.target.value)}
              required
            />

            <input
              type="radio"
              name="How_user-friendly_was_the_System_Check_user_interface?"
              value="extremly good"
              onChange={(e) => setUserFriendly(e.target.value)}
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
            onClick={() =>{handleSubmit()}}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default StepSeven
