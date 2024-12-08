"use client";

import Button from "@/components/common/Button/button";
import Navbar from "@/components/common/navbar/navbar";
import React from "react";
import Image from "next/image";
import { HeroImage } from "../assets/landingAssets/index";
import HomeComp from "../components/Landing_component/landingcomponent";
import Footer from "@/components/common/footer/footer";
import Link from "next/link";

const landing = () => {
  return (
    <div className="bg-[url('/bg-image.png')] bg-[#212121] text-white h-full overflow-hidden ">
      <Navbar />
      <div className="flex md:space-x-16 md:flex-row flex-col lg:mx-28 lg:my-20 mx-7 my-5">
        <div>
          <div className="lg:text-[2.2vw] md:text-[29px] text-[5vw] ">
            Introducing the
            <span className="text-[#FFFF6D]"> future of fashion</span> with our
            web3 clothing store e-commerce
          </div>
          <div className="md:flex md:flex-col">
            <div className="mt-6 lg:mt-14 lg:text-[1.1vw] md:text-[1.2vw] ">
              Join the revolution of sustainable fashion today.Check out our
              latest arrivals and stay up-to-date with the newest trends in
              sustainable fashion. Sign up for our newsletter to receive
              exclusive updates, promotions and sustainable fashion tips.
              Experience the future of fashion today! Shop now and join the
              revolution of sustainable fashion.
            </div>
            <div className=" flex flex-row  space-x-9 my-12">
              <Link href="/store">
                <Button filled className="text-lg">
                  {" "}
                  Explore Shop
                </Button>
              </Link>

              <Button className="text-white text-lg border-2 border-[#FFFF6D]">
                Know more
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col mt-5 ">
          <div className="lg:w-[50vw] md:w-[45vw] flex flex-col lg:flex-row w-auto">
            <Image src={HeroImage} alt="Picture of the author" />
          </div>
          <div className="mt-6 text-[7vw] lg:text-[3vw] md:text-[2vw] ml-9 text-[#FFFF6D]">
            web3 * Fashion * AR
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="bg-[#FFFF6D] h-1 w-full "></div>
        <div className="text-center text-[7vw] font-bold text-[#FFFF6D] md:justify-evenly">
          METAVERSE SHOPPING
        </div>
        <div className="bg-[#FFFF6D] h-1 w-full"></div>
      </div>
      <HomeComp />
      <Footer />
    </div>
  );
};

export default landing;
