import React, { useContext, useState } from 'react'
import {StepsContext, UserContext} from '../../../pages/SurveyForm.jsx'
import './StepOne.css';

const StepOne = () => {
  const {step, setSteps} = useContext(StepsContext);
  const [invalid, setInvalid] = useState([]);

  // use the UserContext to send use typed data to the parent component
  const { firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAddress, position, setPosition, title, setTitle, phoneNumber, setPhoneNumber, country, setCountry, company, setCompany, website, setWebsite } = useContext(UserContext)

  // input validation function
  function handleValidation() {
    if(firstName !== '' && lastName !== '' && emailAddress !== '' && position !== '' && title !== '' && phoneNumber !== '' && country !== '' && company !== '' && website !== ''){
      setInvalid([])
      return true
    }else {
      // save all inputs in an object
      let inputs = {firstName, lastName, emailAddress, position, title, phoneNumber, country, company, website,};
      // creste an arry to save all invalid inpute
      let notValid = []
      // loop through the object of inputes to findout which is invalid
      for(const input in inputs) {
        // check if the input is invalid
        if(inputs[input] == ''){
          // add input in an array of invalid inputes
          notValid.push(input)
        }
      }
      // set invalid array to notValide
      setInvalid(notValid)
      // return false so we can now that validation is not complet.
      return false
    }

  }
  // got to the next step
  function handleNext() {
    if(handleValidation()){
      setSteps({position: 2, animationClass: 'card-container animate__animated animate__slideInRight'})
    }
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
            style={{width: "14.3%"}}
          ></div>
        </div>
        <p className="progress-text">
          Step 1 of <span>7</span>
        </p>
      </div>

      <div className='card-form-section'>
        <h2>YOUR DETAILS</h2>
        <p>Please enter your details</p>
        <p></p>
        <div className='form-row'>
          <div className="form-input-text-column">
            <label>First Name <span className="started-input">*</span></label>
            <br />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onKeyUp={() => handleValidation()}
              name="firstName"
              placeholder="Enter your First Name"
              required
            />

            {(invalid.includes('firstName')) &&
              <p className='text-danger animate__animated animate__bounceIn'>First name is required</p>
            } 
          </div>

          <div className="form-input-text-column">
            <label>Last Name <span className="started-input">*</span></label>
            <br />

            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onKeyUp={() => handleValidation()}
              name="lastName"
              placeholder="Enter last name"
              required
            />

            {(invalid.includes('lastName')) &&
              <p className='text-danger animate__animated animate__bounceIn'>Last name is required</p>
            } 
          </div>

          <div className="form-input-text-column">
            <label>Email Address <span className="started-input">*</span></label>
            <br />

            <input
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              onKeyUp={() => handleValidation()}
              name="emailAddress"
              placeholder="Enter email address"
              required
            />


            {(invalid.includes('emailAddress')) &&
              <p className='text-danger animate__animated animate__bounceIn'>Email is required</p>
            } 
          </div>

          <div className="form-input-text-column">
            <label>Position <span className="started-input">*</span></label>
            <br />

            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              onKeyUp={() => handleValidation()}
              name="position"
              placeholder="Enter position"
              required
            />

            {(invalid.includes('position')) &&
              <p className='text-danger animate__animated animate__bounceIn'>Position is required</p>
            } 
          </div>

          <div className="form-input-text-column">
            <label>Title <span className="started-input">*</span></label>
            <br />

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyUp={() => handleValidation()}
              name="title"
              placeholder="Enter title"
              required
            />

            {(invalid.includes('title')) &&
              <p className='text-danger animate__animated animate__bounceIn'>Title is required</p>
            } 
          </div>

          <div className="form-input-text-column">
            <label>Phone Number <span className="started-input">*</span></label>
            <br />

            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onKeyUp={() => handleValidation()}
              name="phoneNumber"
              placeholder="Enter phone number"
              required
            />

            {(invalid.includes('phoneNumber')) &&
              <p className='text-danger animate__animated animate__bounceIn'>Phone number is required</p>
            } 
          </div>

          <div className="form-input-text-column">
            <label>Country <span className="started-input">*</span></label>
            <br />

            <select
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              onClick={() => handleValidation()}
              name="country"
              required
            >
              <option value="Albania">Albania</option>
                <option value="Andorra">Andorra</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Belgium">Belgium</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia & Herzegovina
                </option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Canada">Canada</option>
                <option value="Croatia">Croatia</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Estonia">Estonia</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Greece">Greece</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="Ireland">Ireland</option>
                <option value="Ireland">India</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Latvia">Latvia</option>
                form-group
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macedonia, The Former Yugoslav Republic of">
                  North Macedonia
                </option>
                <option value="Malta">Malta</option>
                <option value="Moldova, Republic of">Moldova</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Norway">Norway</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Romania">Romania</option>
                <option value="Serbia">Serbia</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Slovenia">South Africa</option>
                <option value="Spain">Spain</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Turkey">Turkey</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
            </select>

            {(invalid.includes('country')) &&
              <p className='text-danger animate__animated animate__bounceIn'>Country is required</p>
            } 
          </div>

          <div className="form-input-text-column">
            <label>Company <span className="started-input">*</span></label>
            <br />

            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              onKeyUp={() => handleValidation()}
              name="company"
              placeholder="Enter company name"
              required
            />

            {(invalid.includes('company')) &&
              <p className='text-danger animate__animated animate__bounceIn'>Company is required</p>
            } 
          </div>

          <div className="form-input-text-column">
            <label>Company Website <span className="started-input">*</span></label>
            <br />

            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              onKeyUp={() => handleValidation()}
              name="website"
              placeholder="Enter website URL"
              required
            />

            {(invalid.includes('website')) &&
              <p className='text-danger animate__animated animate__bounceIn'>Website is required</p>
            } 
          </div>
        </div>
      </div>

      <div className="card-actions">
        {/* <p>You have spent 2 mins doing this form</p> */}
        <div>
          {/* <button class="btn btn-primary">
            Previous
          </button> */}
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

export default StepOne
