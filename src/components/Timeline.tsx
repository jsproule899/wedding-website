import FadeSection from "./ui/FadeSection"
import Footer from "./ui/Footer"

interface pointProps {
    time: string;
    event: string;
    end?: boolean;
}

const TimelinePoint = ({ time, event, end }: pointProps) => (
    <>
        <span className="col-span-2 justify-self-end content-center">{time}</span>
        <span className={`bg-white rounded-full w-2.5 h-2.5 content-center ${end ? "" : "after:block after:bg-white after:w-0.5 after:h-12  after:mx-auto after:my-2"}`} />
        <span className="col-span-2 justify-self-start text-start content-center h-6">{event}</span>
    </>
)


function Timeline() {
    return (
        <FadeSection id='Timeline' className="justify-center space-y-5">
            <div className="flex flex-col grow space-y-4 w-full justify-center items-center">
                <h1 className="text-7xl/12 mb-10 ">On the<br />Day</h1>
                <div className="grid grid-cols-5 gap-x-1 gap-y-6 justify-items-center items-center text-lg font-minerva mx-10">
                    <TimelinePoint time="1:30pm" event="Ceremony" />
                    <TimelinePoint time="2:15pm" event="Drinks & Cake" />
                    <TimelinePoint time="4:30pm" event="Speeches" />
                    <TimelinePoint time="5:00pm" event="Dinner" />
                    <TimelinePoint time="7:00pm" event="First Dance" />
                    <TimelinePoint time="7:15pm" event="Band" />
                    <TimelinePoint time="10:30pm" event="DJ & Dancing" />
                    <TimelinePoint time="1:00 am" event="Bed Time" end />
                </div>
            </div>
            <Footer />
        </FadeSection>
    )
}

export default Timeline