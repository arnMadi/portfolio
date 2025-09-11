"use client";

import Link from "next/link";
import { Button } from "../ui/button";

import { FiMail } from 'react-icons/fi';

import { FaWhatsapp, FaPhoneVolume} from 'react-icons/fa';

import { Label } from "@radix-ui/react-dropdown-menu";

export default function Contact (){

    return(
        <div id="contact" className="mt-10 py-5 lg:px-22">
            <h2 className="text-4xl  my-7 text-center">Contactez notre equipe</h2>
            <div className="flex flex-col lg:flex-row text-gray-800 bg-white lg:shadow-xl flex-col-reverse">

                <div className="flex-2 p-10 flex p-4 flex-col text-center lg:text-left gap-3">
                    <h3 className="text-3xl">
                        Gagnez 10% de réduction
                    </h3>
                    <p className="">Rejoignez notre Base clients 
                        et bénéficiez de jusqu'à <br /> 10% de réduction sur la première commande</p>
                    {/* <Card className="">
                        <CardHeader className="flex-col lg:flex-row">
                            <CardTitle>Gardons contact</CardTitle>
                            <CardDescription>Nous vous recontacterons</CardDescription>
                            <CardAction className="bg-green-500 text-white p-2 rounded-l-full text-sm font-bold">Economique</CardAction>
                        </CardHeader>
                        <CardContent>
                            Hey
                        </CardContent>
                    </Card> */}
                </div>
                <div className="flex-2 flex flex-col gap-4 bg-blue-600 p-15">

                    <Link
                            href="https://wa.me/+243825690001?text=Salut%2C%20je%20suis%20interress%C3%A9(e)%20par%20vos%20service%20et%20j%27aimerais%20savoir%20plus%20sur%20%3A"
                            className="flex-1 flex flex-col text-white items-around gap-3"
                        >
                        <Label className="font-semibold">Whatsapp Business</Label>
                        <Button className=" rounded-full text-white p-2 border-1 border-white cursor-pointer">
                            <div className="flex flex-row items-center justify-around gap-1">
                                <FaWhatsapp className="w-5 h-5"/>
                                <div className="text-xl  font-semibold text-center">
                                    <p>+243 825 690 001</p>
                                </div>
                            </div>
                            
                        </Button>
                    </Link>

                    <Link
                            href="tel:+243825690001"
                            className="flex-1 flex flex-col text-white items-around gap-3"
                        >
                        <Label className="font-semibold">Appel Direct</Label>
                        <Button className=" rounded-full text-white p-2 border-1 border-white cursor-pointer">
                            <div className="flex flex-row items-center justify-around gap-1">
                                <FaPhoneVolume className="w-5 h-5"/>
                                <div className="text-xl  font-semibold text-center">
                                    <p>+243 825 690 001</p>
                                </div>
                            </div>
                            
                        </Button>
                    </Link>

                    <Link
                            href="mailto:arnoldmadi43@gmail.com"
                            className="flex-1 flex flex-col text-white items-around gap-3"
                        >
                        <Label className="font-semibold">Email</Label>
                        <Button className=" rounded-full text-white p-2 border-1 border-white cursor-pointer">
                            <div className="flex flex-row items-center justify-around gap-2">
                                <FiMail className="w-5 h-5"/>
                                <div className="text-lg  font-semibold text-center">
                                    <p>arnoldmadi43@gmail.com</p>
                                </div>
                            </div>
                            
                        </Button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}