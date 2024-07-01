"use client";

import Image from "next/image";
import React from "react";
import { GOOGLE_MAPS_REVIEW, REVIEWS } from "./../constants/index";
import Button from "./Button";
import AliceCarousel from "react-alice-carousel";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="reviews" className="max-container bg-white pb-14">
      <div className="mx-auto p-10 max-w-[133rem]">
        <div className="flex flex-col">
          <div className="text-center text-black">
            <h3 className="text-base lg:text-2xl">Reviewed by Tourists</h3>
            <h2 className="font-bold text-3xl sm:text-5xl">Traveler Tales</h2>
          </div>
        </div>
      </div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={2000}
        animationDuration={3000}
        disableButtonsControls
        autoPlay
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1024: {
            items: 2,
          },
        }}
        items={REVIEWS.map((item, index) => (
          <ReviewCard
            key={index}
            content={item.content}
            username={item.username}
          />
        ))}
        controlsStrategy="alternate"
      />
      <br />
      <div className="flexCenter mt-6">
        <Button
          title="Find out more in "
          icon="/google-maps-colored.svg"
          type="button"
          variant="btn_white_text ring-1 ring-opacity-50 ring-green-500"
          iconFirst={false}
          onClick={() => window.open(GOOGLE_MAPS_REVIEW, "_blank")}
        />
      </div>
    </section>
  );
};

export default Reviews;
