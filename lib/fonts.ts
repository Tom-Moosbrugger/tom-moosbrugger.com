import { JetBrains_Mono, VT323, IBM_Plex_Mono } from "next/font/google";

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const terminal = VT323({
  weight: ["400"],
  subsets: ["latin"],
});

export const ibm = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
