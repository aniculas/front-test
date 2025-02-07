import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    >
      Placeholder component for side_cards (variation: {slice.variation}) Slices
    </section>
  );
};

export default SideCards;
