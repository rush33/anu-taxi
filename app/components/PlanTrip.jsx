import Image from "next/image";
import React from "react";
import { planTripData } from "../constants";

const PlanTrip = () => {
  return (
    <section className="max-container bg-white py-20">
      <div className="mx-auto p-10 max-w-[133rem]">
        <div className="flex flex-col">
          <div className="text-center text-black">
            <h3 className="regular-16 lg:regular-20">Plan your trip now</h3>
            <h2 className="bold-32 lg:bold-40">Quick & easy car rental</h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto mt-14 md:gap-y-8 sm:mt-4">
            {planTripData.map((item) => (
              <div key={item.id} className="plan-trip">
                <Image src={item.src} alt={item.alt} height={150} width={150} />
                <h3 className="bold-20 lg:bold-22">{item.title}</h3>
                <p className="regular-14 lg:regular-16">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTrip;
