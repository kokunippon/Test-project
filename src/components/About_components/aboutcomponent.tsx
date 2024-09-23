"use client";

import React from "react";
import Image from "next/image";
import { AboutHero2, AboutHero3 } from "@/assets/aboutAssets";
import Globe from "@/components/Globe_component/globe";
import Button from "../common/Button/button";
export default function aboutcomponent() {
  return (
    <div>
      <div className="flex justify-center items-center mt-16   ">
        <div className=" text-white font-medium sm:text-[55px] text-4xl">
          VISION{" "}
          <span className="text-[#FFFF6D] sm:text-[55px] font-medium mr-3">
            &
          </span>{" "}
          MISION
          <div className="w-auto h-1 bg-gradient-to-r from-[#1F1F1F] via-[#FFFF6D] to-[#1F1F1F] placeholder-opacity-950 mt-3"></div>
        </div>
      </div>

      <div>
        <div className="md:flex flex-row md:space-x-20 mx-[6vw] sm:-mt-24 items-center justify-center">
          <div className="flex  ">
            <Image
              className="lg:w-[3024px] h-auto md:w-[2024px] "
              src={AboutHero2}
              alt="Picture of heroimage2"
            />
          </div>
          <div>
            <div className="flex  space-x-3">
              <div className="flex items-center justify-center bg-[#FFFF6D] w-1 lg:h-[5vh] md:h-7 "></div>
              <div className="lg:text-[2.2vw] md:text-[29px] text-[5vw] font-medium">
                OUR MISSION
              </div>
            </div>
            <div className="mt-9 lg:text-[1.1vw] md:text-[1.2vw] ">
              At Meta-shopping, our mission is to provide stylish, high-quality
              clothing while minimizing our ecological footprint. We believe
              that fashion should not only look good but also do good. Our
              curated collections feature sustainable materials, ethical
              production processes, and innovative designs that stand the test
              of time.
            </div>
          </div>
        </div>

        <div className="md:flex flex-row md:space-x-20 mx-[6vw] md:-mt-52 mt-10 sm:mt-0 items-center justify-center ">
          <div>
            <div className="flex space-x-3">
              <div className="flex items-center justify-center bg-[#FFFF6D] w-1 lg:h-[5vh] md:h-7 "></div>
              <div className="lg:text-[2.2vw] md:text-[29px] text-[5vw] font-medium">
                OUR VISION
              </div>
            </div>
            <div className="mt-9 lg:text-[1.1vw] md:text-[1.2vw] ">
              We envision a world where fashion is synonymous with
              sustainability. Our goal is to inspire and empower individuals to
              make conscious choices that benefit both their wardrobes and the
              planet. Join us on this journey towards a more sustainable future,
              one stylish step at a time.
            </div>
          </div>
          <div>
            <Image
              className="lg:w-[3024px] md:w-[2024px] "
              src={AboutHero3}
              alt="Picture of heroimage2"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#FFFF6D] h-1 w-full -mt-20 "></div>
      <div className="flex justify-center items-center sm:my-16 my-10   ">
        <div className=" text-white font-medium sm:text-[55px] text-2xl">
          GLOBAL NETWORK{" "}
          <span className="text-[#FFFF6D] sm:text-[55px] font-medium mr-3">
            &
          </span>{" "}
          CONNECTION
          <div className="w-auto h-1 bg-gradient-to-r from-[#1F1F1F] via-[#FFFF6D] to-[#1F1F1F] placeholder-opacity-950 mt-3"></div>
        </div>
      </div>
      
      <div>
        <Globe />
      </div>
      <div className="mx-[6vw] text-center lg:text-[1vw] md:text-[1.2vw] mb-10">
        Meta-shopping boasts a global network of partners and collaborators who are
        dedicated to promoting sustainable fashion. From sourcing eco-friendly
        materials from around the world to working with international designers
        and artisans, our connections enable us to bring you unique and
        ethically-made products. Our global presence ensures that we are at the
        forefront of sustainable fashion trends and innovations, making Meta-shopping a
        leader in the industry.
      </div>
      <div className="flex items-center justify-center mb-10">
        <Button filled>Let&apos;s Connect</Button>
      </div>
    </div>
  );
}
