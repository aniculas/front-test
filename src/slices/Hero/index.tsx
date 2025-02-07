import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.intro_quote} />
      {slice.primary.subquote}
      <PrismicNextImage field={slice.primary.email_field} />
      <PrismicRichText field={slice.primary.email_input} />
      <PrismicNextImage field={slice.primary.ui_mock} />
    </section>
  );
};

export default Hero;
