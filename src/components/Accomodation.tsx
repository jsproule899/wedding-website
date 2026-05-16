import FadeSection from './ui/FadeSection'
import { TbWorldWww, TbPhoneCall } from "react-icons/tb";
import Footer from './ui/Footer';

interface HotelProps {
    name: string
    address: string
    info: string
    websiteText: string
    websiteLink: string
    phone: string
}

const hotels = [
    {
        name: "The Rabbit Hotel & Spa",
        address: "882 Antrim Rd, Templepatrick, Ballyclare BT39 0AH",
        info: "The Rabbit Hotel & Spa has limited rooms available for Wedding Guests at a special rate £215. This is on a first come first serve basis. Add Spa access until 3pm the day after with lunch for an additional £35 pp.",
        websiteText: "rabbithotel.com",
        websiteLink: "rabbithotel.com",
        phone: "028 9443 2984"
    },
    {
        name: "DoubleTree by Hilton",
        address: "10 Paradise Walk, Templepatrick,\n Ballyclare BT39 0DD",
        info: "Double Tree by Hilton is just a 5 minute drive or a 15 minute walk from The Rabbit Hotel. They have some large rooms available for families which sleep 4 adults.",
        websiteText: "hilton.com",
        websiteLink: "hilton.com/en/hotels/bfstpdi-doubletree-belfast-templepatrick/",
        phone: "028 9443 5500"
    }
]

function Card({ props }: { props: HotelProps }) {
    return (
        <div className="bg-white text-primary py-2 xs:py-4 w-10/12 max-w-xl font-minerva text-left px-4 space-y-1 xs:space-y-2">
            <h2 className="text-xl/4 xs:text-2xl/2 font-chloe">{props.name}</h2>
            <p className='text-xs font-bold'>{props.address}</p>
            <p className='text-[0.625rem] xs:text-xs'>{props.info}</p>
            <span className='flex space-x-1 items-center'><TbWorldWww /><a className='text-xs xs:text-sm font-bold' href={`https://www.${props.websiteLink}`} target="_blank">{props.websiteText}</a></span>
            <span className='flex space-x-1'><TbPhoneCall /><a className='text-xs xs:text-sm font-bold' href={`tel: ${props.phone}`}>{props.phone}</a></span>
        </div>
    )
}

function Accomodation() {

    return (
        <FadeSection id="Accomodation" className="justify-center xs:space-y-5">
            <div className="flex flex-col grow space-y-2 w-full justify-center items-center">
                <h1 className="text-5xl/8 xs:text-7xl/10 whitespace-break-spaces mb-3 xs:mb-6">Where<br /> to stay</h1>
                {hotels.map((hotel, index) => (
                    < Card key={index} props={hotel} />
                ))}
            </div>
            <Footer />

        </FadeSection>
    )
}

export default Accomodation