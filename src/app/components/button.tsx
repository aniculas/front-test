import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";


export default function Button({
    className,
    ...restProps
}: PrismicNextLinkProps) {

    return (
        <PrismicNextLink
        className=
        {clsx("static w-48 h-11 flex flex-row justify-center items-center gap-2 p-2 px-4 flex-none mx-10 rounded-lg shadow-lg bg-[rgb(98,20,226)] text-white font-inter text-base font-medium leading-relaxed tracking-normal", className) }
        {...restProps}
        />
    )
}