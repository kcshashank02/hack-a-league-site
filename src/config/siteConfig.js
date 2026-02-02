// Image arrays — must match public/images exactly

const HAL1_IMAGES = [
  "/images/hal1/1.webp",
  "/images/hal1/2.webp",
  "/images/hal1/3.webp",
  "/images/hal1/4.webp",
];

const HAL2_IMAGES = [
  "/images/hal2/5.webp",
  "/images/hal2/6.webp",
  "/images/hal2/7.webp",
  "/images/hal2/8.webp",
];

const HAL3_IMAGES = [
  "/images/hal3/9.webp",
  "/images/hal3/10.webp",
  "/images/hal3/11.webp",
  "/images/hal3/12.webp",
];

export const siteConfig = {
  eventName: "Hack A League 4.0",
  eventDates: {
    month: "February",
    start: 21,
    end: 22,
    year: 2026
  },
  eventLocation: "Global Academy of Technology",
  brandName: "Hack-a-League",

  // change later to your Unstop link
  registerLink: "https://unstop.com/hackathons/hack-a-league-40-global-academy-of-technology-1628697",

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