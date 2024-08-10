"use client";

import Image from "next/image";
import React, { useState } from "react";
import GOOGLE_MAPS_REVIEW from "./../constants/index";
import Button from "./Button";
import Masonry from "react-masonry-css";
import ReviewCard from "./ReviewCard";

import reviewsData from "./../constants/reviews.json";

// Convert the imported JSON data to the format needed for the ReviewCard
const REVIEWS = reviewsData.map((item) => ({
  username: item.name,
  image: item.image,
  content: item.review,
}));

const Reviews = () => {
  const [visibleCount, setVisibleCount] = useState(8); // Number of reviews to show initially
  const [hasMore, setHasMore] = useState(REVIEWS.length > 8); // Check if there are more reviews to load

  const loadMoreReviews = () => {
    setVisibleCount((prevCount) => {
      const newCount = prevCount + 8; // Load more reviews in batches of 8
      if (newCount >= REVIEWS.length) {
        setHasMore(false); // No more reviews to load
        return REVIEWS.length;
      }
      return newCount;
    });
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
      <Masonry
        breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
        className="flex w-auto"
        columnClassName="w-full"
      >
        {REVIEWS.slice(0, visibleCount).map((item, index) => (
          <ReviewCard
            key={index}
            content={item.content}
            username={item.username}
            image={item.image}
          />
        ))}
      </Masonry>
      <div className="flex max-container items-center justify-center gap-4 mt-6">
        <Button
          title={hasMore ? "Load More" : "No More Reviews"}
          type="button"
          variant={`btn_white_text ring-1 ring-opacity-50 ${
            hasMore ? "ring-green-500" : "ring-gray-300 cursor-not-allowed"
          }`}
          iconFirst={false}
          onClick={hasMore ? loadMoreReviews : undefined}
          disabled={!hasMore} // Disable button if no more reviews
        />
        <Button
          title="View All in "
          icon="/icons/google-maps-colored.svg"
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
