import { h, render } from "preact";
import { LinkGrid, LinkGridItem } from "./LinkGrid/LinkGrid";

const contactLinkGridItems: Array<LinkGridItem> = [
    {
        imageURL: "res/art/blueberry.webp",
        imageAlt: "Twitter",
        link: "https://twitter.com/BluebsCat"
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
        imageURL: "res/art/Knowl.jpg",
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


const taglines: Array<string> = [
    "Sweet Game Development.",
    "Fruity Games.",
    "A cornucopia of content!",
    "Straight from the vine video games.",
    "Kid tested, mother approved!",
    "Ripe for the playing.",
    "Games you can sink your teeth into!",
    "Certified USDA Organic.",
    "All Juice No Fat.",
    "(And berries too!)",
    "(Yes, that includes corn)",
    "Trans Rights!",
    "Games with Love!",
    "Games as sweet as fruit!",
    "The Fruits of our Labor!",
    "Where Fun and Games Grow on Trees!",
    "Basket full of fun!",
    "Games for fruit :)",
    "Insert Tagline Here.",
    "All fruit, no basket!",
    "I'm here to fruit basket and basket games, and I'm all out of fruit.",
    "We have to go fruit, marty! fruit to the basket!",
    "No, I AM your fruit basket!",
    "not to be confused with Fruits Basket!",
    "not to be confused with Fruit on the Loom!",
    "These games are your jam!",
    "Featuring dante from the devil may cry series!",
    "127.0.0.1",
    "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Click Me :)</a>",
    "I am wanted by the federal bureau of investigation for my actions in the 2008 financial crisis."

];

(document.getElementById("tagline") as HTMLParagraphElement).innerHTML = taglines[Math.floor(Math.random() * taglines.length)];