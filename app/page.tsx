import Home from "@/components/mine/home";
import Pricing from "@/components/mine/pricing";
import Services from "@/components/mine/services";

export default function Accueil() {
  return (
    <div>
      <div className="lg:px-22 flex flex-col">
        <Home/>
        <Services/>
      </div>
      <Pricing/>
    </div>
  );
}
