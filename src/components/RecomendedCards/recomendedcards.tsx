import { HoverEffect } from "./card-hover-effect";
import { Product01, Product02, Product03, Product04, Product05, Product06 } from "@/assets/RecomendedAseets";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/store",
    image: Product01.src,
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "/store",
    image: Product02.src, // Provide a default image value
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "/store",
    image: Product03.src, // Provide a default image value
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    image: Product04.src, // Provide a default image value
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "/store",
    image: Product05.src, // Provide a default image value
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "/store",
    image: Product06.src, // Provide a default image value
  },
];

export default CardHoverEffectDemo;