import { FC } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading1: ({children}) => (
    <h1 className="font-body text-5xl md:text-8xl font-extrabold leading-tight tracking-tight text-white">
      {children}
    </h1>
  ),
}

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const GradientText: FC<{ text: string }> = ({ text }) => (
  <span 
    className="bg-gradient-to-r from-[rgb(97,0,255)] via-[rgb(249,59,184)] to-[rgb(255,75,64)] text-transparent bg-clip-text"
  >
    {text}
  </span>
);

const Hero: FC<HeroProps> = ({ slice }) => {
  const introQuote = slice.primary.intro_quote || "";
  const words = introQuote.split(" ");
  const lastWord = words.pop();
  const remainingWords = words.join(" ");

  return (
    <section
      className="px-4 py-10 md:py-14 md:px-6 lg:py-16 relative"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="relative w-full h-full">
          <PrismicNextImage 
            field={slice.primary.back_grid}
            alt="" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-full h-auto object-contain"
          />
          <PrismicNextImage 
            field={slice.primary.back_glow}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 place-items-center text-center sm:gap-12 md:gap-16">
          <h1 className="text-7xl font-bold tracking-tighter text-center mx-auto w-[70%]">
            {remainingWords}{" "}
            <GradientText text={lastWord || ""} />
          </h1>
          
          <h1 className="text-center font-inter text-l md:text-2xl font-normal leading-relaxed text-[#8D8498] w-[55%]">
            {slice.primary.subquote}
          </h1>

          <PrismicNextImage draggable="false" alt="" className="" field={slice.primary.email_field} />
          <PrismicNextImage draggable="false" alt="" className="rounded-lg shadow-2xl m-8 md:m-10" field={slice.primary.ui_mock} />
        </div>
      </div>
    </section>
  );
};

export default Hero;