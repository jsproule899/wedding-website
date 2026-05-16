import Image from "next/image"
import FadeSection from "./ui/FadeSection"
import Footer from "./ui/Footer"

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
        img: "/images/sally.jpg"
    },
    {
        name: "Glenn McClune",
        role: "Father of the bride",
        tagline: "Beatles superfan",
        img: "/images/glenn.png"
    },
    {
        name: "Anne Sproule",
        role: "Mother of the groom",
        tagline: "Resident travelagent",
        img: "/images/anne_s.jpg"
    },
    {
        name: "Paul Sproule",
        role: "Father of the groom",
        tagline: "Backup photographer",
        img: "/images/paul_s.jpg"
    }
]
const bridemaids = [
    {
        name: "Hannah Makinson",
        role: "Maid of Honor",
        tagline: "Organised fun haver",
        img: "/images/hannah.jpg"
    },
    {
        name: "Sarah McLaughlin",
        role: "Bridesmaid",
        tagline: "Cocktail co-ordinator",
        img: "/images/sarah.png"
    },
    {
        name: "Claire Fegan",
        role: "Bridesmaid",
        tagline: "Speech writer",
        img: "/images/claire.jpg"
    },
    {
        name: "Erin Sharma",
        role: "Bridesmaid",
        tagline: "Chief stylist",
        img: "/images/erin.jpg"
    }
]
const groomsmen = [
    {
        name: "Stephen Sproule",
        role: "Bestman",
        tagline: "Beyoncé's #1 fan, future riverdancer and karaoke king",
        img: "/images/stephen.jpg"
    },
    {
        name: "Paul Ó Gallachóir",
        role: "Groomsman",
        tagline: "whisky connoisseur, Dog Whisperer and music maestro",
        img: "/images/paul.jpg"
    },
    {
        name: "Aaron Sproule",
        role: "Groomsman",
        tagline: "Roman Empire enthusiast, muay thai fighter and sunbed addict",
        img: "/images/aaron.jpg"
    }
]



function Card({ props }: { props: CardProps }) {
    return (
        <div className="flex space-x-4 bg-white w-10/12 h-18 xs:h-22 max-w-xl">
            <Image src={props.img} loading="lazy" alt="Picture of wedding party member" width={1080} height={1080} className="aspect-square h-18 xs:h-22 w-18 xs:w-22"/>
            <span className="text-start my-auto text-primary py-2">
                <h1 className="text-xl/4 xs:text-2xl/5 text-primary">{props.name}</h1>
                <h2 className="font-minerva text-xs xs:text-sm font-semibold">{props.role}</h2>
                <p className="font-minerva italic text-xs xs:text-sm">{props.tagline}</p>
            </span>

        </div>
    )
}

function GroupSection({ members }: { members: CardProps[] }) {
    return (
        <FadeSection className="justify-center space-y-2">
            <div className="flex flex-col grow space-y-2 xs:space-y-4 w-full justify-center items-center">
                <h1 className="text-5xl/8 xs:text-7xl/12 whitespace-break-spaces">Wedding <br /> Party</h1>
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