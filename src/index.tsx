import { h, render } from "preact";
import { LinkGrid, LinkGridItem } from "./LinkGrid/LinkGrid";

const contactLinkGridItems: Array<LinkGridItem> = [
    {
        imageURL: "res/art/blueberry.webp",
        imageAlt: "blueberry",
        link: "#"
    },
    {
        imageURL: "res/art/blueberry.webp",
        imageAlt: "blueberry",
        link: "#"
    },
    {
        imageURL: "res/art/blueberry.webp",
        imageAlt: "blueberry",
        link: "#"
    },
    {
        imageURL: "res/art/blueberry.webp",
        imageAlt: "blueberry",
        link: "#"
    },
]

const coolPeopleLinkGridItems: Array<LinkGridItem> = [
    {
        imageURL: "res/art/blueberry.webp",
        imageAlt: "blueberry",
        link: "#"
    },
    {
        imageURL: "res/art/blueberry.webp",
        imageAlt: "blueberry",
        link: "#"
    },
    {
        imageURL: "res/art/blueberry.webp",
        imageAlt: "blueberry",
        link: "#"
    },
    {
        imageURL: "res/art/blueberry.webp",
        imageAlt: "blueberry",
        link: "#"
    },
]

render(<LinkGrid items={contactLinkGridItems} />, document.getElementById("contact-link-grid-root") as Element);
render(<LinkGrid items={coolPeopleLinkGridItems} />, document.getElementById("cool-people-link-grid-root") as Element);
