import FadeSection from "./ui/FadeSection"
import Footer from "./ui/Footer";

interface MealProps {
    name: string;
    options: string[];
}

export const courses = [
    {
        name: "Appetisers",
        options: ["Bread, Butter, Oils, Balsamic, Olives"]
    },
    {
        name: "Sharing Platters",
        options: ["Three Cheese Croquettes (V)", "Mushroom & Pecorino Arancini (V)", "Sticky BBQ Ribs | Buffalo Cauliflower Wings (VE)", "Salt 'N' Chilli Chicken | Tofu (VE)"]
    },
    {
        name: "Mains",
        options: ["Roast Sirloin of Beef, Vegetables, Potatoes", "Roast Turkey Breast, Vegetables, Potatoes", "Pasta Puttanesca, Peppers, Olives, Spinach (VE)", "Butternut Risotto, Totasted Pumpkin Seeds (VE)"]
    },
    {
        name: "Desserts",
        options: ["Bannoffee Pie", "Pavlova", "Warm Chocolate Brownie (VE)", "Coconut Berry Pannacotta (VE)"]
    },

]

function Meal({ course }: { course: MealProps }) {
    return (
        <div>
            <h2 className=" text-lg xs:text-2xl font-chloe">{course.name}</h2>
            {course.options.map((opt, index) => (
                <p className="text-xs xs:text-sm" key={index}>{opt}</p>
            ))}
        </div>
    )
}

function Menu() {
    return (
        <FadeSection id="Menu" className="justify-center space-y-1 xs:space-y-5">
            <div className="flex flex-col grow xs:space-y-2 w-full justify-center items-center">
                <h1 className="text-5xl xs:text-7xl">Menu</h1>
                <div className="bg-white text-primary py-2 xs:py-6 w-10/12 max-w-xl space-y-3 font-minerva">
                    {courses.map((course, index) => (
                        <Meal key={index} course={course} />
                    ))}
                </div>
            </div>
            <Footer />
        </FadeSection>
    )
}

export default Menu