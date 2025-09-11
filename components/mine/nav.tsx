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

import { useState, useEffect } from 'react';


export default function Nav (){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={'flex flex-col lg:flex-row justify-around py-5 px-7 xl:px-0 align-center sticky top-0 z-10 bg-white shadow'}>
            <div className="logo hidden lg:inline">
                <Image
                alt='The logo of dartistes.com'
                src={Logo}
                width = {150}
                height={50}/>
            </div>
            <Collapsible    className='mt-2 lg:hidden '
                            open={isOpen}
                            onOpenChange={setIsOpen}>
                <div className="flex justify-between items-center">
                    <div className="logo">
                    <Image
                    alt='The logo of dartistes.com'
                    src={Logo}
                    width = {150}
                    height={50}/>
                    </div>
                    

                    <CollapsibleTrigger onClick={()=>setIsOpen(true)} className='flex flex-col gap-1'>
                        <span
                        className={`h-1 w-8 bg-black rounded-full transition-transform duration-300 ${
                            isOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                        />
                        {/* Ligne 2 */}
                        <span
                        className={`h-1 w-8 bg-black rounded-full transition-opacity duration-300 ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }`}
                        />
                        {/* Ligne 3 */}
                        <span
                        className={`h-1 w-8 bg-black rounded-full transition-transform duration-300 ${
                            isOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                        />
                    </CollapsibleTrigger>
                </div>
                

                <CollapsibleContent className='mt-5'>
                    <ul className="flex flex-col gap-5 mt-2 font-semibold text-slate-700 text-center">
                        <li>
                            <Link href="https://wa.me/+243825690001?text=Salut%2C%20je%20suis%20interress%C3%A9(e)%20par%20vos%20service%20et%20j%27aimerais%20savoir%20plus%20sur%20%3A"
                            target='_blank' onClick={()=> setIsOpen(false)}>
                                <Button className=' lg:flex rounded-3xl p-5'>
                                    Commandez
                                </Button>
                            </Link>
                        </li>

                        <li>
                            <Link href='/'className='hover:text-blue-500'
                            onClick={()=> setIsOpen(false)}>Accueil</Link>
                        </li>
                        <li>

                            
                            <DropdownMenu>
                                <DropdownMenuTrigger >
                                    <Link href='#services' className='hover:text-blue-500'
                                    >Services & Pricing</Link>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent  >
                                    <DropdownMenuItem className='p-3'>
                                        <Link href='#services' className='hover:text-blue-500'
                                        onClick={()=> setIsOpen(false)}>Services</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='p-3'>
                                        <Link href='#pricing' className='hover:text-blue-500'
                                        onClick={()=> setIsOpen(false)}>Pricing</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='p-3'>
                                        <Link href='#process' className='hover:text-blue-500'
                                        onClick={()=> setIsOpen(false)}>Comment ça marche?</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                                
                            </DropdownMenu>
                        </li>

                        {/* <li>
                            <Link href='#portfolio' className='hover:text-blue-500'
                            onClick={()=> setIsOpen(false)}>Portfolio</Link>
                        </li> */}

                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                <Link href='#contact'className='hover:text-blue-500'>Contactez-nous</Link>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem className='p-3'>
                                        <Link href='#contact' className='hover:text-blue-500'
                                        onClick={()=> setIsOpen(false)}>Nos contacts</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='p-3'>
                                        <Link href='#FAQ' className='hover:text-blue-500'
                                        onClick={()=> setIsOpen(false)}>FAQ</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            
                        </li>
                        {/* <li>
                            <Link href='#blog'className='hover:text-blue-500'
                            onClick={()=> setIsOpen(false)}>Blog</Link>
                        </li> */}
                    </ul>
                </CollapsibleContent>
            </Collapsible>

            <ul className="hidden lg:flex gap-5 mt-2 font-semibold text-slate-700">
                <li>
                    <Link href='/'className='hover:text-blue-500'>Accueil</Link>
                </li>
                <li>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Link href='#services' className='hover:text-blue-500'>Services & Pricing</Link>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='border-1 border-red'>
                            
                            <Link href='#services' className='hover:text-blue-500'>
                                <DropdownMenuItem className='p-3'>
                                    Services
                                </DropdownMenuItem>
                            </Link>

                            <Link href='#pricing' className='hover:text-blue-500'>
                                <DropdownMenuItem className='p-3'>
                                    Pricing
                                </DropdownMenuItem>
                            </Link>
                            
                            <Link href='#process' className='hover:text-blue-500'>
                                <DropdownMenuItem className='p-3'>
                                    Comment ça marche?
                                </DropdownMenuItem>
                            </Link>

                        </DropdownMenuContent>
                    </DropdownMenu>
                </li>
                {/* <li>
                    <Link href='#portfolio' className='hover:text-blue-500'>Portfolio</Link>
                </li> */}
                <li>
                    <DropdownMenu>
                        <Link href='#contact'className='hover:text-blue-500'>
                            <DropdownMenuTrigger>
                            Contactez-nous
                            </DropdownMenuTrigger>
                        </Link>
                        <DropdownMenuContent>

                            <Link href='#contact' className='hover:text-blue-500'>
                                <DropdownMenuItem className='p-3'>
                                    Nos contacts
                                </DropdownMenuItem>
                            </Link>

                            <Link href='#FAQ' className='hover:text-blue-500'>
                                <DropdownMenuItem >
                                    FAQ
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    
                </li>
                {/* <li>
                    <Link href='#blog'className='hover:text-blue-500'>Blog</Link>
                </li> */}
            </ul>
            <Button className='hidden lg:flex rounded-3xl p-5'>
                <Link href="https://wa.me/+243825690001?text=Salut%2C%20je%20suis%20interress%C3%A9(e)%20par%20vos%20service%20et%20j%27aimerais%20savoir%20plus%20sur%20%3A"
                target='_blank'>Commandez</Link>
            </Button>
        </nav>
    )
}