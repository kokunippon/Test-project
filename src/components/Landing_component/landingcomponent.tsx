"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button/button";
import {
  ComponentImage,
  Feat1,
  Feat2,
  Feat3,
  Heroimage2,
} from "../../assets/landingAssets/index";
import Link from "next/link";

const landingcomponent = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col m-[5vw] lg:space-x-[7vw] ">
        <div className="lg:text-[1.3vw] md:text-[1.4vw] text-[12px]  font-medium">
          Experience the future of fashion today! Shop now and join the
          revolution of sustainable fashion. Visit our website now to explore
          our collection and shop sustainably. Dont miss out on the opportunity
          to be a part of the sustainable fashion movement Join our mission to
          create a better future for fashion, where sustainability meets style.
        </div>
        <div className="lg:w-[250vw] mt-4 ">
          <Image src={ComponentImage} alt="Picture of component" />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#F8F872] md:mb-16 mb-8 "></div>

      <div className="flex md:flex-row flex-col md:space-x-9 m-5">
        <div className="flex justify-center items-center my-3">
          <Image
            className="flex lg:w-96 md:w-40 w-36"
            src={Feat1}
            alt="Picture of feature"
          />
          <div className=" lg:text-2xl md:text-xl text-base pl-4">
            Mint your own NFTs for the brand products you buy
          </div>
        </div>
        <div className="flex justify-center items-center my-3">
          <Image
            className="flex lg:w-96 md:w-40 w-36"
            src={Feat2}
            alt="Picture of feature"
          />
          <div className=" lg:text-2xl md:text-xl text-base pl-4">
            Connnect your different social medias with your avatars and assets
          </div>
        </div>
        <div className="flex justify-center items-center my-3">
          <Image
            className="flex lg:w-96 md:w-40 w-36"
            src={Feat3}
            alt="Picture of feature"
          />
          <div className=" lg:text-2xl md:text-xl text-base pl-4">
            Mint your own NFTs for the brand products you buy
          </div>
        </div>
      </div>

      <div className="md:flex flex-row md:space-x-20 m-[7vw]">
        <div className="mt-20">
          <div className="flex  space-x-2">
            <div className="flex items-center justify-center bg-[#FFFF6D] w-1 lg:h-[5vh] md:h-7 "></div>
            <div className="lg:text-[2.2vw] md:text-[29px] text-[5vw]">
              YOUR WAY TOWARDS METAVERSE
            </div>
          </div>
          <div className="mt-9 lg:text-[1.1vw] md:text-[1.2vw] ">
            Experience the intersection of cutting-edge technology, style and
            sustainability with our web3 clothing store e-commerce. Discover
            eco-friendly fashion that elevates your wardrobe while reducing your
            carbon footprint. Our blockchain integration guarantees secure
            payments and unparalleled customer service. Embrace sustainable
            fashion today with stylish and ethically sourced items designed by
            experts in both fashion and blockchain technology. Enjoy a seamless
            shopping experience with our user-friendly interface and fast
            shipping options to make an impact on future generations through
            conscious purchasing habits. Join the revolution now!
          </div>
          <div className="mt-9">
            <Link href="/store">
              <Button filled className="text-base">
                {" "}
                Web3 Shop
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            className="lg:w-[5024px] md:w-[6024px] "
            src={Heroimage2}
            alt="Picture of heroimage2"
          />
        </div>
      </div>
    </>
  );
};

export default landingcomponent;
