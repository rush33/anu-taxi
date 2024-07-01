import React from "react";
import { GOOGLE_MAPS, PRIMARY_COLOR, SECONDARY_COLOR } from "../constants";

const Subtitle = () => {
  return (
    <p className="mt-4 text-gray-600 text-sm sm:text-base">
      Planning a trip to{" "}
      <span className="font-medium text-sm sm:text-base">Shillong</span>,{" "}
      <span className="font-medium text-sm sm:text-base">Tawang</span>, or{" "}
      <span className="font-medium text-sm sm:text-base">Kaziranga</span>? We've
      got you covered with everything you need for your next adventure in{" "}
      <span className="font-medium text-sm sm:text-base">Meghalaya</span>,{" "}
      <span className="font-medium text-sm sm:text-base">Assam</span>, or{" "}
      <span className="font-medium text-sm sm:text-base">
        Arunachal Pradesh
      </span>
      . See our{" "}
      <a
        href={GOOGLE_MAPS}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-sm sm:text-base"
        style={{ color: SECONDARY_COLOR }}
      >
        Google reviews
      </a>{" "}
      to find out why we're the{" "}
      <span className="font-medium text-sm sm:text-base">
        best service in Guwahati
      </span>
      . Call us now to plan your trip!
    </p>
  );
};

export default Subtitle;
