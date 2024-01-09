const Stack = () => {
    return (
        <div className="lg:flex lg:flex-col lg:w-4/12 lg:gap-5 flex flex-col gap-3 w-9/12">
            <div className="lg:text-left lg:text-base text-xs text-center">
                <p>Seznam technologí, které používám</p>
            </div>

            <div className="flex flex-col gap-4 justify-center lg:items-start items-center">
                <div className="flex lg:gap-7 gap-6 lg:w-5/12 w-6/12 items-center lg:justify-start justify-center">
                    <img src="././assets/react-svgrepo-com.svg" alt="react-logo" className="lg:w-10 lg:h-10 w-7 h-7" />
                    <img src="././assets/typescript-svgrepo-com.svg" alt="typescript-logo" className="lg:w-10 lg:h-10 w-7 h-7" />
                    <img src="././assets/react-query.png" alt="query-logo" className="lg:w-10 lg:h-10 w-7 h-7"/>
                    <img src="././assets/redux-svgrepo-com.svg" alt="redux-logo" className="lg:w-10 lg:h-10 w-7 h-7" />
                </div>
                <div className="flex lg:gap-7 gap-6 lg:w-5/12 w-6/12 lg:justify-start items-center justify-center">
                    <img src="././assets/tailwind-svgrepo-com.svg" alt="tailwindcss-logo" className="lg:w-10 lg:h-8 w-7 h-7" />
                    <img src="././assets/react-hook-form-logo-only.svg" alt="hook-form-logo" className="lg:w-10 lg:h-10 w-7 h-7" />
                    <img src="././assets/vite-svgrepo-com.svg" alt="vite-logo" className="lg:w-10 lg:h-8 w-7 h-7" />
                    <img src="././assets/npm-svgrepo-com.svg" alt="npm-logo" className="lg:w-10 lg:h-10 w-7 h-7" />
                </div>
                <div className="flex lg:gap-7 gap-6 lg:w-5/12 w-6/12 items-center lg:justify-start justify-center">
                    <img src="././assets/jest-svgrepo-com.svg" alt="jest-logo" className="lg:w-10 lg:h-10 w-7 h-7" />
                    <img src="././assets/docker-svgrepo-com.svg" alt="docker-logo" className="lg:w-10 lg:h-10 w-7 h-7" />
                    <img src="././assets/git-svgrepo-com.svg" alt="git-logo" className="lg:w-10 lg:h-10 w-7 h-7" />
                    <img src="././assets/github-svgrepo-com.svg" alt="github-logo" className="lg:w-10 lg:h-10 w-7 h-7" />
                </div>
            </div>
            
        </div>
    )
}

export default Stack;