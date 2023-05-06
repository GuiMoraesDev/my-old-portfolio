import Image from "next/image";

export const HeroImage = () => {
  return (
    <section>
      <Image
        src="/img/photo-dark.png"
        width={320}
        height={320}
        alt=""
        className="invisible h-0 w-0 scale-0 rounded-[40px] shadow-md shadow-black transition-all dark:visible dark:h-auto dark:w-auto dark:scale-100"
        priority
      />

      <Image
        src="/img/photo-light.png"
        width={320}
        height={320}
        alt=""
        className="visible h-auto transition-all dark:invisible dark:h-0 dark:w-0 dark:scale-0"
        priority
      />
    </section>
  );
};
