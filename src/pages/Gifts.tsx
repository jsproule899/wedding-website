import FadeSection from "../components/FadeSection"
import Footer from "../components/Footer"

function Gifts() {
    return (
        <FadeSection id='Gifts'>
            <div className="flex flex-col grow space-y-2 w-full justify-center items-center">
                <h1 className="text-7xl whitespace-break-spaces">Gifts</h1>
                <div className="bg-white text-primary py-10 px-10 w-10/12 max-w-xl space-y-10 font-minerva">
                    <p className='text-xl'>Your presence on our special day is more than enough, but if you want to give us gift we'd very much appreciate some money to spend on our honey....moon</p>
                </div>
            </div>
            <Footer />
        </FadeSection>
    )
}

export default Gifts