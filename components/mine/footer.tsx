"use client";

import Link from "next/link";

import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaTwitter, FaGithub} from 'react-icons/fa';



export default function Footer (){

    return(
        <div id='contact' className="border-t-1 border-neutral-100 dark:border-neutral-900 pb-5">
            <div className="flex flex-col lg:flex-row p-10 gap-10 justify-around mt-7">
                    <div>
                        <p className="text-lg font-semibold">EXPLORE</p>
                        <div className="flex gap-5">
                            <ul className="flex flex-col gap-2 mt-2 text-md">
                               <li>
                                <Link href='#home'className='hover:text-primary'
                                >Accueil</Link>
                            </li>
                            <li>
                                <Link href='#project' className='hover:text-primary'
                                >Mes Projets</Link>
                            </li>
                            <li>
                                <Link href='#experience'  className='hover:text-primary'
                                >Experience</Link>
                            </li> 
                            <li>
                                <Link href='#contact'  className='hover:text-primary'
                                >Contact</Link>
                            </li> 
                            </ul>

                        </div>
                    </div>

                    <div>
                        <p className="text-lg font-semibold">CONTACTS</p>
                        <div className="flex gap-5">
                            <ul className="flex flex-col gap-2 mt-2 text-md">
                                <li className="flex items-center gap-2">
                                    <FaMailBulk/>
                                    <Link href='mailto:arnoldmadi43@gmail.com' target="_blank" className='hover:text-blue-500'>arnoldmadi43@gmail.com</Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaLinkedin/>
                                    <Link href='https://linkedin.com/in/arnold-madi-5793a5259' target="_blank" className='hover:text-blue-500'>Arnold Madi</Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaGithub/>
                                    <Link href='https://github.com/arnMadi' target="_blank" className='hover:text-blue-500'>arnMadi</Link>
                                </li>
                            </ul>
                        </div>
                    </div>   

                    <div>
                        <p className="text-lg font-semibold">FOLLOW ME</p>
                        <div className="flex gap-5">
                            <ul className="flex flex-col gap-2 mt-2 text-md">
                                <li className="flex items-center gap-2">
                                    <FaFacebook/>
                                    <Link href='https://www.facebook.com/profile.php?id=61582312321599' target="_blank" className='hover:text-blue-500'>Arndev</Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaInstagram/>
                                    <Link href='https://www.instagram.com/arnldmadi?igsh=b2U5NTF1enltdnlx' target="_blank" className='hover:text-blue-500'>arnldmadi</Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaTwitter/>
                                    <Link href='https://www.x.com/arn_madi?t=hBscsjWsgh332_HG64IbA&s=09' target="_blank" className='hover:text-blue-500'>arn_madi</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>   
            </div>
            <p className="mt-5 text-center">&copy; arndev 2025</p>
        </div>
    )
};