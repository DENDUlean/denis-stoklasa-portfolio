const Contact = () => {
    return (
        <div className="flex flex-col gap-3 lg:w-4/12 w-9/12 text-gray-500">
            
            <p className="lg:text-base text-xs">Zašlete mi zprávu</p>

            <p className="lg:text-base text-xs">Pokud jsem Vás zaujal můžete mi zaslat e-mail</p>
            
            <div className="flex flex-col justify-center items-center">
                <form action={import.meta.env.REACT_APP_FORM_KEY} method="POST" className="flex flex-col w-full">
                    <input type="text" name="name" placeholder="Vaše jméno..."
                        className="focus:outline-none lg:text-base text-xs p-2 mb-4 border-2 bg-transparent border-gray-300 rounded-md w-64"
                    />

                    <input type="hidden" name="_gotcha" className="hidden"/>
                
                    <input type="email" name="email" placeholder="Váš e-mail..."
                        className="focus:outline-none lg:text-base text-xs p-2 mb-4 border-2 bg-transparent border-gray-300 rounded-md w-64"
                    />

                    <textarea name="message" placeholder="Vaše zpráva..." cols="30" rows="5"
                        className="p-2 lg:text-base text-xs mb-4 bg-transparent border-gray-300 border-2 lg:w-8/12 w-64 rounded-md focus:outline-none"
                    >
                    </textarea>

                    <button type="submit" 
                        className="text-center lg:text-base text-xs inline-block mb-4 w-max p-2 rounded-md bg-gray-400 text-white"
                    >
                        Odeslat
                    </button>
                </form>
            </div>

        </div>
    )
};

export default Contact;