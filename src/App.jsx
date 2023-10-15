import React, { useState } from 'react'
import imgMobile from './assets/images/illustration-sign-up-mobile.svg'
import imgDesktop from './assets/images/illustration-sign-up-desktop.svg'
import imgThanks from './assets/images/icon-success.svg'

function App() {
  
  const [emails, setEmails] = useState('')
  const [invaEmails, setinvaEmails] = useState(false)
  const [subsForm, setSubsform] = useState(false)
  const successForm = () => {

  }

  const emailsInput = (event) => {
    setEmails(event.target.value )
    
  }

  const emailChecker = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  const btnClick = (btn) => {
    btn.preventDefault()
    if (emailChecker(emails)) {
        setSubsform(!subsForm)
      } else {
        setinvaEmails(!invaEmails)
      }
  }
  
  const btnDism = (btn) => {
    btn.preventDefault()
    setSubsform(!subsForm)
  }

  return (
    <>
      <div className='flex flex-col md:flex-row bg-[var(--whit)] max-w-[955px] m-auto p-6 rounded-3xl text-[--dark-sl-g] '>
        <div className={subsForm ? "hidden" : "flex flex-col justify-center items-center p-8  pt-16"} >
          <div>
            <h1 className='text-[56px] font-bold mb-2'>Stay updated!</h1>
            <p className='mb-6'>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className='mb-6'>
              <li className='text-base list-img before:mr-2'>Product discovery and building what matters</li>
              <li className='text-base list-img before:mr-2'>Measuring to ensure updates are a success</li>
              <li className='text-base list-img before:mr-2'>And much more!</li>
            </ul>
          </div>

          <form className="w-full h-full">
            <div className="flex flex-col">
              <label className='flex justify-between text-xs font-bold mb-2'>
                <p>Email address</p>
                <p className={invaEmails ? 'text-[var(--Tomato)]' : 'hidden'} >Valid Email required</p>
              </label>
              <input onChange={emailsInput} className='border border-solid border-color-[var(--grey)] rounded-lg p-4 mb-6' type="text" id='email'  placeholder='email@company.com'>
                </input>
            </div>
            <div className='flex flex-col'>
              <button onClick={btnClick} className='cursor-pointer bg-[var(--dark-sl-g)] text-[var(--whit)] font-bold p-4 mb-6 rounded-lg' id='submit-btn' >Subscribe to monthly newsletter</button>
            </div>
          </form>
        </div>
        <div className={subsForm ? "hidden" : 'flex justify-center'} id='imgForm'>
          <img src={imgMobile} className='md:hidden'/>
          <img src={imgDesktop} className='hidden md:flex' />
        </div>
        <div className={subsForm ? ' w-full h-full flex flex-col ': 'hidden'} id='confirmMessage'>
          <img src={imgThanks} className='w-20'/>
          <h2 className='text-5xl font-bold mt-8'>Thanks for subscribing!</h2>
          <a>A confirmation email has been sent to <span className='font-bold'>{emails}</span>. 
          Please open it and click the button inside to comfirm your subscription.</a>
          <button onClick={btnDism} className='cursor-pointer bg-[var(--dark-sl-g)] text-[var(--whit)] font-bold p-4 mb-6 rounded-lg' id="dismiss-message">Dismiss message</button>
          </div>
      </div>
    </>
  )
}

export default App
