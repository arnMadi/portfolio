'use client';

import Logo from '../../public/logo.png'

import { Button } from "../ui/button";import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import Link from "next/link";
import Image from 'next/image';

export default function Nav (){
    return (
        <nav className='flex justify-around py-5 align-center sticky'>
            <div className="logo">
                <Image
                alt='The logo of dartistes.com'
                src={Logo}
                width = {150}
                height={50}/>
            </div>
            <ul className="flex gap-5 mt-2 font-semibold text-slate-700">
                <li>
                    <Link href='/'className='hover:text-blue-500'>Accueil</Link>
                </li>
                <li>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Link href='/services' className='hover:text-blue-500'>Services & Pricing</Link>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href='/services#services' className='hover:text-blue-500'>Services</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href='/services#pricing' className='hover:text-blue-500'>Pricing</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href='/services#process' className='hover:text-blue-500'>Nos Process</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                               <Link href='/services#team' className='hover:text-blue-500'>Nos equipes</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </li>
                <li>
                    <Link href='/portfolio' className='hover:text-blue-500'>Portfolio</Link>
                </li>
                <li>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                           <Link href='/contact'className='hover:text-blue-500'>Contactez-nous</Link>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href='/services#services' className='hover:text-blue-500'>Nos contacts</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href='/services#pricing' className='hover:text-blue-500'>FAQ</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    
                </li>
                <li>
                    <Link href='/blog'className='hover:text-blue-500'>Blog</Link>
                </li>
            </ul>
            <Button className='rounded-3xl p-5'>
                <Link href='/blog'>Commandez</Link>
            </Button>
        </nav>
    )
}