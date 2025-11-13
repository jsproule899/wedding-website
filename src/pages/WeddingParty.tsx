import FadeSection from "../components/FadeSection"
import img1 from '../assets/sally.png'

interface CardProps {
    name: string
    role: string
    tagline: string
    img: string
}

const parents = [
    {
        name: "Sally",
        role: "Mother of the bride",
        tagline: "Temu expert",
        img: img1
    },
    {
        name: "Glen",
        role: "Father of the bride",
        tagline: "Beatles superfan",
        img: img1
    },
    {
        name: "Anne",
        role: "Mother of the groom",
        tagline: "Resident travelagent",
        img: img1
    },
    {
        name: "Glen",
        role: "Father of the groom",
        tagline: "Elvis superfan",
        img: img1
    }
]
const bridemaids = [
    {
        name: "Hannah",
        role: "Maid of Honor",
        tagline: "Organised fun haver",
        img: img1
    },
    {
        name: "Sarah",
        role: "Bridesmaid",
        tagline: "Cocktail co-ordinator",
        img: img1
    },
        {
        name: "Claire",
        role: "Bridesmaid",
        tagline: "Speech writer",
        img: img1
    },
    {
        name: "Erin",
        role: "Bridesmaid",
        tagline: "Chief stylist",
        img: img1
    }
]
const groomsmen = [
    {
        name: "Stephen",
        role: "Bestman",
        tagline: "Irish Dancer",
        img: img1
    },
    {
        name: "Paul",
        role: "Groomsman",
        tagline: "Music Critic",
        img: img1
    },
      {
        name: "Aaron",
        role: "Groomsman",
        tagline: "Food Tester",
        img: img1
    }
]



function Card({ props }: { props: CardProps }) {
    return (
        <div className="flex space-x-4 bg-white w-10/12 max-w-xl p-2">
            <img src={props.img} alt="" className="h-20 rounded-full outline-2 outline-primary" />
            <span className="text-start text-primary">
                <h1 className="text-2xl">{props.name}</h1>
                <h2 className="font-raleway font-semibold">{props.role}</h2>
                <p className="font-raleway italic">{props.tagline}</p>
            </span>

        </div>
    )
}

function WeddingParty() {
    return (
        <>
            <FadeSection id="Wedding-Party" className="justify-center space-y-5">
                <h1 className="text-8xl/14 whitespace-break-spaces">Wedding Party</h1>
                <p className='font-raleway text-xs'>These are some of our favourite people</p>
                {parents.map((person) => (
                    < Card props={person} />
                ))}
                <div>
                    <p className="text-md leading-4 mt-4">Rachael & Joshua</p>
                    <p className="text-md leading-4">09.08.26</p>
                </div>
            </FadeSection>
            <FadeSection id="wedding-party" className="justify-center space-y-5">
                <h1 className="text-8xl/14 whitespace-break-spaces">Wedding Party</h1>
                <p className='font-raleway text-xs'>These are some of our favourite people</p>
                {bridemaids.map((person) => (
                    < Card props={person} />
                ))}
                <div>
                    <p className="text-md leading-4 mt-4">Rachael & Joshua</p>
                    <p className="text-md leading-4">09.08.26</p>
                </div>

            </FadeSection>
            <FadeSection id="wedding-party" className="justify-center space-y-5">
                <h1 className="text-8xl/14 whitespace-break-spaces">Wedding Party</h1>
                <p className='font-raleway text-xs'>These are some of our favourite people</p>
                {groomsmen.map((person) => (
                    < Card props={person} />
                ))}
                <div>
                    <p className="text-md leading-4 mt-4">Rachael & Joshua</p>
                    <p className="text-md leading-4">09.08.26</p>
                </div>

            </FadeSection>
        </>
    )
}

export default WeddingParty