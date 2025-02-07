import { FC } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Button from "@/app/components/button";


const components: JSXMapSerializer = {
  heading1: ({children}) => (
    <h1 className="font-body text-5xl md:text-8xl font-extrabold leading-tight tracking-tight text-white">
      {children}
    </h1>
  ),
}

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;



/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  
  console.log(slice.primary.intro_quote);


  return (
    <section
      className="px-4 py-10 md:py-14 md:px-6 lg:py-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 place-items-center text-center">
          <PrismicRichText field={slice.primary.intro_quote} components={ components } />

          <h1 className="text-center font-inter text-l md:text-2xl font-normal leading-relaxed text-[#8D8498]">
            {slice.primary.subquote}
          </h1>
          

          <PrismicNextImage draggable="false" alt="" className="" field={slice.primary.email_field} />

          <PrismicNextImage alt="" className="rounded-lg shadow-2xl m-8 md:m-10" field={slice.primary.ui_mock} />

        </div>
      </div>
    </section>
  );
};

export default Hero;
