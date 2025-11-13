import FadeSection from "../components/FadeSection";


function Home({ guestOne, guestTwo, plusOne, family }: { guestOne: string | null; guestTwo: string | null, plusOne: string | null; family: string | null; }) {
    return (
        <>
            <FadeSection id='Home' className='justify-center'>
                <h1 className='text-8xl/16 sm:text-9xl/21 [word-spacing:99999px] pt-10 pb-8 xl:mt-32 '>We're Getting Married</h1>
                <h2></h2>
                <h2 className='font-raleway text-white font-light text-md sm:text-4xl mb-1'>Rachael & Joshua would like to invite</h2>
                {guestOne && (<h2 className='text-2xl/6 sm:text-6xl sm:m-8 capitalize mb-1'>{guestOne}{guestTwo && family ? `, ${guestTwo}` : guestTwo && ` & ${guestTwo}`} {plusOne && " & Plus One"} {family && " & Children"} </h2>)}
                <h2 className='font-raleway text-white font-light text-md sm:text-4xl sm:pb-0'>{guestOne ? "" : "you"} to celebrate their wedding</h2>

                <hr className='w-60 sm:w-lg mx-auto mt-8 h-0.5' />
                <h2 className='text-2xl sm:text-5xl my-1'>Sunday 9th August 2026</h2>
                <hr className='w-60 sm:w-lg mx-auto mb-8 h-0.5' />
                <p className='font-raleway font-light text-center max-w-10/12 text-md sm:text-2xl'>The Rabbit Hotel, 882 Antrim Rd, Templepatrick, Ballyclare BT39 0AH</p>
                <p className='font-raleway font-light text-center text-md sm:text-2xl'>1:00pm</p>
                <a href="#RSVP" className="cursor-pointer bg-white text-primary px-6 py-0.5 my-6 text-3xl"
                    aria-label="RSVP button">
                    RSVP
                </a>
                <p className='text-lg md:text-2xl mt-5'>Reception to follow</p>
            </FadeSection>
        </>
    )
}

export default Home