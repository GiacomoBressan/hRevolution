import InfoCard from "./infoCard";

export default function InfoBox() {
  return (
    <div className="flex place-content-around w-full">
      <div className="flex-1 p-4">
        <InfoCard
          imageSrc="/images/boss.jpg"
          text="Francesco Rizzato - Consulente del lavoro HR Manager vi accompagnerà in questo percorso"
        />
      </div>
      <div className="flex-1 p-4">
        <InfoCard
          imageSrc="/images/meeting.jpg"
          text="Workshop e confronto tra imprenditori e consulenti del lavoro per trovare le soluzioni migliori per la tua azienda"
        />
      </div>
    </div>
  );
}
