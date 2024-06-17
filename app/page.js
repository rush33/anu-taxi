import Image from "next/image";
import Hero from "./components/Hero";
import PlanTrip from "./components/PlanTrip";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <PlanTrip />
    </>
  );
}
