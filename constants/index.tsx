import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

import { ExploreSliderProps, Package } from "@/lib/types";
import { after } from "node:test";

export const navLinks = [
  { title: "Travel for Treatment", href: "/travel-for-treatment" },
  { title: "Home Services", href: "#services" },
  { title: "Forum", href: "/forum" },
  { title: "Blogs", href: "/blogs" },
  { title: "About", href: "/about" },
];

export const packages: Package[] = [
  {
    title: "Standard Package",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: [
      "Includes <b>treatment</b>",
      "Includes <b>accommodation</b>",
      "Includes <b>transportation</b>",
    ],
  },
  {
    title: "Custom Package",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: [
      "Personalized <b>based on the patient's medical requirements</b> and travel preferences",
    ],
  },
  {
    title: "Luxury Package",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: [
      "Adds <strong>5-star</strong> accommodation",
      "Includes <b>exclusive transportation services</b>",
    ],
  },
];

export const whySecData = [
  "High-quality medical care at competitive rates",
  "Industry awards for medical tourism excellence, patient satisfaction rate of 98%",
  "A trusted facilitator known for commitment to personalized care",
];

export const specialistsSliderData = {
  title: {
    before: "Meet Our",
    spotlight: "Specialists",
    after: "",
    size: "h1",
    isLongVector: false,
  },
  paragraph:
    " MISC HealthConnect partners with top-tier healthcare providers in Qatar, including specialized hospitals and accredited clinics to ensure high-quality care.",
  isBigCards: false,
  slidesData: [
    {
      name: "Jim Carry",
      details: "Orthodontist.",
      img: "/images/doc1.png",
    },
    {
      name: "Wade Warren",
      details: "Endodontist.",
      img: "/images/doc2.png",
    },
    {
      name: "Jenny Wilson",
      details: "Periodontist.",
      img: "/images/doc3.png",
    },
    {
      name: "Jacob Jones",
      details: "Pediatric Dentist.",
      img: "/images/doc4.png",
    },
    {
      name: "Jim Carry",
      details: "Orthodontist.",
      img: "/images/doc1.png",
    },
  ],
};

export const hospitalsSliderData = {
  title: {
    before: "Explore",
    spotlight: "Best Hospitals",
    after: "In Qatar",
    isLongVector: true,
  },
  paragraph:
    "Each hospital in our network has its area of expertise. Our patients consistently give us positive feedback on their experience with these hospitals.",
  isBigCards: true,
  slidesData: [
    {
      name: "Hamad Medical Corporation (HMC)",
      details:
        "A major healthcare provider in Qatar, known for its specialized care and advanced medical facilities.",
      img: "/images/hospital1.png",
    },
    {
      name: "Hamad Medical Corporation (HMC)",
      details:
        "A major healthcare provider in Qatar, known for its specialized care and advanced medical facilities.",
      img: "/images/hospital2.png",
    },
    {
      name: "Hamad Medical Corporation (HMC)",
      details:
        "A major healthcare provider in Qatar, known for its specialized care and advanced medical facilities.",
      img: "/images/hospital3.png",
    },
    {
      name: "Hamad Medical Corporation (HMC)",
      details:
        "A major healthcare provider in Qatar, known for its specialized care and advanced medical facilities.",
      img: "/images/hospital4.png",
    },
    {
      name: "Hamad Medical Corporation (HMC)",
      details:
        "A major healthcare provider in Qatar, known for its specialized care and advanced medical facilities.",
      img: "/images/hospital1.png",
    },
    {
      name: "Hamad Medical Corporation (HMC)",
      details:
        "A major healthcare provider in Qatar, known for its specialized care and advanced medical facilities.",
      img: "/images/hospital2.png",
    },
  ],
};

export const featuresData = [
  {
    icon: "/icons/flight-route.svg",
    title: "Seamless Experience",
    body: " Visa assistance, flight bookings, airport transfers and  accommodation arrangements.",
    url: "#",
  },
  {
    icon: "/icons/healthcare.svg",
    title: "Best Medical Care",
    body: "Including specialized hospitals and accredited clinics to ensure high-quality care.",
    url: "#",
  },
  {
    icon: "/icons/calendar.png",
    title: "Scheduling with providers",
    body: "Scheduling with medical providers to minimize waiting, making your medical journey stress-free.",
    url: "#",
  },
];

export const happyClientsData = [
  {
    name: "Jim Carry",
    details: "Orthodontist.",
    img: "/images/person-1.svg",
  },
  {
    name: "Wade Warren",
    details: "Endodontist.",
    img: "/images/person-2.svg",
  },
  {
    name: "Jenny Wilson",
    details: "Periodontist.",
    img: "/images/person-3.svg",
  },
  {
    name: "Jacob Jones",
    details: "Pediatric Dentist.",
    img: "/images/person-1.svg",
  },
  {
    name: "Jim Carry",
    details: "Orthodontist.",
    img: "/images/person-2.svg",
  },
];

