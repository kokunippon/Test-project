"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { ScrollModel } from "@/assets/shopassets";
import Image from "next/image";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 778);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div
      className="h-[55rem] md:h-[115vh] flex items-center justify-center relative p-2 md:p-5 mt-11 md:mt-1"
      ref={containerRef}
    >
      <div
        className=" w-full relative"
        style={{
          perspective: "600px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl md:text-6xl text-3xl font-semibold mx-auto text-center -mt-24 mb-24"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-7xl -mt-16 mx-auto h-[30rem] md:h-[42rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl mb-20"
    >
      <div className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
        {children}
        <div className="flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="lg:text-[50px] md:text-[32px] text-[5vw] mt-6 lg:mt-5 font-semibold "> Experience the Next-Gen </div>
            <div className="lg:text-[40pxvw] md:text-[32px] text-[5vw] mt-6 lg:mt-5 font-semibold">
              <span className="text-[#FFFF6D]"> Augmented Reality</span>
               Shopping With <span className="text-[#FFFF6D]"> NFT</span>
            </div>
            <div className="w-auto h-1 bg-gradient-to-r from-[#1F1F1F] via-[#FFFF6D] to-[#1F1F1F] placeholder-opacity-950 mt-3"></div>
          </div>
          <div className="md:w-[890px] w-[500px] md:-mt-6">
            <Image src={ScrollModel} alt="scrollmodel"/>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
