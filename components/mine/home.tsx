"use client";
import profile from '../../public/profile.png';
import stack from '@/public/stack.png'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckIcon } from '@heroicons/react/24/solid'



import Image from "next/image";


export default function Home() {

  return (
    <div id="home">
        <div className="px-5 xl:px-0 flex flex-col justify-center gap-5 mt-7 ">
            <Image className='m-auto'
                src={profile}
                alt="Arnold Madi developpeur kinshasa"
                width={200}
                height={200}
                />
            <div className="lg:px-30 justify-center ">
                
                <h1 className="text-center text-4xl font-bold ">Salut, je suis Arnold, développeur Web & Mobile Full Stack</h1>
                <p className="text-center p-2">Passionné par la création d’expériences digitales modernes, performantes et centrées sur l’utilisateur.
                J’allie technologie et design pour transformer les idées en produits concrets : applications fluides, interfaces élégantes et solutions sur mesure.
                Mon objectif : donner vie à tes projets digitaux avec une approche à la fois technique, créative et orientée résultats.</p>
                <div className='flex gap-7 justify-center p-7'>
                    <Link href='mailto:arnoldmadi43@gmail.com'>
                        <Button className='text-gray-100 rounded-full p-6'>Contactez-moi</Button>
                    </Link>
                    <Link href='/arnCv.pdf' target='_blank'>
                        <Button className='text-foreground rounded-full p-6' variant='outline'>Telecharez mon CV</Button>
                    </Link>
                </div>
                <p className='text-center'>Les technologies souvent utilisées dans mes projets:</p>
                <Image className='m-auto'
                src={stack}
                alt='most used technologies | Arndev'
                width={500}
                height={100}/>
            </div>
        </div>
    </div>
  );
}

