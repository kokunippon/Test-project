import { cn } from "../../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      <div className="flex justify-center items-center mt-10 ">
        <div className=" text-white font-medium text-4xl mt-10">
          <span className="text-[#FFFF6D] text-4xl font-medium mr-3">TRENDING</span>
          PICKS 
          <div className="w-auto h-1 bg-gradient-to-r from-[#1F1F1F] via-[#FFFF6D] to-[#1F1F1F] placeholder-opacity-950 mt-3"></div>
        </div>
      </div>

      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3  py-10 sm:mx-10 mx-5",
          className
        )}
      >
        {items.map((item, idx) => (
          <Link
            href={item?.link}
            key={item?.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-[#FFFF6D]/[0.98] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              {/* <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription> */}
              <CardImage className=" mx-auto">
                <Image
                  src={item.image}
                  width={2000}
                  height={2000}
                  className="mx-auto rounded-xl group-hover/card:shadow-sm"
                  alt="thumbnail"
                />
              </CardImage>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-[#232323] border border-transparent dark:border-white/[0.2] group-hover:border-[#FFFF6D] relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};
// export const CardTitle = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
//       {children}
//     </h4>
//   );
// };
// export const CardDescription = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <p
//       className={cn(
//         "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
//         className
//       )}
//     >
//       {children}
//     </p>
//   );
// };

export const CardImage = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn(className)}>{children}</div>;
};

export default HoverEffect;
