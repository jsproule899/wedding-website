import FadeSection from "./ui/FadeSection";


function Home({ guestOne, guestTwo, plusOne, family }: { guestOne: string | null; guestTwo: string | null, plusOne: string | null; family: string | null; }) {
    return (
            <FadeSection id='Home' className='justify-center'>
                <h1 className='text-7xl/12 xs:text-8xl/16 sm:text-9xl/21 pt-8 xs:pt-10 pb-4 xs:pb-8 xl:mt-32 '>We're <br/> Getting <br/> Married <br/></h1>
                <h2></h2>
                <h2 className='font-minerva text-white xs:text-lg sm:text-4xl mb-1'>Rachael & Josh would like to invite</h2>
                {guestOne && (<h2 className='text-xl/4 xs:text-2xl/6 sm:text-6xl sm:m-8 capitalize mb-1'>{guestOne}{guestTwo && family ? `, ${guestTwo}` : guestTwo && ` & ${guestTwo}`} {plusOne && " & Guest"} {family && " & Family"} </h2>)}
                <h2 className='font-minerva text-white xs:text-lg sm:text-4xl sm:pb-0'>{guestOne ? "" : "you"} to celebrate their wedding</h2>

                <hr className='w-50 xs:w-60 sm:w-lg mx-auto mt-4 xs:mt-8 h-0.5' />
                <h2 className='text-xl xs:text-2xl sm:text-5xl my-1'>Sunday 9th August 2026</h2>
                <hr className='w-50 xs:w-60 sm:w-lg mx-auto mb-4 xs:mb-8 h-0.5' />
                <p className='font-minerva font-light text-center max-w-10/12 text-sm xs:text-md sm:text-2xl'>The Rabbit Hotel, 882 Antrim Rd, Templepatrick, Ballyclare BT39 0AH</p>
                <p className='font-minerva font-light text-center text-sm xs:text-md sm:text-2xl'>1:30pm</p>
                <a href="#RSVP" className="cursor-pointer bg-white text-primary px-6 py-0.5 my-3 xs:my-6 text-xl xs:text-3xl"
                    aria-label="RSVP button">
                    RSVP
                </a>
                <p className='text-sm xs:text-lg xs:leading-4'>Reception to follow</p>
            </FadeSection>
    )
}

export default Home