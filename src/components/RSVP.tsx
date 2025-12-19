import { useEffect, useState } from 'react'
import FadeSection from './FadeSection';
import Radio from './Radio';
import { BsFillPersonDashFill, BsFillPersonPlusFill, BsChevronUp, BsChevronDown } from "react-icons/bs";
import Footer from './Footer';
import TextInput from './TextInput';


function RSVP({ guestOne, guestTwo, plusOne, setPlusOne, family }: { guestOne: string | null; guestTwo: string | null, plusOne: string | null; setPlusOne: Function; family: string | null; }) {
    const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
    const [error, setError] = useState("");
    const [guestOneAttending, setGuestOneAttending] = useState(true);
    const [guestTwoAttending, setGuestTwoAttending] = useState(true);
    const [guestShown, setGuestShown] = useState(1);
    const [guests, setGusets] = useState(1);

    useEffect(() => {
        if (guestTwo || plusOne) setGusets(2);
    }, [])


    async function handleSubmit(e: any) {
        e.preventDefault();
        setStatus("loading");

        const guestArray = [{
            name: e.target.guestOneName.value.toLowerCase().trim(),
            attendance: e.target.guestOneAttendance.value,
            menuChoice: e.target.guestOneMenu.value,
            songRequest: e.target.guestOneSong.value,
        }]

        if (guests === 2)
            guestArray.push({
                name: e.target.guestTwoName.value.toLowerCase().trim(),
                attendance: e.target.guestTwoAttendance.value,
                menuChoice: e.target.guestTwoMenu.value,
                songRequest: e.target.guestTwoSong.value,
            })

        const formData = {
            guests: guestArray
        };


        const res = await fetch("/api/rsvp", {
            method: "POST",
            body: JSON.stringify(formData),
        });

        if (!res.ok) {
            setStatus("error");
            if (res.status === 400)
                setError("Required field missing")
            return;
        }

        setStatus("done");
    }

    return (
        <FadeSection id="RSVP" className='justify-center'>
            <div className='mt-auto'>
                <h1 className='text-7xl/10 mt-10'> RSVP </h1>
                <p className='font-minerva text-xl'> by 23rd May 2025</p>
            </div>
            <form onSubmit={handleSubmit} className={`${status == "done" && "hidden"}`}>

                <div className="flex flex-col w-full justify-center items-center">
                    <div className='bg-white flex flex-col justify-center items-center mt-8 p-1 w-10/12 max-w-xl cursor-pointer' onClick={() => setGuestShown(guestShown % guests + 1)}> <span className='flex '><h2 className='text-primary text-2xl flex '>Guest One </h2><BsChevronUp className={`text-primary mx-2 my-auto text-lg transition duration-300 ${guestShown === 1 && "-rotate-180"}`} /> </span></div>
                    <div className={` flex flex-col items-center transition-[height] ease-in-out duration-300 overflow-hidden ${guestShown === 1 ? "h-64" : "h-0"}`}>
                        <div className="bg-white flex flex-col justify-center items-center pb-4 w-10/12 max-w-xl">
                            <h2 className='text-primary text-3xl mb-1'>Can you join us?</h2>
                            <div className='flex space-x-2 items-center text-center align-middle font-minerva select-none'>
                                <Radio name='guestOneAttendance' id='accept-guest-one' value='accept' label='I&#39;ll be there!' required onChange={(e) => setGuestOneAttending(e.currentTarget.checked)} />
                                <Radio name='guestOneAttendance' id='decline-guest-one' value='decline' label="Can't make it!" onChange={(e) => setGuestOneAttending(!e.currentTarget.checked)} />
                            </div>
                        </div>
                        <div className="bg-white flex flex-col justify-center items-center p-4 w-10/12 max-w-xl">
                            <div className='text-white space-y-2 items-center text-center align-middle'>
                                <TextInput id="guestOneName" autoComplete='name' placeholder='Full Name' defaultValue={guestOne?.toLocaleUpperCase() ?? ""} required />
                                <TextInput id="guestOneDietry" placeholder='Any dietry restrictions?' disabled={!guestOneAttending} />
                                <TextInput id="guestOneSong" placeholder='Song request' disabled={!guestOneAttending} />
                                <div className='flex justify-around mt-2 select-none'>
                                    <Radio name="guestOneMenu" id="beef-guest-one" value="Beef" label='Beef' required={guestOneAttending} disabled={!guestOneAttending} />
                                    <Radio name="guestOneMenu" id="chicken-guest-one" value="chicken" label='chicken' disabled={!guestOneAttending} />
                                    <Radio name="guestOneMenu" id="vegetarian-guest-one" value="vegetarian" label='vegetarian' disabled={!guestOneAttending} />
                                    <Radio name="guestOneMenu" id="not-applicable" value='N/A' label='N/A' hidden checked={!guestOneAttending} readOnly />
                                </div>
                            </div>
                        </div>
                    </div>





                    <>
                        <button className='bg-white flex flex-col justify-center items-center mt-4 p-1 w-10/12 max-w-xl cursor-pointer' type='button' onClick={guests === 1 ? () => { setPlusOne("true"); setGusets(guests + 1); setGuestShown(2); } : () => setGuestShown(guestShown % guests + 1)}>
                            <span className='flex w-full justify-center text-primary text-2xl relative'>
                                {!guestTwo && !plusOne
                                    ? <><p>Add Guest</p><BsFillPersonPlusFill className='mx-2 my-auto' /></>
                                    : <><p>Guest Two </p><BsChevronUp className={`text-lg mx-2 my-auto transition duration-300 ${guestShown === 2 && "-rotate-180"}`} />
                                        {!guestTwo && plusOne && <span className="absolute right-2 top-1 text-primary cursor-pointer text-2xl" onClick={(e) => { e.stopPropagation(); setPlusOne(""); setGusets(1); setGuestShown(1); }}>< BsFillPersonDashFill className='mx-2 my-auto' /></span>}
                                    </>
                                }
                            </span>
                        </button>
                        <div className={` flex flex-col items-center transition-[height] ease-in-out duration-300 overflow-hidden ${guestShown === 2 ? "h-64" : "h-0"}`}>
                            <div className="bg-white flex flex-col justify-center items-center pb-4 w-10/12 max-w-xl">
                                <h2 className='text-primary text-3xl mb-1'>Can you join us?</h2>
                                <div className='flex space-x-2 items-center text-center align-middle font-minerva'>
                                    <Radio name='guestTwoAttendance' id='accept-guest-two' value='accept' label='I&#39;ll be there!' required={guests === 2} onChange={(e) => setGuestTwoAttending(e.currentTarget.checked)} />
                                    <Radio name='guestTwoAttendance' id='decline-guest-two' value='decline' label="Can't make it!" onChange={(e) => setGuestTwoAttending(!e.currentTarget.checked)} />
                                </div>
                            </div>
                            <div className="bg-white flex flex-col justify-center items-center p-4 w-10/12 max-w-xl">
                                <div className='space-y-2 items-center text-center align-middle'>
                                    <TextInput id="guestTwoName" autoComplete='name' placeholder='Full Name' defaultValue={guestTwo?.toLocaleUpperCase() ?? ""} required={guests === 2} />
                                    <TextInput id="guestTwoDietry" placeholder='Any dietry restrictions?' disabled={!guestTwoAttending} />
                                    <TextInput id="guestTwoSong" placeholder='Song request' disabled={!guestTwoAttending} />
                                    <div className='flex justify-around mt-2'>
                                        <Radio name="guestTwoMenu" id="beef-guest-two" value="Beef" label='Beef' required={guests === 2 && guestTwoAttending} disabled={!guestTwoAttending} />
                                        <Radio name="guestTwoMenu" id="chicken-guest-two" value="chicken" label='chicken' disabled={!guestTwoAttending} />
                                        <Radio name="guestTwoMenu" id="vegetarian-guest-two" value="vegetarian" label='vegetarian' disabled={!guestTwoAttending} />
                                        <Radio name="guestOneMenu" id="not-applicable" value='N/A' label='N/A' hidden checked={!guestTwoAttending} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    {/* {!guestTwo && plusOne && <button className='bg-white text-primary flex justify-center items-center mt-8 p-1 w-10/12 max-w-xl cursor-pointer text-2xl' onClick={() => { setPlusOne(""); setGusets(1); setGuestShown(1); }}><p >Just me</p>< BsFillPersonDashFill className='mx-2 my-auto' /></button>} */}
                    {/* <button type='button' className={`text-white flex justify-center items-center w-10/12 max-w-xl cursor-pointer text-2xl transition-transform ease-in-out duration-300 origin-top ${!guestTwo && plusOne ? "": "scale-y-0"}`} onClick={() => { setPlusOne(""); setGusets(1); setGuestShown(1); }}><p >Just me</p>< BsFillPersonDashFill className='mx-2 my-auto' /></button> */}

                </div>

                <button className='cursor-pointer bg-white text-primary px-6 py-0.5 mt-4 text-3xl' onSubmit={handleSubmit} disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Submit"}</button>
            </form>
            <div className={`text-4xl justify-center my-40 mx-5 animate-fade-in transition-all ${status === "done" ? "" : "hidden"}`}>
                <p >Thank you — your RSVP has been saved!</p>
                <button className='cursor-pointer bg-white text-primary px-6 py-0.5 mt-4 text-3xl' onClick={() => setStatus("idle")}>Edit</button>
            </div>



            {
                status === "error" && (
                    <p className="text-white mt-4 text-xl">
                        {error ? error : "Something went wrong. Please try again!"}
                    </p>
                )
            }
            <Footer />

        </FadeSection >
    )
}

export default RSVP