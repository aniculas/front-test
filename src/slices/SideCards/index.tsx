import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `SideCards`.
 */
export type SideCardsProps = SliceComponentProps<Content.SideCardsSlice>;

/**
 * Component for "SideCards" Slices.
 */
const SideCards: FC<SideCardsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center "
    >
      <div className="flex flex-col gap-12 bg-[#0A0A0B] py-6 rounded-lg shadow-sm">

        <div className="flex flex-col text-center justify-center gap-6 sm:my-6 md:my-12">
          <h1 className="text-6xl font-bold leading-tight tracking-tight text-center">
            {slice.primary.label}
          </h1>
          <h1 className="text-gray-400 text-xl font-normal leading-relaxed tracking-normal text-center w-[20%] mx-auto">
            {slice.primary.sublabel}
          </h1>
        </div>

        <div className="flex  justify-center px-6">
          <div className="w-1/2">
            <PrismicNextImage alt="" field={slice.primary.ui_cutout} />
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 h-[80%] my-auto">
          {slice.primary.cards.map((item) => (
            <div
            className="p-8 rounded-xl bg-[#17161D] shadow-2xl transition-transform hover:scale-105"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <PrismicNextImage alt="" field={item.symbol} />
              </div>

              {/* Content */}
              <h1 className="text-white text-xl font-semibold mb-2">
                {item.top}
              </h1>
              <p className="text-gray-400">
                {item.bottom}
              </p>
            </div>
          ))}
          </div>
        </div>

        <div className="py-20"/>
      
      </div>
    </section>
  );
};

export default SideCards;
