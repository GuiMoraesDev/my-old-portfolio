"use client";

import Image from "next/image";

import { useTheme } from "@/context/theme";

const LightHeroImage = () => {
  return (
    <Image
      src="/img/photo-light.png"
      width={320}
      height={320}
      alt=""
      priority
    />
  );
};

const DarkHeroImage = () => {
  return (
    <Image
      src="/img/photo-dark.png"
      width={320}
      height={320}
      alt=""
      className="rounded-[40px] shadow-md shadow-black"
      priority
    />
  );
};

export const HeroImage = () => {
  const { theme } = useTheme();

  return theme === "light" ? <LightHeroImage /> : <DarkHeroImage />;
};
