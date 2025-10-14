import Image from "next/image"
import Link from "next/link";

import dixi from '@/public/dixi.png';
import dart from '@/public/dartistes.png';
import zandoo from '@/public/zandoo.png'


export default function Services (){

    return(
        <div id="project" className="mt-10 px-5 xl:px-0 flex flex-col gap-5">
            <h2 className="text-4xl  my-7 text-center">Mes projets</h2>
            <p className="text-center">Découvrez trois de nos réalisations, témoins de notre exigence <br className="hidden lg:inline"/> de qualité et de notre souci du détail.</p>
            
            <div className="flex flex-col lg:flex-row gap-10">

                <Link href='https://dartistes.com' target="_blank" className="flex flex-col flex-2 rounded-2xl overflow-hidden border-neutral-200 dark:border-neutral-700 border-2">
                    <div >
                        <div style={{ position: 'relative', width: '100%', height: '300px' }} className="">
                            <Image
                            alt='branding products image'
                            src={dart}
                            layout="fill"
                            objectFit="cover"
                            className="w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-5 p-7 flex-2 overflow-hidden">
                            <h3 className="text-2xl font-semibold">dartistes.com</h3>  
                        </div>
                    </div>
                </Link>

                <Link href='https://zandoo.dartistes.com' target="_blank" className="flex flex-col flex-2 rounded-2xl overflow-hidden border-neutral-200 dark:border-neutral-700 border-2">
                    <div >
                        <div style={{ position: 'relative', width: '100%', height: '300px' }} className="">
                            <Image
                            alt='branding products image'
                            src={zandoo}
                            layout="fill"
                            objectFit="cover"
                            className="w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-5 p-7 flex-2 overflow-hidden">
                            <h3 className="text-2xl font-semibold">zandoo</h3>  
                        </div>
                    </div>
                </Link>

                <Link href="https://arnmadi.github.io/" target="_blank" className="flex flex-col flex-2 rounded-2xl overflow-hidden border-neutral-200 dark:border-neutral-700 border-2">
                    <div >
                        <div style={{ position: 'relative', width: '100%', height: '300px' }} className="">
                            <Image
                            alt='branding products image'
                            src={dixi}
                            layout="fill"
                            objectFit="cover"
                            className="w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-5 p-7 flex-2 overflow-hidden">
                            <h3 className="text-2xl font-semibold">dixi</h3>  
                        </div>
                    </div>
                </Link>
            </div>
            
            
        </div>
    )
}