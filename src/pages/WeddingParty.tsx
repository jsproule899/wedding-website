import FadeSection from "../components/FadeSection"
import img1 from '../assets/sally.png'
import Footer from "../components/Footer"

interface CardProps {
    name: string
    role: string
    tagline: string
    img: string
}

const parents = [
    {
        name: "Sally McClune",
        role: "Mother of the bride",
        tagline: "Temu expert",
        img: img1
    },
    {
        name: "Glenn McClune",
        role: "Father of the bride",
        tagline: "Beatles superfan",
        img: img1
    },
    {
        name: "Anne Sproule",
        role: "Mother of the groom",
        tagline: "Resident travelagent",
        img: img1
    },
    {
        name: "Paul Sproule",
        role: "Father of the groom",
        tagline: "Elvis superfan",
        img: img1
    }
]
const bridemaids = [
    {
        name: "Hannah Makinson",
        role: "Maid of Honor",
        tagline: "Organised fun haver",
        img: img1
    },
    {
        name: "Sarah McLaughlin",
        role: "Bridesmaid",
        tagline: "Cocktail co-ordinator",
        img: img1
    },
    {
        name: "Claire Fegan",
        role: "Bridesmaid",
        tagline: "Speech writer",
        img: img1
    },
    {
        name: "Erin Sharma",
        role: "Bridesmaid",
        tagline: "Chief stylist",
        img: img1
    }
]
const groomsmen = [
    {
        name: "Stephen Sproule",
        role: "Bestman",
        tagline: "Irish Dancer",
        img: img1
    },
    {
        name: "Paul O'Gallocior",
        role: "Groomsman",
        tagline: "Music Critic",
        img: img1
    },
    {
        name: "Aaron Sproule",
        role: "Groomsman",
        tagline: "Food Tester",
        img: img1
    }
]



function Card({ props }: { props: CardProps }) {
    return (
        <div className="flex space-x-4 bg-white w-10/12 h-22 max-w-xl">
            <img src={props.img} alt="" className="aspect-square h-22" />
            <span className="text-start my-auto text-primary py-2">
                <h1 className="text-2xl/5 text-primary">{props.name}</h1>
                <h2 className="font-minerva text-sm font-semibold">{props.role}</h2>
                <p className="font-minerva italic text-sm">{props.tagline}</p>
            </span>

        </div>
    )
}

function GroupSection({ members }: { members: CardProps[] }) {
    return (
        <FadeSection className="justify-center space-y-2">
            <div className="flex flex-col grow space-y-4 w-full justify-center items-center">
                <h1 className="text-7xl/12 whitespace-break-spaces">Wedding <br /> Party</h1>
                <p className='font-minerva text-xs'>These are some of our favourite people</p>
                {members.map((person, index) => (
                    <Card key={index} props={person} />
                ))}
            </div>
            <Footer />
        </FadeSection>
    )
}

function WeddingParty() {
    return (
        <div id="Wedding-Party">
            <GroupSection members={parents} />
            <GroupSection members={bridemaids} />
            <GroupSection members={groomsmen} />
        </div>
    )
}

export default WeddingParty