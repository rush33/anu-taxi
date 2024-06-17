import Image from "next/image";
import Button from "./Button";
import { REVIEW_COUNT } from "../constants";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px] "
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
        /> */}

        <h1 className="bold-52 lg:bold-88">Save big with our car rental</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            {REVIEW_COUNT}
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button title="Book A Ride" type="button" variant="btn_green" />
          <Button
            title="How We Work?"
            icon="/play.svg"
            type="button"
            variant="btn_white_text"
          />
        </div>
      </div>

      {/*TODO: Photos Carousel */}
    </section>
  );
};

export default Hero;
