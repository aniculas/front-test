import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SidePanel`.
 */
export type SidePanelProps = SliceComponentProps<Content.SidePanelSlice>;

/**
 * Component for "SidePanel" Slices.
 */
const SidePanel: FC<SidePanelProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for side_panel (variation: {slice.variation}) Slices
    </section>
  );
};

export default SidePanel;
