import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Header() {

    const client = createClient();

    const settings = await client.getSingle("settings");

    return (
        <header>
            
            <Link href="/">{settings.data.logo}</Link>
            
            <nav>
                <ul>
                    {settings.data.navigation.map((item) => (
                        <li key={item.link_label}>
                            <PrismicNextLink field={item.link}>{item.link_label}</PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}