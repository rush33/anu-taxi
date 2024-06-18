"use client";

import Image from "next/image";
import Button from "./Button";
import { HERO_SUBTITLE, HERO_TITLE, PHONE_NUMBER, REVIEW_COUNT, WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
  };

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

        <h1 className="bold-52 lg:bold-88">{HERO_TITLE}</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          {HERO_SUBTITLE}
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
          <Button
            title="Call Now"
            icon="/call.svg"
            type="button"
            variant="btn_green"
            onClick={() => (window.location.href = `tel:${PHONE_NUMBER}`)}
          />

          <Button
            title="WhatsApp"
            icon="/whatsapp-green.svg"
            type="button"
            variant="btn_white"
            onClick={() =>
              window.open(
                `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
                "_blank"
              )
            }
          />

          {/* <IconButton icon="/whatsapp.svg" type="button" /> */}
        </div>

        {/*TODO: Photos Carousel */}

        {/* <div className="">
          <Image
            src="/1.jpeg"
            alt="photos"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src="/2.jpeg"
            alt="photos"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src="/3.jpeg"
            alt="photos"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src="/4.jpeg"
            alt="photos"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src="/5.jpeg"
            alt="photos"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src="/6.jpeg"
            alt="photos"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
