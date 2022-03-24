import { h, render } from "preact";
import { LinkGrid, LinkGridItem } from "./LinkGrid/LinkGrid";

const contactLinkGridItems: Array<LinkGridItem> = [
    {
        imageURL: "res/art/blueberry.webp",
        imageAlt: "Twitter",
        link: "https://twitter.com/bluebsCat"
    },
    {
        imageURL: "res/art/email.webp",
        imageAlt: "Email",
        link: "mailto:support@fruitbasket.games"
    },
    {
        imageURL: "res/art/itch.png",
        imageAlt: "Itch",
        link: "https://bluebstophat.itch.io/"
    },
    {
        imageURL: "res/art/discord.png",
        imageAlt: "Discord",
        link: "https://discord.gg/SVT57Zb"
    },
]

const coolPeopleLinkGridItems: Array<LinkGridItem> = [
    {
        imageURL: "res/art/stork.webp",
        imageAlt: "Storklabs",
        link: "https://www.storklabs.io/"
    },
    {
        imageURL: "res/art/knowl.jpg",
        imageAlt: "Knight Owl Hoots",
        link: "https://twitter.com/KnightOwlHoots"
    },
    {
        imageURL: "res/art/controllerTGD.png",
        imageAlt: "Trans Game Dev",
        link: "https://www.transgame.dev/"
    },
    {
        imageURL: "res/art/slow_arpeggio.webp",
        imageAlt: "Slow Arpeggio",
        link: "https://slowarpeggio.com"
    },
]

render(<LinkGrid items={contactLinkGridItems} />, document.getElementById("contact-link-grid-root") as Element);
render(<LinkGrid items={coolPeopleLinkGridItems} />, document.getElementById("cool-people-link-grid-root") as Element);
