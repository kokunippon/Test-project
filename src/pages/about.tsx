"use client";

import Button from "@/components/common/Button/button";
import Navbar from "@/components/common/navbar/navbar";
import React from "react";
import Image from "next/image";
import { AboutHero } from "@/assets/aboutAssets";
import Aboutcomp from "@/components/About_components/aboutcomponent"
import Footer from "@/components/common/footer/footer";
import Link from "next/link";

const landing = () => {
  return (
    <div className="bg-[url('/bg-image.png')] bg-[#212121] text-white h-full overflow-hidden ">
      <Navbar />
      <div className="flex md:space-x-16 md:flex-row flex-col lg:mx-28 lg:my-20 mx-7 my-5">
        <div>
        <div className="lg:text-[2.5vw] md:text-[38px] text-[5vw] ">
            Why
            <span className="text-[#FFFF6D]"> Us </span>
            ?
          </div>
          <div className="lg:text-[1.6vw] md:text-[25px] text-[5vw] mt-6 lg:mt-14 ">
            Introducing the
            <span className="text-[#FFFF6D]"> future of fashion</span> with our
            web3 clothing store e-commerce
          </div>
          <div className="md:flex md:flex-col">
            <div className="mt-6 lg:mt-10 lg:text-[1.1vw] md:text-[1.2vw] ">
              Welcome to NFT Market, where the future of fashion meets
              sustainability. We are a pioneering web3 clothing store dedicated
              to revolutionizing the fashion industry by combining cutting-edge
              technology with a commitment to environmental stewardship.
            </div>
            <div className=" flex flex-row  space-x-9 my-12">
              <Link href="/store">
                <Button filled className="text-lg">
                  {" "}
                  Explore Shop
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col  ">
          <div className="lg:w-[50vw] md:w-[45vw] flex flex-col lg:flex-row w-auto items-center justify-center">
            <Image src={AboutHero} alt="Picture of the author" />
          </div>
          <div className="mt-6 text-[6vw] lg:text-[2vw] md:text-[1vw] ml-9 text-[#FFFF6D]">
          Sustainably Stylish, Transparently Yours
          </div>
        </div>
      </div>
      <div className="bg-[#FFFF6D] h-1 w-full "></div>
      <Aboutcomp />
      
      <Footer />
    </div>
  );
};

export default landing;
