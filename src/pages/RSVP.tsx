import { useState } from 'react'
import FadeSection from '../components/FadeSection';
import Radio from '../components/Radio';
import { BsPeopleFill, BsChevronUp, BsChevronDown } from "react-icons/bs";
import Footer from '../components/Footer';


function RSVP({ guestOne, guestTwo, plusOne, setPlusOne, family }: { guestOne: string | null; guestTwo: string | null, plusOne: string | null; setPlusOne: Function; family: string | null; }) {
    const [guestShown, setGuestShown] = useState(1);
    const [guests, setGusets] = useState(1);

    return (
        <FadeSection id="RSVP" className='justify-center'>
            <div>
                <h1 className='text-7xl/10 mt-10'> RSVP </h1>
                <p className='font-minerva text-xl'> by 23rd May 2025</p>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
                <div className='bg-white flex flex-col justify-center items-center mt-8 p-1 w-10/12 max-w-xl' onClick={() => setGuestShown(guestShown % guests + 1)}> <span className='flex '><h2 className='text-primary text-2xl flex '>Guest One </h2>{guestShown == 1 ? <BsChevronUp className='text-primary mx-2 my-auto h-6' /> : <BsChevronDown className='text-primary mx-2 my-auto h-6' />} </span></div>

                <div className={`bg-white flex flex-col justify-center items-center pb-4 w-10/12 max-w-xl transition-transform ${guestShown == 1 ? "scale-100" : "hidden"} `}>
                    <h2 className='text-primary text-3xl mb-1'>Can you join us?</h2>
                    <div className='flex space-x-2 items-center text-center align-middle font-minerva'>
                        <Radio name='attendance-guest-one' id='accept-guest-one' value='accept' label='I&#39;ll be there!' />
                        <Radio name='attendance-guest-one' id='decline-guest-one' value='decline' label="Can't make it!" />
                    </div>
                </div>
                <div className={`bg-white flex flex-col justify-center items-center p-4 w-10/12 max-w-xl transition-all  ${guestShown == 1 ? "" : "hidden"} `}>
                    <div className='space-y-2 items-center text-center align-middle'>
                        <input id="Guest-One-Name" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-gray-950 font-minerva text-sm' autoComplete='name' placeholder='Full Name' defaultValue={guestOne?.toLocaleUpperCase() ?? ""} />
                        <input id="Guest-One-Name" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-gray-950 font-minerva text-sm' placeholder='Any food restrictions?' />
                        <input id="Guest-One-Name" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-gray-950 font-minerva text-sm' autoComplete='email' placeholder='Email address' />
                        <div className='flex justify-around mt-2'>
                            <Radio name="menu-guest-one" id="beef-guest-one" value="Beef" label='Beef' />
                            <Radio name="menu-guest-one" id="chicken-guest-one" value="chicken" label='chicken' />
                            <Radio name="menu-guest-one" id="vegetarian-guest-one" value="vegetarian" label='vegetarian' />
                        </div>
                    </div>
                </div>



                {!guestTwo && !plusOne ?
                    <a href="#plus-one" className='bg-white flex flex-col justify-center items-center mt-8 p-1 w-10/12 max-w-xl'><button className='text-2xl text-primary mx-1 cursor-pointer flex' onClick={() => { setPlusOne("true"); setGusets(guests + 1); setGuestShown(2); }}>Add Guest<BsPeopleFill className='text-primary mx-2 my-1' /></button></a>
                    : <>
                        <div className='bg-white flex flex-col justify-center items-center mt-8 p-1 w-10/12 max-w-xl' onClick={() => setGuestShown(guestShown % guests + 1)}> <span className='flex '><h2 className='text-primary text-2xl flex '>Guest Two </h2>{guestShown == 2 ? <BsChevronUp className='text-primary mx-2 my-auto h-6' /> : <BsChevronDown className='text-primary mx-2 my-auto h-6' />} </span></div>
                        <div className={`bg-white flex flex-col justify-center items-center pb-4 w-10/12 max-w-xl transition-all ${guestShown == 2 ? "" : "hidden"} `}>
                            <h2 className='text-primary text-3xl mb-1'>Can you join us?</h2>
                            <div className='flex space-x-2 items-center text-center align-middle font-minerva'>
                                <Radio name='attendance-guest-two' id='accept-guest-two' value='accept' label='I&#39;ll be there!' />
                                <Radio name='attendance-guest-two' id='decline-guest-two' value='decline' label="Can't make it!" />
                            </div>
                        </div>
                        <div className={`bg-white flex flex-col justify-center items-center p-4 w-10/12 max-w-xl transition-all ${guestShown == 2 ? "" : "hidden"} `}>
                            <div className='space-y-2 items-center text-center align-middle'>
                                <input id="Guest-One-Name" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-gray-950 font-minerva text-sm' autoComplete='name' placeholder='Full Name' defaultValue={guestOne?.toLocaleUpperCase() ?? ""} />
                                <input id="Guest-One-Name" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-gray-950 font-minerva text-sm' placeholder='Any food restrictions?' />
                                <input id="Guest-One-Name" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-gray-950 font-minerva text-sm' autoComplete='email' placeholder='Email address' />
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
            <button className='cursor-pointer bg-white text-primary px-6 py-0.5 mt-4 text-3xl'>Submit</button>
            <Footer />

        </FadeSection>
    )
}

export default RSVP