import FadeSection from "../components/FadeSection"
import Footer from "../components/Footer"

function Timeline() {
    return (
        <FadeSection id='Timeline' className="justify-center space-y-5">
           <div className="flex flex-col grow space-y-4 w-full justify-center items-center">
                <h1 className="text-7xl/12 ">On the<br />Day</h1>
                <div className="relative h-8/12 w-10/12">
                    <div className="h-10/12 w-0 right-0 left-0 mx-auto border border-white"></div>
                    <div className="absolute top-10 left-1/2"><hr className="border" /> Ceremony - 2.00pm</div>
                    <div className="absolute top-30 right-1/2"><hr className="border" /><p>Drinks Reception - 2.30pm</p></div>
                    <div className="absolute top-50 left-1/2"><hr className="border" /><p>Speeches- 5.00pm</p></div>
                    <div className="absolute top-70 right-1/2"><hr className="border" /><p>Dinner - 5.30pm</p></div>
                    <div className="absolute top-90 left-1/2"><hr className="border" /><p>First Dance- 7.00pm</p></div>
                    <div className="absolute top-120 right-1/2"><hr className="border" /><p>Party- 10.30pm - late</p></div>
                </div>

            </div>
            <Footer />
        </FadeSection>
    )
}

export default Timeline