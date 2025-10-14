"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckIcon } from '@heroicons/react/24/solid'

import { Laptop, CodeXml, PenTool, ListCheck, Presentation, HatGlassesIcon} from "lucide-react";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Pricing (){

    return(
        <div id="experience" className="mt-10 px-10 lg:px-22 py-15">
            <h2 className="text-4xl  mb-7 text-center">Experiences</h2>
            <div className="flex flex-col gap-7">

                <ul className=" grid grid-cols-1 lg:grid-cols-2 m-auto">
                    <li className="flex gap-1 items-center">
                        <div className="text-white flex rounded-full bg-cyan-700 p-3">
                            <CodeXml/>
                        </div>
                        <Item>
                            <ItemContent>
                                <ItemTitle>Front-end developper</ItemTitle>
                                <ItemDescription>React.js, Next.js, Tailwind CSS, 
                                HTML5, CSS3, JavaScript (ES6+), Framer Motion, Figma</ItemDescription>
                            </ItemContent>
                        </Item>
                    </li>
                    <li className="flex gap-1 items-center">
                        <div className="text-white flex rounded-full bg-green-700 p-3">
                            <Laptop/>
                        </div>
                        <Item>
                            <ItemContent>
                                <ItemTitle>Backend developper</ItemTitle>
                                <ItemDescription>Node.js, Express.js, Firebase, MongoDB, 
                                    PostgreSQL, REST API, </ItemDescription>
                            </ItemContent>
                        </Item>
                    </li>
                    <li className="flex gap-1 items-center">
                        <div className="text-white flex rounded-full bg-pink-700 p-3">
                            <ListCheck/>
                        </div>
                        <Item>
                            <ItemContent>
                                <ItemTitle>IT support/manager</ItemTitle>
                                <ItemDescription>Windows/Linux, Active Directory, Cisco Tools, Remote Desktop, 
                                    Office 365, HelpDesk, VMware</ItemDescription>
                            </ItemContent>
                        </Item>
                    </li>
                    <li className="flex gap-1 items-center">
                        <div className="text-white flex rounded-full bg-red-700 p-3">
                            <HatGlassesIcon/>
                        </div>
                        <Item>
                            <ItemContent>
                                <ItemTitle>Cyber-security enthusiast</ItemTitle>
                                <ItemDescription>Wireshark, Nmap, Metasploit, Kali Linux, Burp Suite, OWASP, 
                                    Firewall Configuration, Cloud Security</ItemDescription>
                            </ItemContent>
                        </Item>
                    </li>
                    <li className="flex gap-1 items-center">
                        <div className="text-white flex rounded-full bg-orange-700 p-3">
                            <PenTool/>
                        </div>
                        <Item>
                            <ItemContent>
                                <ItemTitle>Graphic designer</ItemTitle>
                                <ItemDescription>Adobe Photoshop, Illustrator, Figma, Canva, 
                                    Adobe XD, Lightroom, Inkscape</ItemDescription>
                            </ItemContent>
                        </Item>
                    </li>
                    <li className="flex gap-1 items-center">
                        <div className="text-white flex rounded-full bg-blue-700 p-3">
                            <Presentation/>
                        </div>
                        <Item>
                            <ItemContent>
                                <ItemTitle>Coach et formateur en informatque et Graphic design</ItemTitle>
                                <ItemDescription>Google Classroom, Notion, PowerPoint, OBS Studio, Canva, 
                                GitHub, VS Code</ItemDescription>
                            </ItemContent>
                        </Item>
                    </li>
                </ul>
            </div>
        </div>
    )
}