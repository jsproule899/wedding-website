import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/navigation/NavBar';
import { useSearchParams } from 'react-router';


function App() {
  const [daysLeft, setDaysLeft] = useState(0);
  const [daysTogether, setDaysTogether] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const guestOne = searchParams.get("guestOne");
  const guestTwo = searchParams.get("guestTwo");
  const plusOne = searchParams.get("plusOne");
  const family = searchParams.get("family");

  function calcDays() {
    const today = Date.now();
    const weddingDay = new Date("2026-08-09T13:00:00");
    const dayStartedDating = new Date("2009-12-17");

    let daysTogetherMilliseconds = today - +dayStartedDating;
    let daysTogether = Math.ceil(daysTogetherMilliseconds / (1000 * 60 * 60 * 24));
    setDaysTogether(daysTogether);

    let daysLeftInMilliseconds = +weddingDay - today;
    let daysLeft = Math.ceil(daysLeftInMilliseconds / (1000 * 60 * 60 * 24));
    setDaysLeft(daysLeft);

    return daysLeft;
  }

  useEffect(() => {
    calcDays();
  }, [])

  return (
    <>
      <NavBar />
      <div id='Home' className="card">
        <h1 className='text-7xl sm:text-9xl [word-spacing:99999px] mb-10'>We're Getting Married</h1>
        {guestOne && (<h2 className='text-4xl sm:text-6xl m-8 capitalize'>{guestOne}{guestTwo && family ? `, ${guestTwo}` : guestTwo && ` & ${guestTwo}`} {plusOne && " & Plus One"} {family && " & Children"} </h2>)}
        <h2 className='text-3xl sm:text-4xl'>You're invited to the wedding of</h2>
        <h1 className='text-6xl sm:text-8xl mb-2'>Rachael & Josh</h1>
        <hr className='w-sm sm:w-lg border mx-auto' />
        <h2 className='text-4xl sm:text-5xl m-3'>Sunday 9<sup>th</sup> August 2026</h2>
        <hr className='w-sm sm:w-lg border mx-auto' />
        <p className='text-4xl mt-5'>
          {daysTogether} Days Together...
        </p>
        <p className='text-4xl mb-5'>
          {daysLeft} Days to go!
        </p>
        <p className='text-2xl'>The Rabbit Hotel, Templepatrick</p>
        <p className='text-2xl'>1:00pm in the Afternoon</p>
        <p className='text-3xl m-5'>Dinner and Dancing to follow</p>
        <p className='text-xl'>Due to venue/capacity restraints, we regret that we are unable to invite children outside of immediate family.</p>
      </div>

      <div id='Travel' className='m-32 flex justify-center'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.3767498445977!2d-6.094802722090676!3d54.70381877271402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4861a94735b98a3d%3A0x4fe559190b48872f!2sThe%20Rabbit%20Hotel%20%26%20Retreat!5e0!3m2!1sen!2suk!4v1762050726544!5m2!1sen!2suk" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>



    </>
  )
}

export default App
