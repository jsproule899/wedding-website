import FadeSection from '../components/FadeSection'
import { TbWorldWww, TbPhoneCall  } from "react-icons/tb";

interface HotelProps {
    name: string
    address: string
    info: string
    website: string
    phone: string
}

const hotels = [
    {
        name: "The Rabbit Hotel & Spa",
        address: "882 Antrim Rd, Templepatrick, Ballyclare BT39 0AH",
        info: "The Rabbit Hotel & Spa has limited rooms available for guests. This is on a first come first serve basis.",
        website: "rabbithotel.com",
        phone: "028 9443 2984"
    },
    {
        name: "DoubleTree by Hilton",
        address: "10 Paradise Walk, Templepatrick, Ballyclare BT39 0DD",
        info: "Double Tree by Hilton has limited rooms available for guests. This is on a first come first serve basis.",
        website: "templepatrick.reservations@hilton.com",
        phone: "028 9443 5500"
    }
]

function Card({ props }: { props: HotelProps }) {
    return (
        <div className="bg-white text-primary py-2 w-10/12 max-w-xl font-raleway text-left px-4 space-y-2">
            <h2 className="text-lg font-chloe">{props.name}</h2>
            <p className='text-xs font-bold w-10/12'>{props.address}</p>
            <p className='text-xs w-10/12'>{props.info}</p>
            <span className='flex space-x-1'><TbWorldWww/><p className='text-xs font-bold'>{props.website}</p></span>
            <span className='flex space-x-1'><TbPhoneCall/><p className='text-xs font-bold'>{props.phone}</p></span>
        </div>
    )
}

function Accomodation() {

    return (
        <FadeSection id="Accomodation" className="justify-center space-y-5">
            <h1 className="text-8xl/14 whitespace-break-spaces">Where<br/> to stay</h1>
            <p className='font-raleway text-xs'>If you would like to stay there are a few options.</p>
            {hotels.map((hotel) => (
                < Card props={hotel} />
            ))}
            <div>
                <p className="text-md leading-4 mt-4">Rachael & Joshua</p>
                <p className="text-md leading-4">09.08.26</p>
            </div>

        </FadeSection>
    )
}

export default Accomodation