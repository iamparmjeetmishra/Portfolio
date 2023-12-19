import { Sun, Moon, CodeIcon } from "../../media"
import Nav from "./Nav"
import { NavLink } from "react-router-dom"

const header = () => {
    return (
        <header className="container w-full flex items-center dark:bg-[#1a1a1a]  justify-between p-3  mt-5 rounded-lg ">
            <div className="w-full flex justify-between px-4">
                <NavLink to="/" >
                    <div className="flex items-center gap-3 ">
                        <span className="w-12 h-12 rounded bg-gradient-to-r from-twOg-200 to-twOg-100 text-white">
                            <CodeIcon />
                        </span>
                        <span className="text-2xl font-semibold">
                            Parmjeet Mishra
                        </span>
                    </div>
                </NavLink>
                <div className="flex items-center hidden">
                    <span className="bg-white w-[40px] hover:text-white hidden h-[40px] rounded-full lg:flex justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 text-white " >
                        <Sun />
                        <Moon />
                    </span>
                </div>
            </div>
            {/* Has Nav */}
            <div className="p-5 ml-auto rounded-lg bg-white dark:bg-[#111111]">
                <Nav />
            </div>
        </header>
    )
}

export default header