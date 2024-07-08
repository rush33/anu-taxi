// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "reviews", label: "Reviews" },
  { href: "/", key: "services", label: "Plan a Trip With Us" },
  { href: "/", key: "reach_us", label: "Reach Us" },
];

//COLORS
export const PRIMARY_COLOR = "#a8e063";
export const SECONDARY_COLOR = "#56ab2f";

//CONTENT
export const REVIEW_COUNT = 54;
export const SERVICES = ["Taxi Service", "Hotel Booking", "Trip Planning"];
export const HERO_TITLE =
  "Explore the Wonders of Assam, Meghalaya, and Arunachal Pradesh";
export const HERO_SUBTITLE =
  "Planning a trip to Assam, Meghalaya, or Arunachal Pradesh? We’ve got you covered with everything! Rated 4.9/5 stars on Google becaue we are the Best in Guwahati. Call us now to plan your trip!";

export const META_TITLE =
  "Anu Tour and Taxi | Best Tour and Taxi Service in Guwahati, Assam";
export const META_DESCRIPTION =
  "Anu Tour and Taxi offers the best tour and taxi services in Guwahati, Assam. We provide exceptional tour experiences in Assam, Arunachal, and Meghalaya, covering destinations like Tawang and Shillong. From planning trips to comfortable stays and guided tours, we ensure your journey is memorable. Choose Anu Tour and Taxi for an unforgettable travel experience.";
export const META_KEYWORDS =
  "Anu Tour and Taxi, Anu Tour and Travels, best tour service Guwahati, best taxi service Assam, tour services Assam, taxi services Guwahati, Tawang tours, Shillong tours, Assam travel guide, Arunachal travel, Meghalaya tours, Guwahati taxi service, Assam tour planning, comfortable stays Assam, guided tours Assam, group travel Assam, travel services Guwahati, Anu Tours and Taxi, Anu Tours and Travels, Anu Tour & Taxi, Anu Tour & Travels, Anu Tours & Taxi, Anu Tours & Travels, Any Tour and Taxi, Any Tour and Travels, Anu Tour Guwahati, Anu Taxi Service, Anu Travel Agency, Anu Travel Guwahati";
export const WHATSAPP_MESSAGE = "I would like to book a taxi.";
export const ADDRESS =
  "Maligaon, Gosala, Pub Madhabdeb Nagar, Guwahati, Assam. PIN: 781011";
export const CARS = [
  {
    id: 1,
    src: "/swift_dzire.jpg",
    alt: "Swift Dzire",
    title: "Swift Dzire",
    description:
      "Perfect for small groups and city tours. Comfortable seating for up to 4 passengers.",
  },
  {
    id: 2,
    src: "/toyota_innova.jpg",
    alt: "Toyota Innova",
    title: "Toyota Innova",
    description:
      "Ideal for family trips and longer journeys. Spacious seating for up to 7 passengers.",
  },
  {
    id: 3,
    src: "/force_traveller.jpg",
    alt: "Force Traveller",
    title: "Force Traveller",
    description:
      "Best for large groups and comfortable travel. Accommodates up to 12 passengers.",
  },
];

// NUMBERS
export const PHONE_NUMBER = 8473070328;
export const WHATSAPP_NUMBER = 919401059304;

// LINKS
export const INSTAGRAM = "https://www.instagram.com/anutourandtaxi";
export const GOOGLE_MAPS = "https://maps.app.goo.gl/xqDCkgRgWr3Ko16b6";
export const GOOGLE_MAPS_REVIEW =
  "https://www.google.com/maps/place/Anu+Tour+and+Taxi+Guwahati+Assam+Tawang+Shillong+Kaziranga/@26.1439863,91.6908423,17z/data=!4m8!3m7!1s0x375a5ba25e1a274b:0xcfd2a2a9fc282955!8m2!3d26.1439815!4d91.6934226!9m1!1b1!16s%2Fg%2F11tjmg0jtd?entry=ttu";

export const REVIEWS = [
  {
    username: "aneesh ss",
    content:
      "We had a 5 day trip to Meghalaya in May 24. The vehicle was good. Driver was very knowledgeable, friendly and met all our requirements. He advised us correctly regarding each place and guided us based on our age group. Anu Tour and Taxi is highly recommended for any trip from guwahati.",
  },
  {
    username: "Umashankar Pattnam",
    content:
      "Our Driver Joy Deb made our travel more comfortable with his polite, fun loving behaviour. He was never in aggressive drive mode, even in empty roads, ensuring safety. He understood our requirements of good veg food and took us only to that sort of places.  Recommend , travellers to use their services 👍",
  },
  {
    username: "Raj Shekhar",
    content:
      "Excellent service. We enquired a travel plan to Meghalaya from Anu Tour and Taxi and got it in reasonable rates. Mr Joydeb was cordial and also helped us in curating the itinerary. Our driver (Ajit da) was polite and knowledgeable about the area. The trip went very smooth and we had a very good experience.",
  },
  {
    username: "Rohit Patwi",
    content:
      "Mr. Joydeb Das is very nice, humble and professional person. His safe driving skills, on time services and knowledge of North east areas are amazing. He has a good network for arranging trip and food stops. I recommend anyone visiting Assam, Meghalaya and Arunachal Pradesh to avail their services.",
  },
  {
    username: "Nimesh Chidrawar",
    content:
      "I was traveling solo for the first time, my luck I got Anu tours and travels. The owner booked all hotels for me, took me to pure veg hotels, literally did trekking with me on high hills. Just close your eyes and book. You will have joyful memories. Very responsible, humble, caring person he is. Thanks a lot 😇",
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Joydeb Das", value: "8473070328, 9401059304" },
    {
      label: "Address",
      value: `${ADDRESS}`,
    },
    { label: "Email", value: "aowjoydeb@gmail.com" },
  ],
};

export const SOCIALS = {
  title: "Socials",
  sites: [
    {
      icon: "/instagram-colored.svg",
      href: INSTAGRAM,
    },
    {
      icon: "/whatsapp-colored.svg",
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
    },
    {
      icon: "/google-maps-colored.svg",
      href: GOOGLE_MAPS,
    },
  ],
};
