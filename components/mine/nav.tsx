'use client';

import Logo from '../../public/logo.png'

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


import Link from "next/link";
import Image from 'next/image';

import { useState} from 'react';
import ThemeToggle from './theme_toggle';


export default function Nav (){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={'flex flex-col w-full lg:flex-row justify-around py-5 px-7 xl:px-0 align-center sticky top-0 z-10 bg-white dark:bg-background dark:shadow-gray-800 shadow'}>
            <div className="logo hidden lg:inline">
                <p className='text-3xl font-bold'>Arn<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient bg-[length:200%_200%]'>dev</span></p>
            </div>
            <Collapsible    className='mt-2 lg:hidden '
                            open={isOpen}
                            onOpenChange={setIsOpen}>
                <div className="flex justify-between items-center">
                    <div className="logo">
                        <p className='text-3xl font-bold'>Arn<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient bg-[length:200%_200%]'>dev</span></p>
                    </div>

                    <div className=''>
                        <ThemeToggle/>
                    </div>

                    <CollapsibleTrigger onClick={()=>setIsOpen(true)} className='flex flex-col gap-1'>
                        <span
                        className={`h-1 w-8 bg-foreground rounded-full transition-transform duration-300 ${
                            isOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                        />
                        {/* Ligne 2 */}
                        <span
                        className={`h-1 w-8 bg-foreground rounded-full transition-opacity duration-300 ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }`}
                        />
                        {/* Ligne 3 */}
                        <span
                        className={`h-1 w-8 bg-foreground rounded-full transition-transform duration-300 ${
                            isOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                        />
                    </CollapsibleTrigger>
                </div>
                

                <CollapsibleContent className='mt-5'>
                    <ul className="flex flex-col gap-5 mt-2 font-semibold text-foreground text-center">
                    
                        <li>
                            <Link href='#home'className='hover:text-primary'
                            onClick={()=> setIsOpen(false)}>Accueil</Link>
                        </li>
                        <li>
                            <Link href='#project' className='hover:text-primary'
                            onClick={()=> setIsOpen(false)}>Mes Projets</Link>
                        </li>
                        <li>
                            <Link href='#experience'  className='hover:text-primary'
                            onClick={()=> setIsOpen(false)}>Experience</Link>
                        </li> 
                        <li>
                            <Link href='#contact'  className='hover:text-primary'
                            onClick={()=> setIsOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </CollapsibleContent>
            </Collapsible>

            <ul className="hidden lg:flex gap-5 mt-2 font-semibold ">
                
                <li>
                    <Link href='#home'className='hover:text-primary'
                    onClick={()=> setIsOpen(false)}>Accueil</Link>
                </li>
                <li>
                    <Link href='#project' className='hover:text-primary'
                    onClick={()=> setIsOpen(false)}>Mes Projets</Link>
                </li>
                <li>
                    <Link href='#experience'  className='hover:text-primary'
                    onClick={()=> setIsOpen(false)}>Experience</Link>
                </li> 
                <li>
                    <Link href='#contact'  className='hover:text-primary'
                    onClick={()=> setIsOpen(false)}>Contact</Link>
                </li>
            </ul>
            <div className='hidden lg:inline'>
                <ThemeToggle/>
            </div>
        </nav>
    )
}