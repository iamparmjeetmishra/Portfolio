import { NavLink } from "react-router-dom"

const NavA = ({ icon, href, title }) => {
    return (
        <li className="lg:w-auto w-full">
            <NavLink
                to={href}
                className={({isActive}) =>
                    `w-full lg:w-20 lg:h-20 p-auto lg:rounded-xl cursor-pointer  bg-[#F3F6F6] font-medium text-gray-lite lg:justify-center flex p-2 gap-2 lg:gap-0 lg:flex-col flex-row items-center 
                    ${isActive
                        ? 'bg-gradient-to-r from-twOg-200 to-twOg-100 text-white rounded-xl '
                        : 'dark:text-[#A6A6A6] rounded-xl '
                    } 
                    transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425]  hover:text-white  hover:bg-gradient-to-r from-twOg-200 to-twOg-100
                    `}
            >
                <span className="text-xl mb-1 w-5">{ icon }</span> {title}
            </NavLink>
        </li>
    )
}

export default NavA