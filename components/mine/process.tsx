"use client";


import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Process (){

    return(
        <div id="process" className=" bg-blue-500 text-white px-10 lg:px-22 pb-15">
            <h2 className="text-4xl  mb-7 text-center">Nos process</h2>
            <div className="flex flex-col lg:flex-row text-gray-800 gap-7">

                <Card className="flex-2">
                    <CardHeader>
                        <CardTitle>Prise de contact & Analyse des besoins</CardTitle>
                        <CardDescription></CardDescription>
                        <CardAction className="bg-blue-500 text-white p-2 rounded-b-full text-sm font-bold">1</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Le client nous présente son projet, ses objectifs et ses attentes. Nous posons les bonnes questions pour comprendre sa vision et définir un cahier des charges clair.
                        </p>
                    </CardContent>
                    <CardFooter className="font-bold text-xl flex justify-between">

                    </CardFooter>
                </Card>
                    
                <Card className="flex-2">
                    <CardHeader>
                        <CardTitle>Proposition & Validation</CardTitle>
                        <CardDescription></CardDescription>
                        <CardAction className="bg-blue-500 text-white p-2 rounded-b-full text-sm font-bold">2</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Nous préparons une offre personnalisée (devis, maquette ou plan d’action) et l’adaptons selon les retours du client. Une fois validée, le projet démarre officiellement.
                        </p>
                    </CardContent>
                    <CardFooter className="font-bold text-xl flex justify-between">
                        
                    </CardFooter>
                </Card>

                <Card className="flex-2">
                    <CardHeader>
                        <CardTitle>Conception & Développement</CardTitle>
                        <CardDescription></CardDescription>
                        <CardAction className="bg-blue-500 text-white p-2 rounded-b-full text-sm font-bold">3</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Notre équipe conçoit le design, développe les fonctionnalités et intègre les contenus. Le client peut suivre l’avancement et donner ses feedbacks à chaque étape.
                        </p>
                    </CardContent>
                    <CardFooter className="font-bold text-xl flex justify-between">
                        
                    </CardFooter>
                </Card>

                <Card className="flex-2">
                    <CardHeader>
                        <CardTitle>Livraison & Accompagnement</CardTitle>
                        <CardDescription></CardDescription>
                        <CardAction className="bg-blue-500 text-white p-2 rounded-b-full text-sm font-bold">4</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>
                           Nous livrons un produit clé en main, testé et optimisé. Après la mise en ligne, nous assurons la formation, le support et la maintenance selon les besoins. 
                        </p>
                    </CardContent>
                    <CardFooter className="font-bold text-xl flex justify-between">
                        
                    </CardFooter>
                </Card>

            </div>
        </div>
    )
}