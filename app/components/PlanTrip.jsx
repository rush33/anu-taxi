import Image from "next/image";
import React from "react";
import { CARS } from "../constants";

const PlanTrip = () => {
  return (
    <section id="plantrip" className="max-container bg-white py-20">
      <div className="mx-auto p-10 max-w-[133rem]">
        <div className="flex flex-col">
          <div className="text-center text-black">
            <h3 className="regular-16 lg:regular-20">Plan your trip now</h3>
            <h2 className="bold-32 lg:bold-60">Select Your Ride</h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 auto-rows-auto mt-4 sm:mt-4">
            {CARS.map((item) => (
              <div key={item.id} className="plan-trip">
                <Image src={item.src} alt={item.alt} height={150} width={250} />
                <h3 className="bold-20 md:bold-22 mt-4">{item.title}</h3>
                <p className="regular-14 md:regular-16 mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTrip;
