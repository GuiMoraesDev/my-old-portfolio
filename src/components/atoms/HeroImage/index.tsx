"use client";

import { useTheme } from "@/context/theme";
import Image from "next/image";

const LightHeroImage = () => {
  return <Image src="/img/photo-light.png" width={320} height={320} alt="" priority />;
};

const DarkHeroImage = () => {
  return <Image src="/img/photo-dark.png" width={320} height={320} alt="" className="shadow-md shadow-black rounded-[40px]" priority />;
};

export const HeroImage = () => {
  const { theme } = useTheme();

  return theme === "light" ? <LightHeroImage /> : <DarkHeroImage />;
};
