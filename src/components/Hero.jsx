import React from "react";
import HeroTitle from "./HeroTitle";
import HeroInformations from "./HeroInformations";
import HeroDescription from "./HeroDescription";

const Hero = () => {
    return (
        <div className="flex flex-col gap-7 w-4/12">   
            
            <HeroTitle/>

            <HeroInformations/>

            <HeroDescription/>

        </div>
    )
}

export default Hero;