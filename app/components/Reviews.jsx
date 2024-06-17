"use client";

import Image from "next/image";
import React from "react";
import { REVIEWS } from "./../constants/index";
import Button from "./Button";
import Slider from "react-slick";

const ReviewCard = ({ content, username }) => {
  return (
    <div className=" bg-green-50 p-8 lg:max-w-[450px] xl:max-w-[734px] xl:rounded-5xl xl:px-14 xl:py-16 w-full relative overflow-hidden rounded-3xl">
      <div className="flexCenter flex items-center gap-3 mb-3">
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
      <p className="regular-16 xl:regular-16  text-white">{content}</p>
      <Image
        src="/quote.svg"
        alt="quote"
        width={186}
        height={219}
        className="camp-quote"
      />
      <div className="flexCenter mt-3">
        <Image
          src={`/${username}.png`}
          alt="Client Avatar"
          className="rounded-full mr-2"
          width={50}
          height={50}
        />
        <p className="bold-20 text-white">{username}</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  var settings = {
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
          slidesToShow: 1,
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
    <section className="max-container bg-white py-10">
      <div className="mx-auto p-10 max-w-[133rem]">
        <div className="flex flex-col">
          <div className="text-center text-black">
            <h3 className="regular-20">Reviewed by People</h3>
            <h2 className="bold-40">Client's Testimonials</h2>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col lg:flex-row"> */}
      <Slider {...settings}>
        {REVIEWS.map((item, index) => (
          <ReviewCard
            key={index}
            f
            content={item.content}
            username={item.username}
          />
        ))}
      </Slider>
      {/* </div> */}
      <div className="flexCenter mt-6">
        <Button
          title="Check out all reviews"
          icon="/right-arrow.svg"
          type="button"
          variant="btn_white_text"
        />
      </div>
    </section>
  );
};

export default Reviews;
