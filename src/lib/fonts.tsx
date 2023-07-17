import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Hind_Siliguri as BanglaFont,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
//generate banglafont with export const
export const Banglafont = BanglaFont({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  style: "normal",
  variable: "--font-bangla",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
