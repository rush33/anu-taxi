import { useState, useEffect } from "react";
import { SERVICES, PRIMARY_COLOR, SECONDARY_COLOR } from "../constants";

const DynamicServices = () => {
  const [currentService, setCurrentService] = useState(0);
  const [gradientDirection, setGradientDirection] = useState("to right");

  useEffect(() => {
    const getRandomGradientDirection = () => {
      const directions = [
        "to right",
        "to left",
        "to top",
        "to bottom",
        "to top right",
        "to top left",
        "to bottom right",
        "to bottom left",
      ];
      return directions[Math.floor(Math.random() * directions.length)];
    };

    const interval = setInterval(() => {
      setCurrentService((prevService) => (prevService + 1) % SERVICES.length);
      setGradientDirection(getRandomGradientDirection());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      className="pb-2 text-3xl lg:text-5xl font-bold text-transparent bg-clip-text transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(${gradientDirection}, ${PRIMARY_COLOR}, ${SECONDARY_COLOR}, ${PRIMARY_COLOR})`,
        minWidth: "200px",
      }}
    >
      {SERVICES[currentService]}
    </h2>
  );
};

export default DynamicServices;
