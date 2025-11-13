import { useState } from 'react'
import FadeSection from '../components/FadeSection';
import Radio from '../components/Radio';

function RSVP({ guestOne, guestTwo, plusOne, setPlusOne, family }: { guestOne: string | null; guestTwo: string | null, plusOne: string | null; setPlusOne:Function; family: string | null; }) {
    const [guestShown, setGuestShown] = useState(1);

    return (
        <FadeSection id="RSVP" className='justify-center'>
            <div>
                <h1 className='text-8xl/10 mt-10'> RSVP </h1>
                <p className='font-raleway text-xl'> by 23rd May 2025</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='bg-white flex flex-col justify-center items-center mt-8 p-1 w-10/12 max-w-xl' onClick={() => setGuestShown(1)}> <h2 className='text-primary text-2xl mb-1'>Guest One</h2> </div>

                <div className={`bg-white flex flex-col justify-center items-center mb-4 pb-4 w-10/12 max-w-xl transition-transform ${guestShown == 1 ? "scale-100" : "hidden"} `}>
                    <h2 className='text-primary text-3xl mb-1'>Can you join us?</h2>
                    <div className='flex space-x-2 items-center text-center align-middle font-raleway'>
                        <Radio name='attendance-guest-one' id='accept-guest-one' value='accept' label='Will be there!' />
                        <Radio name='attendance-guest-one' id='decline-guest-one' value='decline' label="Can't make it!" />
                    </div>
                </div>
                <div className={`bg-white flex flex-col justify-center items-center p-4 w-10/12 max-w-xl transition-all  ${guestShown == 1 ? "" : "hidden"} `}>
                    <div className='space-y-2 items-center text-center align-middle'>
                        <input id="Guest-One-Name" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-gray-950 font-raleway text-sm' placeholder='Full Name' defaultValue={guestOne?.toLocaleUpperCase() ?? ""} />
                        <input id="Guest-One-Name" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-gray-950 font-raleway text-sm' placeholder='Any food restrictions?' />
                        <input id="Guest-One-Name" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-gray-950 font-raleway text-sm' placeholder='Email address' />
                        <div className='flex justify-around mt-2'>
                            <Radio name="menu-guest-one" id="beef-guest-one" value="Beef" label='Beef' />
                            <Radio name="menu-guest-one" id="chicken-guest-one" value="chicken" label='chicken' />
                            <Radio name="menu-guest-one" id="vegetarian-guest-one" value="vegetarian" label='vegetarian' />
                        </div>
                    </div>
                </div>



                {!guestTwo && !plusOne ?

                    <div>Add guests</div> :
                    <>
                        <div className='bg-white flex flex-col justify-center items-center mt-8 p-1 w-10/12 max-w-xl' onClick={() => setGuestShown(2)}> <h2 className='text-primary text-2xl mb-1' > Guest Two</h2></div>
                        <div className={`bg-white flex flex-col justify-center items-center mb-4 pb-4 w-10/12 max-w-xl transition-all ${guestShown == 2 ? "" : "hidden"} `}>
                            <h2 className='text-primary text-3xl mb-1'>Can you join us?</h2>
                            <div className='flex space-x-2 items-center text-center align-middle font-raleway'>
                                <Radio name='attendance-guest-two' id='accept-guest-two' value='accept' label='Will be there!' />
                                <Radio name='attendance-guest-two' id='decline-guest-two' value='decline' label="Can't make it!" />
                            </div>
                        </div>
                        <div className={`bg-white flex flex-col justify-center items-center p-4 w-10/12 max-w-xl transition-all ${guestShown == 2 ? "" : "hidden"} `}>
                            <div className='space-y-2 items-center text-center align-middle'>
                                <input id="Guest-One-Name" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-gray-950 font-raleway text-sm' placeholder='Full Name' defaultValue={guestOne?.toLocaleUpperCase() ?? ""} />
                                <input id="Guest-One-Name" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-gray-950 font-raleway text-sm' placeholder='Any food restrictions?' />
                                <input id="Guest-One-Name" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-gray-950 font-raleway text-sm' placeholder='Email address' />
                                <div className='flex justify-around mt-2'>
                                    <Radio name="menu-guest-two" id="beef-guest-two" value="Beef" label='Beef' />
                                    <Radio name="menu-guest-two" id="chicken-guest-two" value="chicken" label='chicken' />
                                    <Radio name="menu-guest-two" id="vegetarian-guest-two" value="vegetarian" label='vegetarian' />
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
            {(!guestTwo && !plusOne) && <a href="#plus-one"><button className='text-2xl cursor-pointer' onClick={() => { setPlusOne("true"); }}>Plus One?</button></a>}
            <button className='cursor-pointer bg-white text-primary px-6 py-0.5 my-4 text-3xl'>Submit</button>

        </FadeSection>
    )
}

export default RSVP