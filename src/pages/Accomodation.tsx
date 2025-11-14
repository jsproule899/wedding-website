import FadeSection from '../components/FadeSection'
import { TbWorldWww, TbPhoneCall } from "react-icons/tb";
import Footer from '../components/Footer';

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
        address: "10 Paradise Walk, Templepatrick,\n Ballyclare BT39 0DD",
        info: "Double Tree by Hilton has limited rooms available for guests. This is on a first come first serve basis.",
        website: "hilton.com",
        phone: "028 9443 5500"
    }
]

function Card({ props }: { props: HotelProps }) {
    return (
        <div className="bg-white text-primary py-4 w-10/12 max-w-xl font-minerva text-left px-4 space-y-2">
            <h2 className="text-2xl/2 font-chloe">{props.name}</h2>
            <p className='text-xs font-bold w-9/12'>{props.address}</p>
            <p className='text-xs'>{props.info}</p>
            <span className='flex space-x-1 items-center'><TbWorldWww /><a className='text-sm font-bold' href={`https://www.${props.website}`}>{props.website}</a></span>
            <span className='flex space-x-1'><TbPhoneCall /><a className='text-sm font-bold' href={`tel: ${props.phone}`}>{props.phone}</a></span>
        </div>
    )
}

function Accomodation() {

    return (
        <FadeSection id="Accomodation" className="justify-center space-y-5">
          <div className="flex flex-col grow space-y-2 w-full justify-center items-center">
                <h1 className="text-7xl/10 whitespace-break-spaces">Where<br /> to stay</h1>
                <p className='font-minerva text-xs'>If you would like to stay there are a few options.</p>

                {hotels.map((hotel, index) => (
                    < Card key={index} props={hotel} />
                ))}
            </div>
            <Footer />

        </FadeSection>
    )
}

export default Accomodation