import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";


export default function Button({
    className,
    ...restProps
}: PrismicNextLinkProps) {

    return (
        <PrismicNextLink
        className=
        {clsx("static w-48 h-11 flex flex-row justify-center items-center gap-2",
        "flex-none rounded-lg shadow-lg bg-[rgb(98,20,226)] text-white",
        "font-medium leading-relaxed tracking-normal",
        "transition-all duration-300 hover:bg-purple-700 hover:shadow-purple-500/30 hover:shadow-l", className) }
        {...restProps}
        />
    )
}