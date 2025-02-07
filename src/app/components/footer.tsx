import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {

    const client = createClient();
    const footer = await client.getSingle("footer");

    console.log(footer.data.navigation)

    return (
        <footer className="px-8 py-10 md:py-8 md:px-8 lg:py-10">
            <div className="mx-auto max-w-[85%] w-full">
                <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
                    <div>
                        <Link href="/" className="flex items-center gap-2">
                            <PrismicNextImage alt="" field={footer.data.logo}/>
                            <h1 className="text-gray-300 text-xs leading-[170%] mx-3">
                                {footer.data.copyright} {new Date().getFullYear()}
                                {/* put year after */}
                            </h1>
                        </Link>
                    </div>
                    
                    
                    <nav>
                        <ul className="flex items-center gap-4">
                            {footer.data.navigation.map((item) => (
                                <li key={item.link_label}>
                                    <PrismicNextLink className="p-3 text-gray-300 text-xs hover:text-white hover:glow transition-all duration-300" field={item.link}>
                                        {item.link_label}
                                    </PrismicNextLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    
                </div>
            </div>

        </footer>
    )
}