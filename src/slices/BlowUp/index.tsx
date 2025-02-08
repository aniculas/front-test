import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";


export type BlowUpProps = SliceComponentProps<Content.BlowUpSlice>;

const BlowUp: FC<BlowUpProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden flex justify-center"
    >
      <div className="absolute inset-0 top-[-30%] w-full z-10">
        <PrismicNextImage alt="" field={slice.primary.back_glow} />
      </div>

      

      
      <div className="flex flex-row relative justify-center w-[70%]">
         
        <div className="flex flex-col justify-center gap-8">
          <div className="m-8"/> 
          <h1 className="text-6xl font-bold leading-tight tracking-tighter text-center z-20">
            {slice.primary.main_label}  
          </h1>
          <h1 className="z-0 mx-auto text-gray-400 w-[35%] text-xl font-normal leading-relaxed tracking-normal text-center ">
            {slice.primary.sub_label}  
          </h1>
          <div className="my-10"/>
          <div className="absolute top-[0%] left-1/2 -translate-x-1/2 w-full max-w-7xl overflow-hidden z-0 h-[50%]">
            <div className="relative w-full">
              <PrismicNextImage 
                alt="" 
                field={slice.primary.swoosh}
                className="object-cover w-full h-full opacity-[50%]"
              />
            </div>
          </div>
          <div className="relative z-20">
            <PrismicNextImage alt="" className="z-10" field={slice.primary.blowup_ui} />
          </div>
        </div>
      </div>

    </section>
  );
};

export default BlowUp;