import { Link } from "react-router-dom";

const HeroDescription = () => {
    return (
        <div className="lg:text-left lg:text-base text-center text-xs">
            <p>
                Jmenuji se Deni Stoklasa a momentálně hledám příležitost pro vstup na trh práce na pozici Junior React developera. 
                Pocházím z blízkého okolí Ostravy a je mi 21 let. Mé vášně a zájmy spočívají v programování a kreativní tvorbě, 
                což tvoří nedílnou součást mého každodenního života. Pokud jsem Vás zaujal více o mě naleznete na
                <Link to="/about" className="hover:text-gray-500 text-blue-600 ml-1">about stránce.</Link>
            </p>
        </div>
    )
}

export default HeroDescription;