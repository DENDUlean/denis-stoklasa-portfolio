const Stack = () => {
    return (
        <div className="flex flex-col gap-4 items-center w-4/12">
            <div className="lg:text-left sm:text-center w-full">
                <p>Seznam technologí, které používám</p>
            </div>
            <div className="flex items-center lg:justify-start sm:justify-center gap-8 w-full">
                <div className="flex flex-col gap-3">
                    <img src="././assets/react-svgrepo-com.svg" alt="react-logo" className="w-10 h-10" />
                    <img src="././assets/tailwind-svgrepo-com.svg" alt="tailwindcss-logo" className="w-10 h-10" />
                    <img src="././assets/vite-svgrepo-com.svg" alt="vite-logo" className="w-10 h-10" />
                </div>
                <div className="flex flex-col gap-3">
                    <img src="././assets/typescript-svgrepo-com.svg" alt="typescript-logo" className="w-10 h-10" />
                    <img src="././assets/react-hook-form-logo-only.svg" alt="hook-form-logo" className="w-10 h-10" />
                    <img src="././assets/npm-svgrepo-com.svg" alt="npm-logo" className="w-10 h-10" />
                </div>
                <div className="flex flex-col gap-3">
                    <img src="././assets/react-query.png" alt="query-logo" className="w-11 h-10 "/>
                    <img src="././assets/git-svgrepo-com.svg" alt="git-logo" className="w-10 h-10" />
                    <img src="././assets/docker-svgrepo-com.svg" alt="docker-logo" className="w-10 h-10" />
                </div>
                <div className="flex flex-col gap-3">
                    <img src="././assets/redux-svgrepo-com.svg" alt="redux-logo" className="w-10 h-10" />
                    <img src="././assets/github-svgrepo-com.svg" alt="github-logo" className="w-10 h-10" />
                    <img src="././assets/jest-svgrepo-com.svg" alt="jest-logo" className="w-10 h-10" />
                </div>
            </div>
        </div>
    )
}

export default Stack;