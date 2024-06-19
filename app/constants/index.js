import { userAgent } from "next/server";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "reviews", label: "Reviews" },
  { href: "/", key: "services", label: "Plan a Trip With Us" },
  { href: "/", key: "reach_us", label: "Reach Us" },
];

export const REVIEW_COUNT = 54;
export const PHONE_NUMBER = +918473070328;
export const WHATSAPP_NUMBER = 919401059304;
export const WHATSAPP_MESSAGE = "I would like to book a taxi.";
export const INSTAGRAM = "https://www.instagram.com/anutourandtaxi";
export const HERO_TITLE = "Save big with our car rental";
export const HERO_SUBTITLE =
  "Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.";
export const ADDRESS =
  "Maligaon, Gosala, Pub Madhabdeb Nagar, Guwahati, Assam. PIN: 781011";
export const GOOGLE_MAPS_REVIEW =
  "https://www.google.com/maps/place/Anu+Tour+and+Taxi+Guwahati+Assam+Tawang+Shillong+Kaziranga/@26.1439863,91.6908423,17z/data=!4m8!3m7!1s0x375a5ba25e1a274b:0xcfd2a2a9fc282955!8m2!3d26.1439815!4d91.6934226!9m1!1b1!16s%2Fg%2F11tjmg0jtd?entry=ttu";

export const REVIEWS = [
  {
    username: "aneesh ss",
    content:
      "We had a 5 day trip to Meghalaya in May 24. We engaged Anu Tours and Travels for the vehicle requirement for the trip. I should submit that the agency has provided an excellent support for our trip. The vehicle was good. Driver was very knowledgeable, friendly and met all our requirements. In fact he advised us correctly regarding each place and guided us based on our age group, visit requirement and reaching various points in time there by ensuring our itinerary is completely covered. Anu Tours and Travels is highly recommended for any trip from guwahati.",
  },
  {
    username: "Umashankar Pattnam",
    content:
      "During our recent visit to Meghalaya, we engaged services of Anu Tour and Taxi from Gauhati. The entire trip was smooth and satisfying . Our Driver Joy Deb made our travel more comfortable with his polite, fun loving behaviour. He was never in aggressive drive mode, even in empty roads, thereby ensuring the safety. He understood our requirements of good veg food and took us only to that sort of places, which never fails to satisfy anyone. Recommend , travellers to use their services to have a good and comfortable travel experience in North East.",
  },
  {
    username: "Raj Shekhar",
    content:
      "Excellent service. We enquired a travel plan to Meghalaya from Anu Tour and Taxi and got it in reasonable rates. Mr Joydeb was very cordial and also helped us in curating the itinerary. Our driver (Ajit da) was also polite and knowledgeable about the area. The trip went very smooth and we had a very good experience.",
  },
  {
    username: "Rohit Patwi",
    content:
      "Anu tour and taxi service in Guwahati is excellent. The owner Mr. Joydeb Das is very nice, humble and professional person. His safe driving skills, on time services and knowledge of North east areas are amazing. He has good network for arranging trip and food stops. I recommend anyone visiting Assam, Meghalaya and Arunachal Pradesh to avail their services.",
  },
  {
    username: "Nimesh Chidrawar",
    content:
      "I was traveling solo for first time, my luck i got Anu tours and travels. The owner booked all hotels for me, took me to pure veg hotels, literally did trekking with me on high hills. Just close your eyes and book. You will have joyful memories. Very responsible, humble, caring person he is ….🙏🏻 Thanks a lot 😇",
  },
];

export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
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
  title: "Social",
  sites: [
    {
      link: "/instagram.svg",
      href: INSTAGRAM,
    },
    {
      link: "/whatsapp.svg",
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
    },
  ],
};

// ## SSS SAFETY SECURITY SUSTAINABILITY
