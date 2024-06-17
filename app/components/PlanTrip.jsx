import Image from "next/image";
import React from "react";

const PlanTrip = () => {
  return (
    <section className="max-container bg-white py-20">
      <div className="mx-auto p-10 max-w-[133rem]">
        <div className="flex flex-col">
          <div className="text-center text-black">
            <h3 className="regular-20">Plan your trip now</h3>
            <h2 className="bold-40">Quick & easy car rental</h2>
          </div>

          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto mt-14 md:gap-y-8 sm:mt-4">
            <div className="plan-trip">
              <Image src="/icon2.png" alt="icon_img" height={150} width={150} />
              <h3 className="bold-22">Contact Operator</h3>
              <p className="regular-16">
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>

            <div className="plan-trip">
              <Image src="/icon1.png" alt="icon_img" height={150} width={150} />
              <h3 className="bold-22">Select Car</h3>
              <p className="regular-16">
                We offer a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>

            <div className="plan-trip">
              <Image src="/icon3.png" alt="icon_img" height={150} width={150} />
              <h3 className="bold-22">Let's Drive</h3>
              <p className="regular-16">
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTrip;
