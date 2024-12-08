import React, { useState, useEffect } from "react";
import Navbar from "@/components/common/navbar/navbar";
import Footer from "@/components/common/footer/footer";
import Button from "@/components/common/Button/button";
import Image from "next/image";
import Link from "next/link";
import { Hero, TickLogo, Loader } from "@/assets/confirmationAssets";

export default function Confirmation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="bg-[url('/bg-image.png')] bg-[#212121] text-white h-full overflow-hidden">
      <Navbar />
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <div >
            <Image
              src={Loader}
              alt="Loading gif"
              width={100}
              height={100}
            />
          </div>
          <div className="text-center my-5">
            <h1 className="text-xl">Please Wait</h1>
            <p className="text-3xl font-medium mt-4">Your payment is processing...</p></div>
        </div>
      ) : (
        <div className="flex md:flex-row flex-col items-center justify-center mx-10 sm:my-20 my-10">
          <div>
            <Image src={Hero} alt="hero image" width={700} />
          </div>
          <div>
            <div className="flex sm:flex-row flex-col items-center justify-center mt-10">
              <Image src={TickLogo} alt="check gif" className="w-24 sm:w-40" />
              <div className="text-white text-center font-medium md:text-6xl text-4xl">
                <span className="text-[#FFFF6D] md:text-6xl text-4xl font-medium mr-3">
                  Thank you
                </span>
                for shopping!
              </div>
            </div>
            <div className="w-auto h-1 bg-gradient-to-r from-[#1F1F1F] via-[#FFFF6D] to-[#1F1F1F] placeholder-opacity-950 mt-3"></div>
            <div className="text-center text-white font-medium text-3xl mt-10">
              Your order number is{" "}
              <span className="text-[#FFFF6D] text-3xl font-medium mr-3">
                7DVJGTZLSK.
              </span>
            </div>
            <div>
              <ul className="list-disc text-white font-medium text-lg mt-10 mx-6">
                <li className="mb-2">
                  We will send confirmation of the purchase and information about
                  its progress by e-mail.
                </li>
                <li className="mb-2">
                  The order will be added to your Wallet after your payment is
                  confirmed.
                </li>
                <li className="mb-2">
                  In case of problems with the payment, you will receive a new
                  link to renew the payment to the e-mail address provided.
                </li>
                <li className="mb-2">
                  Please feel free to contact us if you have any questions.
                </li>
              </ul>
            </div>
            <div className="my-10 flex items-center justify-center">
              <Link href="/store" className="ml-7">
                <Button filled className="text-base">
                  Lets Shop
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
