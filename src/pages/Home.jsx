import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Stack from "../components/Stack";

const Home = () => {
    return (
        <div className="flex flex-col items-center gap-16 dark:text-white">
            
            <Hero/>

            <Stack/>

            <Projects/>

            <Contact/>

        </div>
    )
}

export default Home;