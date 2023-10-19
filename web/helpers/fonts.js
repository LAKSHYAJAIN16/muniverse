import { Poppins } from "next/font/google";


const font_100_f = Poppins({ subsets: ["latin"], weight: "100" });
const font_200_f = Poppins({ subsets: ["latin"], weight: "200" });
const font_300_f = Poppins({ subsets: ["latin"], weight: "300" });
const font_400_f = Poppins({ subsets: ["latin"], weight: "400" });
const font_500_f = Poppins({ subsets: ["latin"], weight: "500" });
const font_600_f = Poppins({ subsets: ["latin"], weight: "600" });
const font_700_f = Poppins({ subsets: ["latin"], weight: "700" });
const font_800_f = Poppins({ subsets: ["latin"], weight: "800" });

export const font_100 = font_100_f.className;
export const font_200 = font_200_f.className;
export const font_300 = font_300_f.className;
export const font_400 = font_400_f.className;
export const font_500 = font_500_f.className;
export const font_600 = font_600_f.className;
export const font_700 = font_700_f.className;
export const font_800 = font_800_f.className;