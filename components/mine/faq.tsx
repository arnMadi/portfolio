"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq (){

    return(
        <div id="FAQ" className="mt-10 px-10 lg:px-22">
            <h2 className="text-4xl  my-7 text-center">Foire aux questions</h2>
            <div className="flex flex-row text-gray-800 gap-7">
                <Accordion
                type="single"
                collapsible
                className="w-full flex gap-3 flex-col"
                defaultValue="item-1"
                >
                    <AccordionItem value="item-1" className="p-5 rounded-4xl bg-blue-50">
                        <AccordionTrigger>À qui s&apos;adresse ce service ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Nous sommes au service des marques, des produits et des services qui veulent 
                            une présence digitale percutante (sites web, marketing, design et branding), 
                            sans avoir à attendre des semaines (voire des mois) en passant par une agence 
                            ou un freelancer dont les prix sont exorbitants.
                        </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="p-5 rounded-4xl bg-blue-50">
                        <AccordionTrigger>En quoi sommes-nous différents ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Nous pensons que la qualité ne devrait pas être un luxe. 
                            Notre objectif est de vous offrir une présence en ligne 
                            (site web, marketing digital, branding) digne des plus 
                            grandes entreprises, sans que cela vous coûte une fortune. 
                            
                        </p>
                        <p>
                           C&apos;est en alliant une qualité irréprochable et un prix juste que nous nous distinguons.
                        </p>
                        </AccordionContent>
                    </AccordionItem>
                
                    <AccordionItem value="item-4" className="p-5 rounded-4xl bg-blue-50">
                        <AccordionTrigger>Quelle est la rapidité de vos services ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Nos prestations sont livrées sous 72 heures.
                        </p>
                        <p>
                            C&apos;est la promesse d&apos;un travail soigné. Nous prenons le temps nécessaire 
                            pour que votre projet (site web, logo, etc.) soit parfait, sans sacrifier 
                            les finitions. Nous nous distinguons des solutions basées sur l&apos;IA ou 
                            d&apos;autres services ultra-rapides en vous offrant une qualité irréprochable 
                            et un service personnalisé.
                        </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="p-5 rounded-4xl bg-blue-50">
                        <AccordionTrigger>Pourquoi ne pas se contenter de l&apos;IA ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            L&apos;intelligence artificielle est un excellent point de départ pour une ébauche. 
                            Cependant, pour une marque qui a l&apos;ambition de durer, se démarquer et véhiculer 
                            une vision authentique et puissante, rien ne remplace la création d&apos;un logo unique 
                            et sur-mesure. C&apos;est la différence entre un visuel généré parmi des milliers d&apos;autres 
                            et une identité visuelle qui vous appartient pleinement.
                        </p>
                        
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="p-5 rounded-4xl bg-blue-50">
                        <AccordionTrigger>Comment livrez-vous des sites web de qualité en seulement 72 heures ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Notre secret réside dans l&apos;efficacité. Nous collaborons avec un réseau d&apos;experts, 
                            chacun ayant plusieurs années d&apos;expérience dans son domaine. Grâce à des processus 
                            optimisés et une collaboration fluide, nous allons droit au but. 
                        </p>
                        <p>
                            Nous éliminons les réunions superflues et le "blabla" pour nous concentrer sur l&apos;essentiel : 
                            créer une présence en ligne percutante qui vous démarque réellement.
                        </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7" className="p-5 rounded-4xl bg-blue-50">
                        <AccordionTrigger>Comment se déroule le paiement ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Pour valider le lancement de votre projet, nous demandons un acompte de 40 à 50 % du prix total. 
                            Le solde est à régler une fois que votre site web est en ligne, soit dans les 72 heures.
                        </p>
                        
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8" className="p-5 rounded-4xl bg-blue-50">
                        <AccordionTrigger>Quels sont les modes de paiement ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Pour simplifier au maximum, vous pouvez régler en ligne sans avoir à vous déplacer. 
                            Nous acceptons le Mobile Money pour les paiements en Afrique, et les méthodes 
                            internationales comme Payoneer et les cartes Visa/Mastercard.
                        </p>
                      
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9" className="p-5 rounded-4xl bg-blue-50">
                        <AccordionTrigger>Que se passe-t-il après publication du site ou livraison de nos service ?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Une fois votre site publié et le paiement final effectué, nous vous proposons un service de gestion 
                            et de maintenance à faible coût. Ce service, qui inclut les frais d&apos;hébergement, 
                            vous permet de ne pas vous soucier des mises à jour et des éventuels problèmes techniques.
                        </p>
                        
                        </AccordionContent>
                    </AccordionItem>
                    
                </Accordion>
            </div>
        </div>
    )
}