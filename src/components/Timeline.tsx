import FadeSection from "./ui/FadeSection"
import Footer from "./ui/Footer"
import { GiLinkedRings, GiGlassCelebration   , GiMicrophone, GiHotMeal, GiMusicalNotes, GiGuitar, GiCompactDisc, GiNightSleep } from "react-icons/gi";

interface pointProps {
    time: string;
    event: string;
    end?: boolean;
    icon?: React.ReactNode;
}

const TimelinePoint = ({ time, event, end, icon }: pointProps) => (
    <>
        <span className="col-span-2 justify-self-end content-center">{time}</span>
        <span className={`w-7.5 h-7.5 text-3xl ${end ? "" : "after:block after:bg-white after:w-0.5 after:h-8 xs:after:h-5 after:mx-auto after:my-0.5"}`} >{icon}</span>
        <span className="col-span-2 justify-self-start text-start content-center h-6">{event}</span>
    </>
)


function Timeline() {
    return (
        <FadeSection id='Timeline' className="justify-center items-center xs:space-y-5">
            <div className="flex flex-col grow xs:space-y-4 w-full justify-center items-center">
                <h1 className="text-5xl/8 xs:text-7xl/12 mb-4 xs:mb-10 ">On the<br />Day</h1>
                <div className="grid grid-cols-5 gap-x-1 gap-y-3 xs:gap-y-6 justify-items-center items-center text-sm xs:text-lg font-minerva mx-10">
                    <TimelinePoint time="1:30pm" event="Ceremony" icon={<GiLinkedRings />} />
                    <TimelinePoint time="2:15pm" event="Drinks & Cake" icon={<GiGlassCelebration    />} />
                    <TimelinePoint time="4:30pm" event="Speeches" icon={<GiMicrophone />} />
                    <TimelinePoint time="5:00pm" event="Dinner" icon={<GiHotMeal />} />
                    <TimelinePoint time="7:00pm" event="First Dance" icon={<GiMusicalNotes />} />
                    <TimelinePoint time="7:15pm" event="Band" icon={<GiGuitar />} />
                    <TimelinePoint time="10:30pm" event="DJ & Dancing" icon={<GiCompactDisc />} />
                    <TimelinePoint time="1:00 am" event="Bed Time" end  icon={<GiNightSleep />} />
                </div>
            </div>
            <Footer />
        </FadeSection>
    )
}

export default Timeline