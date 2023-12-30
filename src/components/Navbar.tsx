import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
// import NavItem from "./NavItem"
import NavItems from "./NavItems"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import Cart from "./Cart"
import * as React from "react"
interface seperatorProps {
    className?: String | any
}
const Seperator = ({ className }: seperatorProps) => <span
    className={cn("h-6 w-px bg-gray-200 ", className)} aria-hidden="true"
>

</span>
const Navbar = () => {
    // const navRef = React.useRef(null);
    const user = null
    return (
        <div
            // ref={navRef}
            className="bg-white sticky z-50 top-0 inset-0 h-16"
        >
            <header
                className="relative bg-white"
            >
                <MaxWidthWrapper
                    className="d"
                >
                    <div
                        className="border-b border-gray-200"
                    >
                        <div className="flex  justify-between h-16 items-center ">
                            {/* {"todo :mobile navheres"} */}
                            <div
                                className="ml-4  lg:ml-0 flex items-center "
                            >
                                <Link
                                    href="/"
                                >
                                    logo

                                </Link>
                                <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch ">
                                    <NavItems />
                                </div>

                            </div>
                            {/* end  of the first section */}
                            <div
                                className="ml-auto flex items-center"
                            >
                                <div
                                    className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
                                >
                                    {/* checking if the user is logging  */}
                                    {user ? null :
                                        <Link
                                            href="/sign-in"
                                            className={buttonVariants({ variant: "ghost" })}
                                        >
                                            Sign In
                                        </Link>
                                    }
                                    {
                                        user ? null : <Seperator />
                                    }
                                    {user ? <p></p> : <Link className={buttonVariants({ variant: "ghost" })}
                                        href={"/sign-up"}
                                    >
                                        Create Acount
                                    </Link>}
                                    {user ? <Seperator /> : null}
                                    {user ? null : <div
                                        className="flex lg:ml-6"
                                    >
                                        <Seperator />

                                    </div>}
                                    {/* cart logo here  */}
                                    <div
                                        className="ml-4 flow-root lg:ml-6 "
                                    >
                                        <Cart />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </MaxWidthWrapper>
            </header>

        </div>
    )
}

export default Navbar