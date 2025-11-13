import { useState } from "react"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const sections = [
        { name: "HOME", href: "#Home" },
        { name: "WEDDING PARTY", href: "#Wedding-Party" },
        { name: "TRAVEL", href: "#Travel" },
        { name: "ACCOMODATION", href: "#Accomodation" },
        { name: "MENU", href: "#Menu" },
        { name: "INFO", href: "#Info" },
        { name: "RSVP", href: "#RSVP" },
        { name: "GIFTS", href: "#Gifts" }
    ]
    return (
        <>
            {/* Desktop Navigation */}
            <div className=" sticky top-0 py-10 self-center text-xl 2xl:text-2xl z-0">
                <ol className="hidden lg:flex flex-row justify-center space-x-10">
                    {sections.map((item) => (
                        <li key={item.name}><a href={item.href} className="text-white hover:text-secondary">{item.name}</a></li>
                    ))}
                </ol>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col justify-center items-center fixed right-6 top-10 z-30 cursor-pointer space-y-1 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out ${isOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
                </button>

                {/* Background overlay for outside click */}

                <div
                    className={`fixed inset-0 bg-black transition-opacity duration-700 ${isOpen ? 'opacity-10 z-10 translate-x-0' : 'opacity-0 -translate-x-full'}`}
                    onClick={() => setIsOpen(false)}
                ></div>


                {/* Slide-out Menu */}
                <div
                    className={`fixed top-0 right-0 h-screen w-8/12 bg-primary text-xl z-20 flex flex-col items-center transition-transform duration-300 ease-in-out shadow-2xl  ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <ol className="space-y-1 my-20 w-10/12">
                        {sections.map((item) => (
                            <li key={item.name} >
                                <a
                                    href={item.href}
                                    className=" text-xl md:text-2xl block w-full px-10 py-4 text-center text-white hover:text-secondary hover:bg-amber-50/5 rounded-2xl"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>






    )
}

export default NavBar