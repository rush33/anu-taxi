import React from "react";
import Image from "next/image";

const ReviewCard = ({ content, username }) => {
  return (
    <div className="review-card-gradient ml-10 mr-10 mt-8 p-4 md:p-8 lg:p-12 relative overflow-hidden rounded-2xl">
      <div>
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
        <p className="regular-16 xl:regular-16 text-white">{content}</p>
      </div>
      <Image
        src="/travel.svg"
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

export default ReviewCard;
