import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/navigation/NavBar';
import { useSearchParams } from 'react-router';
import BackgroundImage from './components/BackgroundImage';
import FadeSection from './components/FadeSection';
import Home from './pages/Home';
import Radio from './components/Radio';
import Menu from './pages/Menu';
import RSVP from './pages/RSVP';
import Accomodation from './pages/Accomodation';
import GettingThere from './pages/GettingThere';
import WeddingParty from './pages/WeddingParty';
import Gifts from './pages/Gifts';




function App() {
  const [daysLeft, setDaysLeft] = useState(0);
  const [daysTogether, setDaysTogether] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [guestOne, setGuestOne] = useState(searchParams.get("guestOne"));
  const [guestTwo, setGuestTwo] = useState(searchParams.get("guestTwo"));
  const [plusOne, setPlusOne] = useState(searchParams.get("plusOne"));
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

    <BackgroundImage>
      <div id="container" className="flex flex-col">
        <NavBar />
        <Home guestOne={guestOne} guestTwo={guestTwo} family={family} plusOne={plusOne} />
        <WeddingParty />
        <GettingThere />
        <Accomodation />
        <Menu />
        <FadeSection id="Timeline">
          <h1>The timings</h1>
        </FadeSection>
        <RSVP guestOne={guestOne} guestTwo={guestTwo} family={family} plusOne={plusOne} setPlusOne={setPlusOne} />
        <Gifts />
      </div>
    </BackgroundImage >

  )
}

export default App
