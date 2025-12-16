import { useEffect, useState } from 'react'
import FadeSection from './FadeSection';
import Radio from './Radio';
import { BsFillPersonDashFill, BsFillPersonPlusFill, BsChevronUp, BsChevronDown } from "react-icons/bs";
import Footer from './Footer';


function RSVP({ guestOne, guestTwo, plusOne, setPlusOne, family }: { guestOne: string | null; guestTwo: string | null, plusOne: string | null; setPlusOne: Function; family: string | null; }) {
    const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
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
                    <div className='bg-white flex flex-col justify-center items-center mt-8 p-1 w-10/12 max-w-xl' onClick={() => setGuestShown(guestShown % guests + 1)}> <span className='flex '><h2 className='text-primary text-2xl flex '>Guest One </h2>{guestShown == 1 ? <BsChevronUp className='text-primary mx-2 my-auto h-6' /> : <BsChevronDown className='text-primary mx-2 my-auto h-6' />} </span></div>

                    <div className={`bg-white flex flex-col justify-center items-center pb-4 w-10/12 max-w-xl transition-transform ${guestShown == 1 ? "scale-100" : "hidden"} `}>
                        <h2 className='text-primary text-3xl mb-1'>Can you join us?</h2>
                        <div className='flex space-x-2 items-center text-center align-middle font-minerva select-none'>
                            <Radio name='guestOneAttendance' id='accept-guest-one' value='accept' label='I&#39;ll be there!' required={true} />
                            <Radio name='guestOneAttendance' id='decline-guest-one' value='decline' label="Can't make it!" />
                        </div>
                    </div>
                    <div className={`bg-white flex flex-col justify-center items-center p-4 w-10/12 max-w-xl transition-all  ${guestShown == 1 ? "" : "hidden"} `}>
                        <div className='text-white space-y-2 items-center text-center align-middle'>
                            <input id="guestOneName" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-primary font-minerva text-sm' autoComplete='name' placeholder='Full Name' defaultValue={guestOne?.toLocaleUpperCase() ?? ""} required={true} />
                            <input id="guestOneDietry" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-primary font-minerva text-sm' placeholder='Any dietry restrictions?' />
                            <input id="guestOneSong" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-primary font-minerva text-sm' placeholder='Song request' />
                            <div className='flex justify-around mt-2 select-none'>
                                <Radio name="guestOneMenu" id="beef-guest-one" value="Beef" label='Beef' required={true} />
                                <Radio name="guestOneMenu" id="chicken-guest-one" value="chicken" label='chicken' />
                                <Radio name="guestOneMenu" id="vegetarian-guest-one" value="vegetarian" label='vegetarian' />
                            </div>
                        </div>
                    </div>




                    {!guestTwo && !plusOne ?
                        <button className='bg-white flex flex-row justify-center items-center mt-8 p-1 w-10/12 max-w-xl text-2xl text-primary mx-1 cursor-pointer' onClick={() => { setPlusOne("true"); setGusets(guests + 1); setGuestShown(2); }}><p>Add Guest</p><BsFillPersonPlusFill className='text-primary mx-2 my-1' /></button>
                        : <>
                            <div className='bg-white flex flex-col justify-center items-center mt-8 p-1 w-10/12 max-w-xl' onClick={() => setGuestShown(guestShown % guests + 1)}> <span className='flex '><h2 className='text-primary text-2xl flex '>Guest Two </h2>{guestShown == 2 ? <BsChevronUp className='text-primary mx-2 my-auto h-6' /> : <BsChevronDown className='text-primary mx-2 my-auto h-6' />} </span> </div>
                            <div className={`bg-white flex flex-col justify-center items-center pb-4 w-10/12 max-w-xl transition-all ${guestShown == 2 ? "" : "hidden"} `}>
                                <h2 className='text-primary text-3xl mb-1'>Can you join us?</h2>
                                <div className='flex space-x-2 items-center text-center align-middle font-minerva'>
                                    <Radio name='guestTwoAttendance' id='accept-guest-two' value='accept' label='I&#39;ll be there!' required={true} />
                                    <Radio name='guestTwoAttendance' id='decline-guest-two' value='decline' label="Can't make it!" />
                                </div>
                            </div>
                            <div className={`bg-white flex flex-col justify-center items-center p-4 w-10/12 max-w-xl transition-all ${guestShown == 2 ? "" : "hidden"} `}>
                                <div className='space-y-2 items-center text-center align-middle'>
                                    <input id="guestTwoName" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-primary font-minerva text-sm' autoComplete='name' placeholder='Full Name' defaultValue={guestTwo?.toLocaleUpperCase() ?? ""} required={true} />
                                    <input id="guestTwoDietry" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-primary font-minerva text-sm' placeholder='Any dietry restrictions?' />
                                    <input id="guestTwoSong" type="text" className='bg-primary/30 rounded-2xl px-4 py-1 w-full text-primary font-minerva text-sm' placeholder='Song request' />
                                    <div className='flex justify-around mt-2'>
                                        <Radio name="guestTwoMenu" id="beef-guest-two" value="Beef" label='Beef' required={true} />
                                        <Radio name="guestTwoMenu" id="chicken-guest-two" value="chicken" label='chicken' />
                                        <Radio name="guestTwoMenu" id="vegetarian-guest-two" value="vegetarian" label='vegetarian' />
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
                {!guestTwo && plusOne && <button className='cursor-pointer bg-white text-primary px-4 py-0.5 mt-4 text-3xl inline mx-2 space-x-2' onClick={() => { setPlusOne(""); setGusets(1); setGuestShown(1); }}><p className='inline'>Just me</p>< BsFillPersonDashFill className='my-auto inline' /></button>}

                <button className='cursor-pointer bg-white text-primary px-6 py-0.5 mt-4 text-3xl' onSubmit={handleSubmit}>{status === "loading" ? "Sending..." : "Submit"}</button>
            </form>
            <div className={`text-4xl justify-center my-40 mx-5 animate-fade-in transition-all ${status === "done" ? "" : "hidden"}`}>
                <p >Thank you — your RSVP has been saved!</p>
                <button className='cursor-pointer bg-white text-primary px-6 py-0.5 mt-4 text-3xl' onClick={() => setStatus("idle")}>Edit</button>
            </div>



            {status === "error" && (
                <p className="text-white mt-4 text-xl">
                    Something went wrong. Please try again!

                </p>
            )}
            <Footer />

        </FadeSection>
    )
}

export default RSVP