import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Button from "@/app/components/button";

/**
 * Props for `SidePanel`.
 */
export type SidePanelProps = SliceComponentProps<Content.SidePanelSlice>;

/**
 * Component for "SidePanel" Slices.
 */
const SidePanel: FC<SidePanelProps> = ({ slice }) => {
  return (
    <>
      <div className="flex justify-center">

      {/* Slice includes button and image is on right */}
        {slice.variation === "default" && (
          <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="bg-[#17161D] w-[70%]"
          >
            <div className="flex items-center min-h-[400px] w-full">

              {/* left side */}
              <div className="flex flex-col gap-10 w-1/2 px-20 ml-10">
                <h1 className="text-5xl font-bold leading-[125%]">
                  {slice.primary.label}
                </h1>
                <h1 className="text-[rgb(141,132,152)] text-xl leading-[148%] w-3/4">
                  {slice.primary.sublabel}
                </h1>

                <Button className="shadow-xl shadow-purple-600/40 drop-shadow-[0_18px_100px_rgba(98,20,226,0.4)]" field={slice.primary.link}>
                  {slice.primary.link_text}
                </Button>
              </div>

              {/* right side */}
              <div className="w-1/2 flex justify-end py-20">
                <PrismicNextImage alt=""
                  className="z-20" 
                  field={slice.primary.ui_cutout} 
                  />
              </div>  

            </div>
            
          </section>
        )}

        {/* Slice doesn't include button and image is on left */}
        {slice.variation === "buttonless" && (
          <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="bg-black w-[70%]"
          >
            <div className="flex items-center min-h-[400px] w-full">

              {/* left side */}
              <div className="w-1/2 flex justify-begin py-20">
                <PrismicNextImage alt=""
                  className="z-20" 
                  field={slice.primary.ui_cutout} 
                  />
              </div>  
              

              {/* right side */}
              
              <div className="flex flex-col gap-10 w-1/2 px-20 mr-10">
                <h1 className="text-5xl font-bold leading-[125%]">
                  {slice.primary.label}
                </h1>
                <h1 className="text-[rgb(141,132,152)] text-xl leading-[148%] w-3/4">
                  {slice.primary.sublabel}
                </h1>
              </div>

            </div>
            
          </section>
        )}
        
      </div>
    </>
  );
};

export default SidePanel;
