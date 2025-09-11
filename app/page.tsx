import About from "@/components/mine/about";
import Contact from "@/components/mine/contacts";
import Faq from "@/components/mine/faq";
import Home from "@/components/mine/home";
import Pricing from "@/components/mine/pricing";
import Process from "@/components/mine/process";
import Services from "@/components/mine/services";

export default function Accueil() {
  return (
    <div>
      <div className="lg:px-22 flex flex-col">
        <Home/>
        <About/>
        <Services/>
      </div>
      <Pricing/>
      <Process/>
      <Faq/>
      <Contact/>
    </div>
  );
}
