import React, { createContext, useState } from 'react'
import StepFive from '../Components/FormPages/StepFive/StepFive'
import StepFour from '../Components/FormPages/StepFour/StepFour'
import StepOne from '../Components/FormPages/StepOne/StepOne'
import StepSeven from '../Components/FormPages/StepSeaven/StepSeven'
import StepSix from '../Components/FormPages/StepSix/StepSix'
import StepThree from '../Components/FormPages/StepThree/StepThree'
import StepTwo from '../Components/FormPages/StepTwo/StepTwo'
import SuccessPage from '../Components/FormPages/SuccessPage/SuccessPage'

import './SurveyForm.css'

export const StepsContext = createContext();
export const UserContext = createContext();

const SurveyForm = () => {
  const [step, setSteps] = useState({position: 1, animationClass: 'card-container animate__animated animate__slideInRight'});
  // survay data states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [position, setPosition] = useState('');
  const [title, setTitle] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [overallSystemCheck, setOverallSystemCheck] = useState('');
  const [clearSystemCheck, setClearSystemCheck] = useState('');
  const [easyComplete, setEasyComplete] = useState('');
  const [haveIssues, setHaveIssues] = useState('');
  const [effective, setEffective] = useState('');
  const [userFriendly, setUserFriendly] = useState('');

  return(
    <div className='survey-container'>
      <StepsContext.Provider value={{step, setSteps}}>
        <UserContext.Provider value={{firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAddress, position, setPosition, title, setTitle, phoneNumber, setPhoneNumber, country, setCountry, company, setCompany, website, setWebsite, overallSystemCheck, setOverallSystemCheck, clearSystemCheck, setClearSystemCheck, easyComplete, setEasyComplete, haveIssues, setHaveIssues, effective, setEffective, userFriendly, setUserFriendly}}>
          {(step.position === 1) && 
            <StepOne />
          }

          {(step.position === 2) && 
            <StepTwo />
          }

          {(step.position === 3) && 
            <StepThree />
          }

          {(step.position === 4) && 
            <StepFour />
          }

          {(step.position === 5) && 
            <StepFive />
          }

          {(step.position === 6) && 
            <StepSix />
          }

          {(step.position === 7) && 
            <StepSeven />
          }

          {(step.position === 8) && 
            <SuccessPage /> 
          }
        </UserContext.Provider>
      </StepsContext.Provider>
    </div>
  )
}

export default SurveyForm
