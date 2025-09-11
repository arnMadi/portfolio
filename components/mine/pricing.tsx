"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckIcon } from '@heroicons/react/24/solid'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Pricing (){

    return(
        <div id="pricing" className="mt-10 bg-blue-500 text-white px-10 lg:px-22 py-15">
            <h2 className="text-4xl  mb-7 text-center">Nos Prix et Tarifs</h2>
            <div className="flex flex-col lg:flex-row text-gray-800 gap-7">

                <Card className="flex-2">
                    <CardHeader>
                        <CardTitle>Offre Entrepreneur</CardTitle>
                        <CardDescription>Pour les particuliers</CardDescription>
                        <CardAction className="bg-green-500 text-white p-2 rounded-l-full text-sm font-bold">Economique</CardAction>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Site Vitrine pro
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Optimisé SEO pour Google
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Livré en 72h
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Maintenance à faible coût
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Assistance et suivi inclus
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter className="font-bold text-xl flex justify-between">
                        <p>85$</p>
                        <Button className='border-1 border-blue-500 rounded-4xl p-5 bg-white hover:shadow-md hover:bg-white hover:cursor-pointer hover:shadow-none hover:color-blue-500 hover:border-1 hover:border-blue-500'>
                            <Link href='#contact' className="text-blue-500 size hover:text-blue-500">Plus des details</Link>
                        </Button>
                    </CardFooter>
                </Card>
                    
                <Card className="flex-1.5">
                    <CardHeader>
                        <CardTitle>Offre Business</CardTitle>
                        <CardDescription>Pour les PEMs ambitieuses</CardDescription>
                        <CardAction className="bg-yellow-500 text-white p-2 rounded-l-full text-sm font-bold">Plus populaires</CardAction>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Site Vitrine pro
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Site e-commerce (boutique en ligne)
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                M-pesa, Orange money et Airtel Money
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Livré en 72h
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Création logo
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Assistance et suivi inclus
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter className="font-bold text-xl flex justify-between">
                        <p>199$</p>
                        <Button className='border-1 border-blue-500 rounded-4xl p-5 bg-white hover:shadow-md hover:bg-white hover:cursor-pointer hover:shadow-none hover:color-blue-500 hover:border-1 hover:border-blue-500'>
                            <Link href='#contact' className="text-blue-500 size hover:text-blue-500">Plus des details</Link>
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="flex-2">
                    <CardHeader>
                        <CardTitle>Offre Scale</CardTitle>
                        <CardDescription>Pour les entreprises en croissance</CardDescription>
                        <CardAction className="bg-purple-500 text-white p-2 rounded-l-full text-sm font-bold">Scaler</CardAction>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Application web personnalisée
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Application mobile (Android et IOS)
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Contrat de prestation adaptable
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Automatisation + IA
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Integration Visa & Mastercard
                            </li>
                            <li>
                                <CheckIcon className="h-5 w-5 bg-blue-500 rounded-full p-1 mr-3 text-white inline" />
                                Assistance et suivi inclus
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter className="font-bold text-xl flex justify-between">
                        <p>à partir de : 499$</p>
                        <Button className='border-1 border-blue-500 rounded-4xl p-5 bg-white hover:shadow-md hover:bg-white hover:cursor-pointer hover:shadow-none hover:color-blue-500 hover:border-1 hover:border-blue-500'>
                            <Link href='#contact' className="text-blue-500 size hover:text-blue-500">Plus des details</Link>
                        </Button>
                    </CardFooter>
                </Card>

            </div>
        </div>
    )
}