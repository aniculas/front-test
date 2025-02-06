import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Footer() {
    // create a new page for this probably
    const client = createClient();
    const settings = await client.getSingle("settings");

    return (
        <footer>Test</footer>
    )
}