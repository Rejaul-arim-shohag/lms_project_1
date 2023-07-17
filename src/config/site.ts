import type { FooterItem, MainNavItem } from "@/types/types";

export type SiteConfig = typeof siteConfig;

const links = {
  twitter: "https://twitter.com/",
  github: "https://github.com/",
  githubAccount: "https://github.com/",
  discord: "https://discord.com/",
  calDotCom: "https://cal.com/",
};

export const siteConfig = {
  name: "Projectzero",
  description:
    "Adipisicing sit ipsum amet nulla dolor aute voluptate ipsum do ipsum..",
  url: "http://localhost:3000",

  mainNav: [
    {
      title: "Course",
      href: "/course12",
      description: "Read our latest blog posts.",
      items: [
        {
          title: "Products",
          href: "/course1",
          description: "All the products we have to offer.",
          items: [],
        },
        {
          title: "Build a Board",
          href: "/course13",
          description: "Build your own custom skateboard.",
          items: [],
        },
        {
          title: "Blog",
          href: "/course12",
          description: "Read our latest blog posts.",
          items: [],
        },
      ],
    },

    {
      title: "About us",
      href: "/about",
      description: "All the products we have to offer.",
      items: [],
    },
    {
      title: "Student Review",
      href: "/reviews",
      description: "All the products we have to offer.",
      items: [],
    },
    {
      title: "Instructor",
      href: "/instructors",
      description: "All the products we have to offer.",
      items: [],
    },
  ] satisfies MainNavItem[],
  links,
  footerNav: [
    {
      title: "কুইক লিংক",
      items: [
        {
          title: "আপকামিং লাইভ ব্যাচ",
          href: "/",
          external: false,
        },
        {
          title: "লাইভ ক্লাস",
          href: "/",
          external: false,
        },
        {
          title: "আপকামিং লাইভ ব্যাচ",
          href: "/",
          external: false,
        },
      ],
    },
    {
      title: "কোম্পানি",
      items: [
        {
          title: "আমাদের সম্পর্কে",
          href: "/about",
          external: false,
        },
        {
          title: "রিফান্ড পলিসি",
          href: "/contact",
          external: false,
        },
        {
          title: "প্রাইভেসী পলিসি",
          href: "/terms",
          external: false,
        },
        {
          title: "টার্মস এবং শর্তাবলী",
          href: "/privacy",
          external: false,
        },
      ],
    },
    {
      title: "টার্মস এবং শর্তাবলী",
      items: [
        {
          title: "Phone: 01798 - 84753",
          href: links.twitter,
          external: true,
        },
        {
          title: "Email: ecoacademy@gmail.com",
          href: links.githubAccount,
          external: true,
        },
        {
          title: "Location: Tangail, Dhaka, Bangladesh",
          href: links.discord,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};
