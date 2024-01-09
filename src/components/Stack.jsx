const Stack = () => {
    return (
        <div className="border lg:flex lg:flex-col lg:gap-4 lg:items-center lg:w-4/12 w-9/12 flex flex-col gap-3">
            
            <div className="lg:text-left text-center w-full">
                <p>Seznam technologí, které používám</p>
            </div>

            <div className="flex items-center lg:justify-start justify-center gap-8 w-full">
                <div className="border flex flex-col gap-2 items-center justify-center">
                    <img src="././assets/react-svgrepo-com.svg" alt="react-logo" className="w-4 h-4" />
                    <img src="././assets/tailwind-svgrepo-com.svg" alt="tailwindcss-logo" className="w-4 h-4" />
                    <img src="././assets/vite-svgrepo-com.svg" alt="vite-logo" className="w-4 h-4" />
                </div>
                <div className="border flex flex-col gap-2">
                    <img src="././assets/typescript-svgrepo-com.svg" alt="typescript-logo" className="w-4 h-4" />
                    <img src="././assets/react-hook-form-logo-only.svg" alt="hook-form-logo" className="w-4 h-4" />
                    <img src="././assets/npm-svgrepo-com.svg" alt="npm-logo" className="w-4 h-4" />
                </div>
                <div className="border flex flex-col gap-2">
                    <img src="././assets/react-query.png" alt="query-logo" className="w-4 h-4 "/>
                    <img src="././assets/git-svgrepo-com.svg" alt="git-logo" className="w-4 h-4" />
                    <img src="././assets/docker-svgrepo-com.svg" alt="docker-logo" className="w-4 h-4" />
                </div>
                <div className="border flex flex-col gap-2">
                    <img src="././assets/redux-svgrepo-com.svg" alt="redux-logo" className="w-4 h-4" />
                    <img src="././assets/github-svgrepo-com.svg" alt="github-logo" className="w-4 h-4" />
                    <img src="././assets/jest-svgrepo-com.svg" alt="jest-logo" className="w-4 h-4" />
                </div>
            </div>
            
        </div>
    )
}

export default Stack;