import FadeSection from "./ui/FadeSection"
import Footer from "./ui/Footer"

function Gifts() {
    return (
        <FadeSection id='Gifts'>
            <div className="flex flex-col grow space-y-2 w-full justify-center items-center">
                <h1 className="text-5xl/8 xs:text-7xl whitespace-break-spaces">Gifts</h1>
                <div className="bg-white text-primary py-8 px-10 w-10/12 max-w-xl space-y-5 xs:space-y-10 font-minerva">
                    <p className='text-sm xs:text-lg'>
                        As we've already built a home together, we kindly ask that in place of traditional gifts, you consider contributing towards our future adventures and married life together.
                    </p>
                    <p className='text-sm xs:text-lg'>
                        Please don't feel any pressure, your love, laughter, and company on the day means more than we can say, but if you'd like to help us celebrate, a little cash would go towards our getaway!
                    </p>
                </div>
            </div>
            <Footer />
        </FadeSection>
    )
}

export default Gifts