export const faqsData = [
  {
    question: "Can I see who reads my email campaigns?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Convallis oras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.psum dolor sit amet consectetur. Convallis oras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.",
  },
  {
    question: "Do you offer non-profit discounts?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Convallis oras placerat dignissim aliquam massa. Aliquet volutpat rhoncpsum dolor sit amet consectetur. Convallis oras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.psum dolor sit amet consectetur. Convallis oras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.us in convallis consectetur.",
  },
  {
    question: "Can I see who reads my email campaigns?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Convallis oras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur.",
  },
  {
    question: "Can I see who reads my email campaigns?",
    answer:
      "Lorem ipsum dolor sit ametpsum dolor sit amet consectetur. Convallis oras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.psum dolor sit amet consectetur. Convallis oras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim. consectetur. Convallis oras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur.",
  },
];

export const footerLinks = [
  { name: "Travel for Treatment", url: "#" },
  { name: "Home Services", url: "#" },
  { name: "Forum", url: "#" },
  { name: "Blogs", url: "#" },
  { name: "About", url: "/about" },
];

const SOCAIL_ICONS_STYLE = "text-white h-4 w-4";
export const socialIcons = [
  {
    name: "Facebook",
    icon: <Facebook className={SOCAIL_ICONS_STYLE} />,
    url: "#",
  },
  {
    name: "Instagram",
    icon: <Instagram className={SOCAIL_ICONS_STYLE} />,
    url: "#",
  },
  {
    name: "Youtube",
    icon: <Youtube className={SOCAIL_ICONS_STYLE} />,
    url: "#",
  },
  {
    name: "Linkedin",
    icon: <Linkedin className={SOCAIL_ICONS_STYLE} />,
    url: "#",
  },
  {
    name: "Twitter",
    icon: <Twitter className={SOCAIL_ICONS_STYLE} />,
    url: "#",
  },
];

export const miscTeamData = [
  {
    name: "DR. Brent",
    specialty: "Specialty in General & Cosmetic Service",
    image: "/images/drBent.png",
    description:
      "Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.  Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.",
    bookingUrl: "#",
  },
  {
    name: "DR. Ashish J. Vashi",
    specialty: "Specialty in Implant dentistry",
    image: "/images/drAshish.png",
    description:
      "Dr. Ashish J. Vashi has been practicing general, cosmetic and implant dentistry in California for over 18 years. He believes in giving the highest quality dentistry in a comfortable, caring environment. He strives to get to know his patients, not just their teeth.including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.",
    bookingUrl: "#",
  },
  {
    name: "Dr. James Connors",
    specialty: "Specialty in Oral Surgeon",
    image: "/images/drJames.png",
    description:
      "When it comes to oral surgeons, few can compare to the modern-day legend that is Dr. James Connors. As our oral and maxillofacial surgery specialist, Dr. Connors will brighten your day with his seasoned expertise, welcoming conversations, and – of course – his signature rotation of fun bowties. Dr. Connors and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.",
    bookingUrl: "#",
  },
];

export const coreServicesData = [
  {
    icon: "/icons/flight-route.svg",
    title: "Seamless Experience",
    body: " Visa assistance, flight bookings, airport transfers and  accommodation arrangements.",
    url: "#",
  },
  {
    icon: "/icons/healthcare.svg",
    title: "Best Medical Care",
    body: "Including specialized hospitals and accredited clinics to ensure high-quality care.",
    url: "#",
  },
  {
    icon: "/icons/calendar.png",
    title: "Scheduling with providers",
    body: "Scheduling with medical providers to minimize waiting, making your medical journey stress-free.",
    url: "#",
  },
  {
    icon: "/icons/flight-route.svg",
    title: "Seamless Experience",
    body: " Visa assistance, flight bookings, airport transfers and  accommodation arrangements.",
    url: "#",
  },
  {
    icon: "/icons/healthcare.svg",
    title: "Best Medical Care",
    body: "Including specialized hospitals and accredited clinics to ensure high-quality care.",
    url: "#",
  },
  {
    icon: "/icons/calendar.png",
    title: "Scheduling with providers",
    body: "Scheduling with medical providers to minimize waiting, making your medical journey stress-free.",
    url: "#",
  },
];

export const partnersData = [
  {
    name: "Ultra Healthcare",
    logo: "/icons/ultraLogo.svg",
  },
  {
    name: "Power Module",
    logo: "/icons/xr2Logo.svg",
  },
  {
    name: "Medical Certificate",
    logo: "/icons/certLogo.svg",
  },
  {
    name: "Global Standards",
    logo: "/icons/globalStandards.svg",
  },
  {
    name: "Healthcare Plus",
    logo: "/icons/healthcarePlusLogo.svg",
  },
];

export const brandValuesData = [
  {
    title: "Compassion",
    description:
      "We prioritize the well-being and comfort of our patients, treating each individual with empathy and understanding.",
  },
  {
    title: "Integrity",
    description:
      "Honesty and transparency are fundamental to our relationships with patients, partners, and staff. We adhere to the highest ethical standards in all our dealings.",
  },
  {
    title: "Excellence",
    description:
      "We strive for perfection in every service we provide, continually seeking to exceed expectations through innovation and attention to detail.",
  },
  {
    title: "Collaboration",
    description:
      "Recognizing that healthcare is a collective effort, we foster strong partnerships with medical professionals, facilities, and other stakeholders to deliver the best outcomes.",
  },
  {
    title: "Cultural Sensitivity",
    description:
      "We respect the diverse backgrounds of our patients, ensuring that services are tailored to meet cultural, religious, and personal preferences.",
  },
];
