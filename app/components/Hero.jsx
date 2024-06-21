"use client";

import Image from "next/image";
import Button from "./Button";
import {
  HERO_SUBTITLE,
  HERO_TITLE,
  PHONE_NUMBER,
  REVIEW_COUNT,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AliceCarousel from "react-alice-carousel";

const Hero = () => {
  const items = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
    "/5.jpeg",
    "/6.jpeg",
  ];

  return (
    <section className="max-container padding-container flex flex-col md:gap-28 xl:flex-row">
      <div className="hero-child1">
        <h1 className="bold-32 lg:bold-52">{HERO_TITLE}</h1>
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
        </div>
      </div>

      <div className="flexCenter w-full lg:w-2/5">
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1500}
          animationDuration={2000}
          disableButtonsControls
          autoPlay
          items={items.map((src) => (
            <div
              key={src}
              className="flex items-center justify-center carousel-item mx-4"
            >
              <Image
                src={src}
                alt="anu tour and taxi"
                width={500}
                height={500}
                className="rounded-3xl"
              />
            </div>
          ))}
          controlsStrategy="alternate"
        />
      </div>
    </section>
  );
};

export default Hero;
