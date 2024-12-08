import React from "react";
import { useWishlist } from "../../services/whishlistcontext";
import Navbar from "@/components/common/navbar/navbar";
import Footer from "@/components/common/footer/footer";
import { useRouter } from "next/router";
import Image from "next/image";
import { BagIcon } from "@/assets/productAssets";
import Button from "@/components/common/Button/button";
import ArModelViewerDynamic from "@/components/common/webxr/ArModelViewerDynamic";
import {
  rock_jacket,
  nike_air_zoom_pegasus_36,
  old_camera_bag_,
  versace_bag,
  asics_shoe,
  chronograph_watch_mudmaster,
  headphones,
  leather_jacket
} from "@/assets/3dassets"; // Import the 3D model
import { Jack, Bag, BagNikon, Shoe } from "@/assets/shopassets";
import EmpthyHero from "@/assets/checkoutAssets/emptyHero2.png";

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const router = useRouter();

  const modelMap: { [key: string]: any } = {
    rock_jacket: rock_jacket,
    nike_air_zoom_pegasus_36: nike_air_zoom_pegasus_36,
    old_camera_bag_: old_camera_bag_,
    versace_bag: versace_bag,
    asics_shoe: asics_shoe,
    chronograph_watch_mudmaster: chronograph_watch_mudmaster,
    headphones: headphones,
    leather_jacket: leather_jacket
  };
  const imageMap: { [key: string]: any } = {
    "jacket.png": Jack,
    "nickonbag.png": BagNikon,
    "bag.png": Bag,
    "shoe.png": Shoe,
    // Add other images here if needed
  };
  const checkout = (productData: any) => {
    router.push({
      pathname: "/checkout",
      query: { product: JSON.stringify(productData) },
    });
  };

  const checkoutAll = () => {
    router.push({
      pathname: "/checkout",
      query: { wishlist: JSON.stringify(wishlist) },
    });
  };

  return (
    <div className="bg-[url('/bg-image.png')] bg-[#212121] text-white h-full overflow-hidden">
      <Navbar />

      <div className="flex justify-center items-center ">
        <div className="text-white font-medium sm:text-4xl text-3xl  mt-10">
          Your{" "}
          <span className="text-[#FFFF6D] sm:text-4xl text-3xl font-medium mr-3">
            WhishList
          </span>
          Items
          <div className="w-auto h-1 bg-gradient-to-r from-[#1F1F1F] via-[#FFFF6D] to-[#1F1F1F] placeholder-opacity-950 mt-3"></div>
        </div>
      </div>

      {wishlist.length > 0 ? (
        <>
          {wishlist.map((productData) => (
            <div
              key={productData.id}
              className="flex lg:flex-row flex-col items-center justify-center my-24  gap-20 "
            >
              <div className="items-center flex justify-center ">
                {/* AR Model Viewer */}
                <ArModelViewerDynamic
                  name={productData.name}
                  company={productData.company}
                  hotspots={productData.hotspots.map((hotspot: any) => ({
                    ...hotspot,
                    id: hotspot.id.toString(),
                  }))}
                  price={productData.price}
                  poster={imageMap[productData.poster]}
                  model={modelMap[productData.model]}
                />
              </div>

              <div className="flex flex-col items-start gap-2 ml-10 sm:ml-0 ">
                <h2 className="sm:text-5xl text-4xl font-semibold">
                  {productData.name}
                </h2>
                <div className="flex items-center space-x-2 sm:text-3xl text-2xl mt-5">
                  <div>Details</div>
                  <div className="border border-white h-0 w-[5vw]"></div>
                </div>
                <p className="text-gray-500 text-md sm:w-[650px] w-96">
                 {productData.description}
                </p>
                <div className="flex items-center gap-2 mt-5">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-3xl font-bold text-[#FFFF6D]">
                      {productData.price}
                    </span>
                    <span className="text-white font-bold text-2xl line-through mr-2">
                      Rs2500
                    </span>
                    <span className="text-[#92ff58] font-bold text-2xl">
                      50% off
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    className="bg-[#FFFF6D] flex items-center space-x-3 text-black px-8 py-2 rounded-xl gap-2"
                    onClick={() => checkout(productData)}
                  >
                    <Image src={BagIcon} alt="Checkout icon" /> Checkout Now
                  </Button>
                  <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
                    onClick={() => removeFromWishlist(productData)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center items-center my-10">
            <Button
              className="bg-[#FFFF6D] text-black px-8 py-2 rounded-xl"
              onClick={checkoutAll}
            >
              Checkout All
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="my-10">
            <Image src={EmpthyHero} alt="Empty Hero image" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Oops, your wishlist is empty!
          </h2>
          <Button
            className="bg-[#FFFF6D] text-black px-8 py-2 rounded-xl my-16"
            onClick={() => router.push("/store")}
          >
            Continue Shopping
          </Button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default WishlistPage;
