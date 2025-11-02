
const NavBar = () => {
    return (
        <div className="h-10 mb-20 text-xl sm:text-2xl">
            <ol className="flex flex-row justify-center-safe m-2 space-x-5 sm:space-x-5 ">
                <li>
                    <a href="#Home" className="hover:text-peach text-white visited:text-white" >HOME</a>
                </li>
                <li>
                    <a href="#Travel" className="hover:text-peach text-white visited:text-white">TRAVEL</a>
                </li>
                <li>
                    MENU
                </li>
                <li>
                    INFO
                </li>
                <li>
                    RSVP
                </li>
            </ol>
        </div>
    )
}

export default NavBar