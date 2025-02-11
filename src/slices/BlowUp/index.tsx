import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Footer from "@/app/components/footer";



export type BlowUpProps = SliceComponentProps<Content.BlowUpSlice>;

const BlowUp: FC<BlowUpProps> = ({ slice }) => {
  return (
    <>
    {slice.variation === "default" && (
      <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden flex justify-center"
    >
      <div className="absolute inset-0 top-[-30%] w-full z-10">
        <PrismicNextImage draggable="false" alt="" field={slice.primary.back_glow} />
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
                draggable="false"
                alt="" 
                field={slice.primary.swoosh}
                className="object-cover w-full h-full opacity-[50%]"
              />
            </div>
          </div>
          <div className="relative z-20">
            <PrismicNextImage draggable="false" alt="" className="z-10" field={slice.primary.blowup_ui} />
          </div>
        </div>
      </div>

    </section>
    )}

    {slice.variation === "bottom" && (
      <div className="overflow-hidden">

      <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative flex flex-col justify-center items-center"
      >
      <div className="absolute z-10 w-full -translate-y-[20%]">
        <PrismicNextImage draggable="false" alt="" 
        className="w-full" 
        field={slice.primary.back_glow} 
        />
      </div>
      <div className="flex flex-row relative justify-center w-[70%]">
         
        <div className="flex flex-col justify-center gap-8">
          <div className="m-8"/> 
          <h1 className="text-6xl font-bold leading-tight tracking-tighter text-center z-20">
            {slice.primary.main_label}  
          </h1>
          <h1 className="z-0 mx-auto text-gray-400 w-[65%] text-xl font-normal leading-relaxed tracking-normal text-center ">
            {slice.primary.sub_label}  
          </h1>
          <div className="my-10"/>
          <div className="absolute z-0 -top-[10%] -translate-y-[10%]">
            <div className="relative w-full ">
              <PrismicNextImage 
                draggable="false"
                alt="" 
                field={slice.primary.swoosh}
                className="object-cover w-full opacity-[50%]"
                />
            </div>
          </div>
          <div className="relative z-20">
            <PrismicNextImage draggable="false" alt="" className="z-10" field={slice.primary.blowup_ui} />
          </div>
          <div className="m-8"/>
          <div className="m-8"/>
        </div>
      </div>
      
    </section>
      <Footer/>
    </div>
    )}
    
    </>
  );
};

export default BlowUp;