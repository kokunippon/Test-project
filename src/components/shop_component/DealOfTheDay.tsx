import { cn } from "../../../utils/cn";
import React from "react";
import Image from "next/image";
import { Brand1, Brand2, Brand3, Brand4 } from "@/assets/shopassets";
import { BentoGrid, BentoGridItem } from "../GridCard/GridCardLayout";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center mb-6 -mt-40 ">
          <div className=" text-white font-medium text-4xl">
            <span className="text-[#FFFF6D] text-4xl font-medium mr-3">
              DEAL
            </span>
            OF THE DAY
            <div className="w-auto h-1 bg-gradient-to-r from-[#1F1F1F] via-[#FFFF6D] to-[#1F1F1F] placeholder-opacity-950 mt-3"></div>
          </div>
         
        </div>
      </div>
      <BentoGrid className="max-w-7xl mx-auto px-2 md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = ({ image }: { image: JSX.Element }) => (
  <div className="flex flex-1  items-center justify-center w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2]   border border-transparent bg-neutral-100 dark:bg-black">
    <div className="flex ">{image}</div>
  </div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <Skeleton
        image={
          <div>
            <Image className="rounded-xl" src={Brand1} alt="Brand 1" />
          </div>
        }
      />
    ),
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: Brand1,
  },
  {
    title: "The Shoe Revolution",
    description: "Dive into the transformative power of technology.",
    header: (
      <Skeleton
        image={
          <div className="flex justify-center items-center">
            <Image className="rounded-xl" src={Brand2} alt="Brand 1" />
          </div>
        }
      />
    ),
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <Skeleton
        image={
          <div>
            <Image className="rounded-xl" src={Brand4} alt="Brand 1" />
          </div>
        }
      />
    ),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <Skeleton
        image={
          <div>
            <Image className="rounded-xl" src={Brand3} alt="Brand 1" />
          </div>
        }
      />
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

export default BentoGridSecondDemo;
