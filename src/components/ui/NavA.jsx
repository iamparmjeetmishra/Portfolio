import { NavLink } from "react-router-dom"

const NavA = ({ icon, href, title }) => {
    return (
        <li>
            <NavLink
                to={href}
                className={({isActive}) =>
                    `w-20 h-20 p-auto rounded-xl  cursor-pointer  bg-[#F3F6F6] font-medium text-gray-lite justify-center flex flex-col items-center ${isActive ? 'bg-gradient-to-r from-twOg-200 to-twOg-100 text-white' : 'dark:text-[#A6A6A6]'} transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-twOg-200 to-twOg-100
                    `}
            >
                <span className="text-xl mb-1 w-5">{ icon }</span> {title}
            </NavLink>
        </li>
    )
}

export default NavA