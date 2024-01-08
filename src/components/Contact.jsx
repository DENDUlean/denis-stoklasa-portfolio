const Contact = () => {
    return (
        <div className="flex flex-col gap-3 w-4/12 text-gray-500">
            <h3>Zašlete mi zprávu</h3>
            <p>Pokud jsem Vás zaujal můžete mi zaslat e-mail</p>
            <div className="flex flex-col justify-center items-center">
                <form action="https://getform.io/f/9640d04a-261e-4c3e-8808-ccbe19b998fb" method="POST" className="flex flex-col w-full">
                    <input type="text" name="name" placeholder="Vaše jméno..."
                        className="focus:outline-none p-2 mb-4 border-2 bg-transparent border-gray-300 rounded-md w-64"
                    />

                    <input type="hidden" name="_gotcha" className="hidden"/>
                
                    <input type="email" name="email" placeholder="Váš e-mail..."
                        className="focus:outline-none p-2 mb-4 border-2 bg-transparent border-gray-300 rounded-md w-64"
                    />

                    <textarea name="message" placeholder="Vaše zpráva..." cols="30" rows="10"
                        className="p-2 mb-4 bg-transparent border-gray-300 border-2 rounded-md focus:outline-none"
                    >
                    </textarea>

                    <button type="submit" 
                        className="text-center inline-block mb-4 w-max p-2 rounded-md bg-gray-400 text-white"
                    >
                        Odeslat
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Contact;