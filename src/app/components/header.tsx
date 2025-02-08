import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Button from "./button";

export default async function Header() {

    const client = createClient();

    const settings = await client.getSingle("settings");

    return (
        <header className="px-8 py-10 md:py-8 md:px-8 lg:py-10 ">
            <div className="mx-auto max-w-[75%] w-full">
                <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
                    
                    <div>
                        <Link href="/" className="flex items-center gap-2">
                            <PrismicNextImage alt="" field={settings.data.logo_symbol}/>
                            <h1 className="text-2xl font-extrabold lowercase">
                                {settings.data.logo}
                            </h1>
                        </Link>
                    </div>
                    
                    
                    <nav>
                        <ul className="flex items-center gap-4">
                            {settings.data.navigation.map((item) => (
                                <li key={item.link_label}>
                                    <PrismicNextLink className="p-3 hover:text-white hover:glow transition-all duration-300" field={item.link}>
                                        {item.link_label}
                                    </PrismicNextLink>
                                </li>
                            ))}
                            <li>
                            <Button className="p-3 m-auto mx-10" field={settings.data.beta_access}>
                                {settings.data.header_button_text}
                            </Button>
                            </li>
                        </ul>
                    </nav>

                    
                </div>
            </div>
        </header>
    )
}