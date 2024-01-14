import { Link } from "react-router-dom";

const About = () => {
    return(
        <div className="flex flex-col items-center dark:text-white">
            <div className="flex flex-col gap-6 lg:w-4/12 w-9/12">
                
                <div className="flex flex-col items-center gap-3 mt-2">
                    <img className="rounded-full w-24 h-24 object-fill"  src="/assets/denis.jpeg" alt="denis.jpg" />
                    <h1 className="font-bold lg:text-3xl sm:text-xl">Denis Stoklasa</h1>
                </div>

                <div className="flex flex-col items-center gap-3 text-center">
                    <p className="lg:text-sm text-center text-xs w-full p-2">
                        Jmenuji se Denis Stoklasa a má vášeň je vidět jak se mi před očima tvoří projekty pomocí řádky kódu. Proto jsem se také
                        před rokém a půl rozhodl věnovat se programování a tvorbě webových aplikací a stránek na plno. Jsem mladý "programátor-samouk", který se
                        rozhodl jít za svými sny.
                    </p>
                    <p className="text-center lg:text-sm text-xs w-full p-2">
                        Každý den beru jako výzvu a novou příležitost naučit se něco nového nebo prohloubit své znalosti.
                        Momentálně hledám příležitost pro entry / junior level pozici jakožto React developer.
                    </p>
                    <p className="text-center lg:text-sm text-xs w-full p-2">
                        Jsem si vědom svých nedostatků a snažím se je doplnit pokaždé kdykoliv mám k tomu příležitost. Člověk se učí ze svých chyb.
                        Ovšem věřím tomu že dokáži přinést zodpovědnost a ambiciozní krev do Vašeho týmu, která je ochotná se učit nové věci.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    
                    <p className="w-full lg:text-sm text-xs text-center p-2">
                        Pokud jsem Vás zaujal můžete si stáhnout mé CV ve formě PDF.
                        Naleznete v něm veškeré potřebné informace, které jsem zde nezmínil
                    </p>

                    <a href="././assets/CV.pdf" download="Stoklasa-CV.pdf">
                        <button typeof="button" className="inline-block bg-gray-800 text-white lg:text-sm text-xs rounded-md w-max p-2">
                            Stáhnout CV
                        </button>
                    </a>
                    
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="lg:text-sm text-xs">Něco málo z mého života naleznete na mém IG účtu</p>

                    <Link to="https://www.instagram.com/denis.stoklasa/">
                        <img src="././assets/ig-feed.PNG" alt="ig-feed" className="w-96" /> 
                    </Link>
                
                </div>
            
            </div>
        </div>
    )
}

export default About;