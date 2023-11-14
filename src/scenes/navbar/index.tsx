import {useState} from "react"
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid"
import logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between"
  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} w-5/6 mx-auto`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <img src={logo} alt="logo" />

                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                        <div  className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <button>Become a Member</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar