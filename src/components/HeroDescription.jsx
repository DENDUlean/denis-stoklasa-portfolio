import { Link } from "react-router-dom";

const HeroDescription = () => {
    return (
        <div className="lg:text-left lg:text-base text-center text-xs">
            <p>
                Jmenuji se Deni Stoklasa a momentálně hledám příležitost pro vstup na trh práce na pozici Junior React developera. 
                Pocházím z blízkého okolí Ostravy a je mi 21 let. Mezi mé každodení zájmy patří programování, grafická práce a trávení času s nejbližšími. Pokud jsem Vás zaujal více o mě naleznete na
                <Link to="/about" className="hover:text-gray-400 text-gray-500 ml-1 dark:text-gray-400 dark:hover:text-gray-500">about stránce.</Link>
            </p>
        </div>
    )
}

export default HeroDescription;