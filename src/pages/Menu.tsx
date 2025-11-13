import FadeSection from "../components/FadeSection"


function Menu() {
    return (
        <FadeSection id="Menu" className="justify-center space-y-5">
            <h1 className="text-8xl">Menu</h1>
            <div className="bg-white text-primary py-4 w-10/12 max-w-xl space-y-10 font-raleway">
                <div>
                    <h2 className="text-3xl font-chloe">Starters</h2>
                    <p>Scallops</p>
                    <p>Fetta Watermelon Cubes</p>
                    <p>Mini Gazpacho soup</p>
                </div>
                <div className="px-2">
                    <h2 className="text-3xl font-chloe">Mains</h2>
                    <p>Roast Chicken Breat with Mashed Potato</p>
                    <p>Siroil Beed with Red Wind Sauce</p>
                    <p>Mushroom Rissoto with Seared vegetables</p>
                </div>
                <div >
                    <h2 className="text-3xl font-chloe">Desserts</h2>
                    <p>Bannoffee Pie with Ice cream</p>
                    <p>Chocolate Fudge Cake</p>
                    <p>New York Style Cheesecake</p>
                </div>
            </div>
            <div>
                <p className="text-md leading-4 mt-4">Rachael & Joshua</p>
                <p className="text-md leading-4">09.08.26</p>
            </div>

        </FadeSection>
    )
}

export default Menu