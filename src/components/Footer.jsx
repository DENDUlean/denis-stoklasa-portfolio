import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-2 text-sm">
            by Denis Stoklasa 
            <FaRegCopyright size={12}/>
            {new Date().getFullYear().toString()}
        </div>
    )
}

export default Footer;