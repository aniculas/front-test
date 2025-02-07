import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlowUp`.
 */
export type BlowUpProps = SliceComponentProps<Content.BlowUpSlice>;

/**
 * Component for "BlowUp" Slices.
 */
const BlowUp: FC<BlowUpProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blow_up (variation: {slice.variation}) Slices
    </section>
  );
};

export default BlowUp;
