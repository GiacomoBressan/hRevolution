import InfoCard from "./infoCard";

export default function InfoBox() {
  return (
    <div className="flex place-content-around">
      <InfoCard imageSrc="/images/boss.jpg" text="40 Hours Training" />
      <InfoCard imageSrc="/images/meeting.jpg" text="40 Hours Training" />
      <InfoCard
        imageSrc="/images/businnessmanIcon.png"
        text="40 Hours Training"
      />
    </div>
  );
}
