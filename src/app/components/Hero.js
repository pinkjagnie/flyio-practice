"use client";

import { useState } from "react";
import Image from "next/image";

import lamaImg from "@/assets/lama.png";

const Hero = () => {
  const [showImage, setShowImage] = useState(false);

  const imageHandler = () => {
    setShowImage((prevState) => !prevState);
  };

  return (
    <section className="relative h-screen">
      <div className="flex items-center justify-center">
        <button
          className="bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
          onClick={imageHandler}
        >
          Click me!
        </button>
      </div>
      {showImage && (
        <Image
          src={lamaImg}
          alt="lama"
          width={420}
          height={594}
          className="absolute bottom-0 right-0"
        />
      )}
    </section>
  );
};

export default Hero;
