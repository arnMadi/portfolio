"use client";

import { BiWorld } from "react-icons/bi";
import { FaSmileBeam, FaStar } from "react-icons/fa";

import Image from "next/image";
import ceo from "../../public/ceo.jpg"
import Link from "next/link";

import { Button } from "../ui/button";

export default function About (){

    return(
        <div className="flex flex-col gap-7  mt-7 px-5 xl:px-0" id="apropos">
            <h3 className="text-xl text-center">Nos objectifs cette année :</h3>
            <div id="notes" className="lg:flex-row md:justify-around px-10 flex flex-col gap-3">
                <div className="p-5 rounded-full bg-green-200 flex items-center gap-2 justify-center">
                    <FaStar className="w-7 h-7 text-green-500"/>
                    <p className="font-semibold">4,9/5 – Plus de 500 projets</p>
                </div>
                <div className="p-5 rounded-full bg-orange-200 flex items-center gap-2 justify-center">
                    <FaSmileBeam className="w-7 h-7 text-yellow-500"/>
                    <p className="font-semibold"> 1 000+ clients satisfaits</p>
                </div>
                <div className="p-5 rounded-full bg-violet-200 flex items-center gap-2 justify-center">
                    <BiWorld className="w-7 h-7 text-violet-500"/>
                    <p className="font-semibold"> Présent à l&apos;internationnal</p>
                </div>
            </div>
            <h2 className="text-4xl text-center">Qui sommes-nous ?</h2>
            <div className="flex flex-col items-center gap-3 bg-violet-100  p-15 rounded-3xl">
                <h2 className="text-lg">
                    &quot;Fondés en 2022, nous développons des services et solutions digitales qui permettent <span className="font-semibold">aux 
                    entreprises</span> et <span className="font-semibold">entrepreneurs</span> de <span className="font-semibold">booster leurs chiffres</span> à l&apos;échelle locale, nationale, 
                    continentale et internationale.<br/> Nous proposons une gamme complète de prestations digitales comprenant : la création de sites web et d&apos;applications mobiles, le community management, 
                    la conception d&apos;identités visuelles et de supports graphiques, ainsi que l&apos;accompagnement en stratégie digitale. <br/> Notre mission est d&apos;offrir des solutions innovantes, 
                    adaptées et évolutives pour aider nos clients à atteindre leurs objectifs de croissance et de visibilité.&quot;
                </h2>
                <Link href="https://arndev.dartistes.com" target="_blank">
                    <div className="flex align-center items-center gap-3">
                        <Image
                            className="rounded-full"
                            alt="the photo of Arnold Madi CEO of Dartistes"
                            src={ceo}
                            width={80}
                            height={80}
                        />
                        <span>
                            <h4 className="text-xl font-semibold">Arnold Madi</h4>
                            <p>CEO de Dartistes</p>
                        </span>
                        
                    </div>
                </Link>
            </div>
        
            <div className="flex justify-center mt-5">
                <Button className=" p-7 rounded-full">
                    <Link href="https://wa.me/+243825690001?text=Salut%2C%20je%20suis%20interress%C3%A9(e)%20par%20vos%20service%20et%20j%27aimerais%20savoir%20plus%20sur%20%3A"
                    > En savoir plus </Link>
                </Button>
            </div>
        </div>
    )
};