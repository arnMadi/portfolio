'use client';

import Logo from '../../public/logo.png'

import { Button } from "../ui/button";
import Link from "next/link";
import Image from 'next/image';

export default function Nav (){
    return (
        <nav className='flex justify-around py-5 align-center'>
            <div className="logo">
                <Image
                alt='The logo of dartistes.com'
                src={Logo}
                width = {150}
                height={50}/>
            </div>
            <ul className="flex gap-5 mt-2 font-semibold text-slate-700">
                <li>
                    <Link href='#portfolio' className='hover:text-blue-500'>Portfolio</Link>
                </li>
                <li>
                    <Link href='#pricing' className='hover:text-blue-500'>Pricing</Link>
                </li>
                <li>
                    <Link href='#comment'className='hover:text-blue-500'>Comment ça marche</Link>
                </li>
                <li>
                    <Link href='/contact'className='hover:text-blue-500'>Contactez-nous</Link>
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