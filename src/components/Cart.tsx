"use client"
import React from 'react'
import {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription
} from "./ui/sheet"
import { ShoppingCart } from 'lucide-react'
const Cart = () => {
  return (
    <Sheet >
      <SheetTrigger className='group flex items-center p-2'>

        <ShoppingCart className='h-6 w-6 fkex-shrin text-gray-400 group-hover:text-gray-500'></ShoppingCart>
        <span className='ml-2 text-sm text-gray-700 group-hover:text-gray-800'> 0</span>

      </SheetTrigger>
      <SheetContent side={"right"} className='flex w-full flex-col sm:max-w-lg '>
        <SheetHeader className='space-y-2.5 pr-6'>
        <SheetTitle> Cart (0)</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Cart