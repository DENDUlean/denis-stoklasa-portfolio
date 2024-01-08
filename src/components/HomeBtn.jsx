import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HomeBtn = () => {
    return (
        <div className="w-6 h-6 flex justify-center items-center">
            <Link to="/">
                <button>
                    <IoHomeOutline className="text-gray-500 cursor-pointer text-sm dark:text-white hover:text-black dark:hover:text-gray-400" size={15}/>
                </button>
            </Link>
        </div>
    )
}

export default HomeBtn;