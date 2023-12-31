"use client"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { PRODUCT_CATEGORIES } from "@/config"
import { ChevronDown, Divide } from "lucide-react"
import Image from "next/image"
type Category = typeof PRODUCT_CATEGORIES[number]
interface NavItemsProps {
    category: Category,
    handleOpen: () => void,
    isOpen: boolean,
    isAnyOpen: boolean
}

const NavItem = ({ category, handleOpen, isOpen, isAnyOpen }: NavItemsProps) => {
    const { label } = category;
    // handleopen open the modal and set the activeindex of the index of the element click
    // the fastest typer is the man that can ttpe without the jeyborad
    return (
        <div
            className="flex"
        >
            <div className="relative flex items-center group">
                <Button
                    variant={isOpen ? "secondary" : "ghost"}
                    className="gap-1.5"
                    onClick={handleOpen}
                >
                    {label}
                    <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground ", {
                        "-rotate-180": isOpen
                    })} />
                </Button>
            </div>
            {isOpen ? (
                <div
                    className={cn("absolute inset-x-0 top-full text-sm text-muted-foreground ", {
                        "animate-in fade-in-10 slide-in-from-top-5 ": isAnyOpen
                    })}
                >
                    <div
                        className="absolute inset-0 top-1/2 bg-white shadow "
                        aria-hidden="true"
                    />
                    <div
                        className="relative bg-white"
                    >
                        <div
                            className="mx-auto max-w-7xl px-8"
                        >
                            <div
                                className="grid grid-cols-4 gap-x-8 gap-y-10 py-16 "
                            >
                                <div
                                    className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8"
                                >
                                    {category.featured.map((item, i) => <div
                                        key={item.name}
                                        className="group relative text-base sm:text-sm"
                                    >
                                        <div
                                            className="realtive aspect-video overflow-hidden rounded-lg
                                            bg-gray-100 group-hover:opacity-75"
                                        >
                                            <Image
                                                src={item.imageSrc || "some ia"}
                                                alt="some image"
                                                fill 
                                                className="object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )

}
export default NavItem