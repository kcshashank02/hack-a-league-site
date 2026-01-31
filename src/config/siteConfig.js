// Image arrays — must match public/images exactly

const HAL1_IMAGES = [
  "/images/hal1/1.jpg",
  "/images/hal1/2.jpg",
  "/images/hal1/3.jpg",
  "/images/hal1/4.jpg",
];

const HAL2_IMAGES = [
  "/images/hal2/5.jpg",
  "/images/hal2/6.jpg",
  "/images/hal2/7.jpg",
  "/images/hal2/8.jpg",
];

const HAL3_IMAGES = [
  "/images/hal3/9.jpg",
  "/images/hal3/10.jpg",
  "/images/hal3/11.jpg",
  "/images/hal3/12.jpg",
];

export const siteConfig = {
  eventName: "Hack A League 4.0",
  eventDates: "February 21st–22nd 2026",
  eventLocation: "Global Academy of Technology",
  brandName: "Hack A League",

  // change later to your Unstop link
  registerLink: "#",

  stats: [
    { value: "300+", label: "Participants" },
    { value: "24hr", label: "Non-stop" },
    { value: "50+", label: "Projects" },
    { value: "INR50k", label: "Prizes" },
  ],

  halImages: {
    hal1: HAL1_IMAGES,
    hal2: HAL2_IMAGES,
    hal3: HAL3_IMAGES,
  },
};