"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckIcon } from '@heroicons/react/24/solid'



export default function Home() {
  return (
    <div>
        <div className="px-5 xl:px-0 flex flex-col lg:flex-row  gap-5 mt-7">
            <div className="flex flex-col gap-7 rounded-4xl p-12 flex-2 bg-radial-[at_50%_75%] to-blue-50 from-white">
                <h1 className="text-4xl font-semibold text-slate-700">Sites web professionnels, modernes et performants dès 180 $ seulement !</h1>
                <p>Obtenez un site complet, design sur mesure et optimisé pour convertir vos visiteurs en clients.</p>
                <ul>
                <li>
                    <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                    Design moderne & responsive
                </li>
                <li>
                    <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                    Optimisé SEO pour Google
                </li>
                <li>
                    <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                    Développement rapide & sécurisé
                </li>
                <li>
                    <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                    Maintenance et gestion
                </li>
                <li>
                    <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                    Assistance et suivi inclus
                </li>
                </ul>
                <div className="flex flex-col gap-7 lg:flex-row">
                    <Button className='rounded-full p-7 bg-blue-500 hover:shadow-lg'>
                        <Link href='#pricing'>Voir les Prix</Link>
                    </Button>
                    <Button className='border-1 border-white rounded-4xl p-7 bg-white shadow-md hover:bg-white hover:cursor-pointer hover:shadow-none hover:color-blue-500 hover:border-1 hover:border-blue-500'>
                        <Link href="https://wa.me/+243825690001?text=Salut%2C%20je%20suis%20interress%C3%A9(e)%20par%20vos%20service%20et%20j%27aimerais%20savoir%20plus%20sur%20%3A"
                             className="text-black size hover:text-blue-500">Dicuter avec un expert</Link>
                    </Button>
                    </div>
                    <div>
                    <h3>Nos equipes sont qualifiées et certifiées par les plus grands de l&apos;industrie :</h3>
                </div>
            </div>
            <div className="flex-2 bg-cover bg-center bg-no-repeat rounded-4xl overflow-hidden">
                <div className="flex-2 bg-cover bg-center bg-no-repeat w-full h-[500px] md:h-[500px] lg:h-[700px]" style={{ backgroundImage:`url('/hero.png')`}}></div>
            </div>
        </div>
    </div>
  );
}
