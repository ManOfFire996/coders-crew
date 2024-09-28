
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[700px] w-full bg-orange-500 max-lg:h-[900px] max-md:h-[750px]">
      <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10">
        <div className="flex flex-col gap-y-5 max-lg:order-last col-span-2">
          <h1 className="text-6xl text-white font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
            THE PRODUCT OF THE FUTURE
          </h1>
          <p className="text-white max-sm:text-sm">
          A smartwatch is a wearable device that combines traditional timekeeping with advanced features like fitness tracking, notifications, and app integration. It offers convenience by syncing with smartphones for calls, messages, and other essential functions on the go.
          </p>
          <div className="flex gap-x-1 max-lg:flex-col max-lg:gap-y-1">
            <button className="bg-white text-orange-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
              BUY NOW
            </button>
            <button className="bg-white text-orange-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
              LEARN MORE
            </button>
          </div>
        </div>
        <Image
          src="/watch for banner.png"
          width={400}
          height={400}
          alt="smart watch"
          className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
