"use client";

import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import DynamicServices from "./DynamicServices";
import Subtitle from "./Subtitle";
import Title from "./Title";

import { PHONE_NUMBER, WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "../constants";

const Hero = () => {
  const items = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
  ];

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row max-container w-full"
    >
      <div className="flex flex-col w-full md:w-1/2 p-4 md:p-8">
        <Title />
        <div className="flex items-center mt-2 space-x-4">
          <DynamicServices />
        </div>
        <Subtitle />
        <div className="mt-4 flex flex-col md:flex-row gap-2">
          <Button
            title="Call Now"
            icon="/icons/call.svg"
            type="button"
            variant="btn_grad w-full md:w-1/2"
            onClick={() => (window.location.href = `tel:${PHONE_NUMBER}`)}
          />
          <Button
            title="WhatsApp"
            icon="/icons/whatsapp-green.svg"
            type="button"
            variant="btn_white_text w-full md:w-1/2 ring-1 ring-opacity-50 ring-green-500"
            onClick={() =>
              window.open(
                `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
                "_blank"
              )
            }
          />
        </div>
      </div>
      <div className="flex w-full md:w-1/2 p-4">
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
                className="rounded-2xl"
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
