import FadeSection from "../components/FadeSection"
import Footer from "../components/Footer";

interface MealProps {
    name: string;
    options: string[];
}

const courses = [
    {
        name: "Starters",
        options: ["Scallops", "Fetta Watermelon Cubes", "Mini Gazpacho Soup"]
    },
    {
        name: "Mains",
        options: ["Roast Chicken Breat with Mashed Potato", "Sirloin Beef with Red Wind Sauce", "Mushroom Rissoto with Seared vegetables"]
    },
    {
        name: "Desserts",
        options: ["Bannoffee Pie with Ice cream", "Chocolate Fudge Cake", "New York Style Cheesecake"]
    },

]

function Meal({ course }: { course: MealProps }) {
    return (
        <div>
            <h2 className="text-3xl font-chloe">{course.name}</h2>
            {course.options.map((opt, index) => (
                <p key={index}>{opt}</p>
            ))}
        </div>
    )
}

function Menu() {
    return (
        <FadeSection id="Menu" className="justify-center space-y-5">
            <div className="flex flex-col grow space-y-2 w-full justify-center items-center">
                <h1 className="text-7xl">Menu</h1>
                <div className="bg-white text-primary py-4 w-10/12 max-w-xl space-y-10 font-minerva">
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