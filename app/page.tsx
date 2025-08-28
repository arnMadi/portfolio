import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10 justify-around">
      <div className=" lex flex-2">
        <h1 className="text-3xl">Sites web professionnels, modernes et performants dès 180 $ seulement !</h1>
        <p>Obtenez un site complet, design sur mesure et optimisé pour convertir vos visiteurs en clients.</p>
        <ul>
          <li>
          ✅ Design moderne & responsive
          </li>
          <li>
          ✅ Optimisé SEO pour Google
          </li>
          <li>
          ✅ Développement rapide & sécurisé
          </li>
          <li>
          ✅ Maintenance et gestion
          </li>
          <li>
          ✅ Assistance et suivi inclus
          </li>
        </ul>
        <div className="flex gap-7">
          <Button className='rounded-4xl p-7 bg-blue-500 hover:bg-blue-700'>
              <Link href='/blog'>Voir les Prix</Link>
          </Button>
          <Button className='border-1 border-white rounded-4xl p-7 bg-white shadow hover:bg-white hover:cursor-pointer hover:shadow-none hover:color-blue-500 hover:border-1 hover:border-blue-500'>
              <Link href='/blog' className="text-black size hover:text-blue-500">Dicuter avec l'expert</Link>
          </Button>
        </div>
      </div>
      <div className="flex-2"></div>
    </div>
  );
}
