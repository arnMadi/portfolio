import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckIcon } from '@heroicons/react/24/solid'

import idService from "../../public/services-id-visuelle.png"
import webService from "../../public/services-web-mobile.png"
import socialService from "../../public/services-social-media.png"


export default function Services (){

    return(
        <div id="services" className="mt-10 px-5 xl:px-0">
            <h2 className="text-4xl  my-7 text-center">Autres Services</h2>
           <div className="flex flex-col lg:flex-row text-gray-800 gap-10">

                <div className="flex flex-col flex-2 rounded-4xl overflow-hidden bg-purple-100 shadow-xl">
                    <div style={{ position: 'relative', width: '100%', height: '300px' }} className="">
                        <Image
                        alt='branding products image'
                        src={webService}
                        layout="fill"
                        objectFit="cover"
                        className="w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-5 p-7 flex-2 overflow-hidden bg-white">
                        <h3 className="text-2xl font-semibold">Développement Web & Mobile</h3>
                        <ul>
                            <li>
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                                Site vitrine professionnel
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                                Site e-commerce (boutique en ligne)
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                                Application web personalisée
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                                Application mobile (Android & iOS)
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                               Refonte et optimisation de site existant
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                               Intégration de systèmes de paiement
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                               
                               Maintenance et hébergement
                            </li>
                        </ul>
                        <div className="flex justify-between">
                            <Button className='rounded-full p-5 bg-blue-500 hover:shadow-lg'>
                                <Link href="https://wa.me/+243825690001?text=Salut%2C%20je%20suis%20interress%C3%A9(e)%20par%20vos%20service%20et%20j%27aimerais%20savoir%20plus%20sur%20%3A%20le%20developpement%20web%20et%20Mobile."
                                target="_blank">Commander</Link>
                            </Button>
                            <Button className='border-1 border-white rounded-4xl p-5 bg-white shadow-md hover:bg-white hover:cursor-pointer hover:shadow-none hover:color-blue-500 hover:border-1 hover:border-blue-500'>
                                <Link href='#contact' className="text-black size hover:text-blue-500">Plus des details</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-2 rounded-4xl overflow-hidden bg-red-100 shadow-xl">
                    <div style={{ position: 'relative', width: '100%', height: '300px' }} className="">
                        <Image
                        alt='branding products image'
                        src={socialService}
                        layout="fill"
                        objectFit="cover"
                        className="w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-5 p-7 flex-2 overflow-hidden bg-white">
                        <h3 className="text-2xl font-semibold">Réseaux Sociaux & Marketing Digital</h3>
                        <ul>
                            <li>
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                                Création et gestion de pages   
                            </li>
                            <li className="text-sm">
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                                Community management (animation, modération, interaction sur vos pages)
                                
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                                Publicité en ligne (Facebook, Google)
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                                Campagnes de génération des ventes
                            </li>
                            <li className="text-sm">
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                               Stratégie de contenu et calendrier éditorial
                            </li>
                            <li className="text-sm">
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                               Analyse de performance et reporting mensuel
                            </li>
                        </ul>
                        <div className="flex justify-between">
                            <Button className='rounded-full p-5 bg-blue-500 hover:shadow-lg'>
                                <Link href="https://wa.me/+243825690001?text=Salut%2C%20je%20suis%20interress%C3%A9(e)%20par%20vos%20service%20et%20j%27aimerais%20savoir%20plus%20sur%20%3A les réseaux sociaux"
                                target="_blank">Commander</Link>
                            </Button>
                            <Button className='border-1 border-white rounded-4xl p-5 bg-white shadow-md hover:bg-white hover:cursor-pointer hover:shadow-none hover:color-blue-500 hover:border-1 hover:border-blue-500'>
                                <Link href='#contact' className="text-black size hover:text-blue-500">Plus des details</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-2 rounded-4xl overflow-hidden bg-orange-100 shadow-xl">
                    <div style={{ position: 'relative', width: '100%', height: '300px' }} className="">
                        <Image
                        alt='branding products image'
                        src={idService}
                        layout="fill"
                        objectFit="cover"
                        className="w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-5 p-7 flex-2 overflow-hidden bg-white">
                        <h3 className="text-2xl font-semibold">Identité Visuelle & Branding pro</h3>
                        <ul>
                            <li>
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                                Conception de logo professionnel
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                                Cartes de visite, flyers, affiches
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                                Création de charte graphique complète
                            </li>
                            <li className="text-sm">
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                                Design de supports digitaux (bannières, visuels réseaux sociaux, présentations…)                              
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                                Packaging & maquettes produits
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 mr-3 text-blue-500 inline" />
                                Rebranding et modernisation d’image
                            </li>
                        </ul>
                        <div className="flex justify-between">
                            <Button className='rounded-full p-5 bg-blue-500 hover:shadow-lg'>
                                <Link href="https://wa.me/+243825690001?text=Salut%2C%20je%20suis%20interress%C3%A9(e)%20par%20vos%20service%20et%20j%27aimerais%20savoir%20plus%20sur%20%3A le branding"
                                target="_blank">Commander</Link>
                            </Button>
                            <Button className='border-1 border-white rounded-4xl p-5 bg-white shadow-md hover:bg-white hover:cursor-pointer hover:shadow-none hover:color-blue-500 hover:border-1 hover:border-blue-500'>
                                <Link href='#contact' className="text-black size hover:text-blue-500">Plus des details</Link>
                            </Button>
                        </div>
                    </div>
                    
                </div>
           </div>
        </div>
    )
}