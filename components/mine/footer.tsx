"use client";

import Link from "next/link";
import Image from "next/image";
import Logoneg from "../../public/logo_negatif.png"

import { FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';


export default function Footer (){

    return(
        <div className=" bg-gray-100 bg-gray-900 pb-5">
            <div className="flex flex-col lg:flex-row text-gray-200 p-10 gap-10 justify-around mt-7">
                    <div className="logo flex flex-col">
                        <Image
                        alt='The logo of dartistes.com'
                        src={Logoneg}
                        width = {150}
                        height={50}/>
                        <p className="text-xl">DIGITAL SERVICES</p>
                        <p>
                            <Link href="mailto:arnoldmadi43@gmail.com" className="hover:text-blue-500">arnoldmadi43@gmail.com</Link>
                        </p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">EXPLORE</p>
                        <div className="flex gap-5">
                            <ul className="flex flex-col gap-2 mt-2 text-md">
                                <li>
                                    <Link href='/'className='hover:text-blue-500'>Accueil</Link>
                                </li>
                                <li>
                                    <Link href='/services#services' className='hover:text-blue-500'>Services</Link>
                                </li>
                                <li>
                                    <Link href='/services#pricing' className='hover:text-blue-500'>Pricing</Link>
                                </li>
                                <li>
                                    <Link href='/services#process' className='hover:text-blue-500'>Nos Process</Link>
                                </li>
                                <li>
                                    <Link href='/services#team' className='hover:text-blue-500'>Nos equipes</Link>
                                </li>
                                
                            </ul>
                            <ul className="flex flex-col gap-2 mt-2 text-md text-right">
                                <li>
                                    <Link href='/portfolio' className='hover:text-blue-500'>Portfolio</Link>
                                </li>
                                <li>
                                    <Link href='/services#services' className='hover:text-blue-500'>Nos contacts</Link>
                                </li>
                                <li>
                                    <Link href='/services#pricing' className='hover:text-blue-500'>FAQ</Link>
                                </li>
                                <li>
                                    <Link href='/blog'className='hover:text-blue-500'>Blog</Link>
                                </li>
                                <li>
                                <Link href='/blog'>Commandez</Link>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div>
                        <p className="text-lg font-semibold">LEGAL</p>
                        <div className="flex gap-5">
                            <ul className="flex flex-col gap-2 mt-2 text-md">
                                <li>
                                    <Link href='/'className='hover:text-blue-500'>Terms and conditions</Link>
                                </li>
                                <li>
                                    <Link href='/' className='hover:text-blue-500'>Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <p className="text-lg font-semibold">FOLLOW US</p>
                        <div className="flex gap-5">
                            <ul className="flex flex-col gap-2 mt-2 text-md">
                                <li className="flex items-center gap-2">
                                    <FaFacebook/>
                                    <Link href='https://www.facebook.com/profile.php?id=100063658066582' target="_blank" className='hover:text-blue-500'>Facebook</Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaInstagram/>
                                    <Link href='https://www.instagram.com/dartistes_digital?igsh=bGZ6M25iamtveTI4' target="_blank" className='hover:text-blue-500'>Instagram</Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaTwitter/>
                                    <Link href='https://www.x.com/arn_madi?t=hBscsjWsgh332_HG64IbA&s=09' target="_blank" className='hover:text-blue-500'>Twitter</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
            </div>
            <p className="mt-5 text-gray-100 text-center">&copy; Dartistes digital 2025</p>
        </div>
    )
};