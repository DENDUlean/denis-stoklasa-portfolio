import React from "react";
import HeroLinks from "./HeroLinks";

const HeroInformations = () => {
    return (
        <div className="lg:flex lg:flex-row lg:justify-start lg:gap-5 lg:items-center sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-4¨
            flex flex-col gap-3 items-center justify-center
        ">
            
            <div>
                <img className="rounded-full w-24 h-24 object-fill"  src="/assets/denis.jpeg" alt="denis.jpg" />
            </div>

            <HeroLinks/>

        </div>
    )
}

export default HeroInformations;