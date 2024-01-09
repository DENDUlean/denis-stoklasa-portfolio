import React from "react";
import HeroTitle from "./HeroTitle";
import HeroInformations from "./HeroInformations";
import HeroDescription from "./HeroDescription";

const Hero = () => {
    return (
        <div className="lg:flex lg:flex-col lg:gap-7 lg:w-4/12 flex gap-6 flex-col w-9/12">   
            
            <HeroTitle/>

            <HeroInformations/>

            <HeroDescription/>

        </div>
    )
}

export default Hero;