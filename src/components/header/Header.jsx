import { useState } from "react"
import { Sun, Moon, CodeIcon, CrossIcon, BarIcon } from "../../media"
import Nav from "./Nav"
import { NavLink } from "react-router-dom"


const header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
            <header className="container w-full flex items-center dark:bg-[#1a1a1a]  justify-between p-3  mt-4 sm:rounded-xl ">
                <div className="w-full flex justify-between px-4">
                    <NavLink to="/" >
                        <div className="flex items-center gap-3 ">
                            <span className=" w-8 h-8 lg:w-12 lg:h-12  rounded bg-gradient-to-r from-twOg-200 to-twOg-100 text-white">
                                <CodeIcon />
                            </span>
                            <span className="text-2xl font-semibold">
                                Parmjeet Mishra
                            </span>
                        </div>
                    </NavLink>
                    <div className="items-center hidden">
                        <span className="bg-white w-[40px] hover:text-white hidden h-[40px] rounded-full lg:flex justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 " >
                            <Sun />
                            <Moon />
                        </span>
                    </div>
                </div>
                {/* Has Nav */}
                <div className="p-4 ml-auto rounded-lg hidden lg:block bg-white dark:bg-[#111111]">
                    <Nav />
                </div>
                <button onClick={() => setToggleMenu(!toggleMenu)} className="lg:invisible visible opacity-100 bg-[#ef4060] w-12 h-10 rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white ">
                    {toggleMenu
                        ? <CrossIcon onClick={() => setToggleMenu(true)} />
                        : <BarIcon onClick={() => setToggleMenu(false)} />
                    }
                    {/* <Nav /> */}
                </button>
            </header>
            {
                toggleMenu && (
                    <div className="relative z-10 w-full h-full">
                            <div className="absolute left-0 right-0 px-2 py-4 dark:bg-[#212425] rounded-b-md ">
                                <Nav />
                            </div>
                    </div>
                )
            }
        </>
    )
}

export default header