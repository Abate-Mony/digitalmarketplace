"use client";
import { PRODUCT_CATEGORIES } from "@/config"
import { useEffect, useState } from "react";
import NavItem from "./NavItem"
import * as React from "react"
const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>()
  // checking if the user  clicks outside of the navitems box will trigger a function to close the navbar

  // close the navbar when press th eescape key 
  useEffect(() => {
    // creating the handler here
    const handler = (e: KeyboardEvent) => {
      if (e.key == "Escape") {
        setActiveIndex(null)
      }
    }
    // creating a event lister down 
    document.addEventListener("keydown", handler)
    //clean up function here 
    // this is to prevent memory leak from the app
    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [])
  return (<div
    className="flex  gap-4 h-full"
  >

    {
      PRODUCT_CATEGORIES.map((category, i) => {
        const isOpen = i === activeIndex
        const isAnyOpen = activeIndex !== null
        const handleOpen = () => {
          // this code just works like a toggle function when the user clicks 
          //  on the if the index click is equal to activeindex some ui effect take place
          if (isOpen) {
            setActiveIndex(null)
          } else (setActiveIndex(i))
        }
        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}

          />
        )
      })
    }
  </div>);
};

export default NavItems
