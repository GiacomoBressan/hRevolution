import { FaSuitcase } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaFaceSmileBeam } from "react-icons/fa6";
import { MdSavings } from "react-icons/md";
import ListItem from "./listItem";
import Card from "./card";

export default function Header() {
  return (
    <div className="w-full h-[600px] bg-white flex">
      <div className="w-full bg-vibranium flex flex-col items-center p-2 px-4">
        <div className="pt-10 text-4xl">
          <h1 className="text-white">ARGOMENTI TRATTATI</h1>
        </div>
        <div className="flex h-full items-center content-center ">
          <ul className="flex flex-col space-y-4 p-8 text-customGray  text-2xl font-bold">
            <ListItem
              icon={<FaArrowTrendUp />}
              text="Strutturare il Successo: Organigrammi, Mansionari e Procedure"
            />
            <ListItem
              icon={<FaSuitcase />}
              text="Strategie per un Onboarding e Offboarding Efficace"
            />
            <ListItem
              icon={<FaHandsHelping />}
              text="Prevenire e Gestiere: Il Contenzioso Aziendale"
            />
            <ListItem
              icon={<FaMoneyBillTrendUp />}
              text="Retribuzione Strategica: Ottimizza il costo del Lavoro"
            />
            <ListItem
              icon={<FaFaceSmileBeam />}
              text="Benessere in Azienda: Gestione del Team e Welfare Aziendale"
            />
            <ListItem
              icon={<MdSavings />}
              text="Numeri Vincenti: Budget Aziendale e del Personale"
            />
          </ul>
        </div>
      </div>
      <div className="w-full bg-white overflow-hidden">
        <img
          src="/images/businnessCouple.png"
          alt="Description"
          className="max-w-full h-auto"
        />
      </div>
      <div className="w-full bg-vibranium flex flex-col items-center">
        <div className="h-[50%] flex items-center">
          <Card
            imageSrc="/images/businnessmanIcon.png"
            text={"40 Hours Training"}
          />
        </div>
        <div className="h-[50%] flex items-center">
          <Card imageSrc="/images/class.png" text="10 Practical Sessions" />
        </div>
      </div>
    </div>
  );
}
