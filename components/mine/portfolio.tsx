"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"



export default function Portfolio (){

    return(
        <div id="portfolio" className="mt-10 px-10 lg:px-22">
            <h2 className="text-4xl  my-7 text-center">Notre Portfolio</h2>
            <div className="flex flex-row text-gray-800 gap-7">
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="">
                        <TabsTrigger value="vitrine">Site Vitrines Pro</TabsTrigger>
                        <TabsTrigger value="ecom">Site ecommerce</TabsTrigger>
                        <TabsTrigger value="app">Application mobile</TabsTrigger>
                        <TabsTrigger value="appWeb">Application Web</TabsTrigger>
                        <TabsTrigger value="saas">SaaS</TabsTrigger>
                        <TabsTrigger value="desktop">Desktop</TabsTrigger>
                    </TabsList>
                    <TabsContent value="vitrine">Make changes to your account here. vitrine</TabsContent>
                    <TabsContent value="ecom">Change your password here. ecom</TabsContent>
                    <TabsContent value="app">Change your password here. app</TabsContent>
                    <TabsContent value="appWeb">Change your password here. appW</TabsContent>
                    <TabsContent value="saas">Change your password here. saas</TabsContent>
                    <TabsContent value="desktop">Change your password here. Desktop</TabsContent>
                </Tabs>
            </div>
        </div>
    )
}