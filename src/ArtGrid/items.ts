
export enum ItemType {
    Image,
    Video
}

export interface ArtGridItem {
    type: ItemType;
    title: string;
    description: string;
    link?: string;
    url: string;
}

export const items: Array<ArtGridItem> = [
    {
        type: ItemType.Video,
        title: "Flying House",
        description: "<b>3d Digital Media</b>\nOctober 2020\n<i>Independent Work</i>\n\nAn attempt to recreate the aesthetic of Hayao Miyazaki in a different medium.",
        url: "res/art/flyinghouse.webm"
    },
    {
        type: ItemType.Image,
        title: "HookCat Logo",
        description: "<b>2d Digital Media</b>\nJune 2021\n<i>Transcendent Games</i>\n\nThis work is the cover for 'HookCat', a noir inspired puzzle game made in 48 hours for the GMTK game jam.",
        link: "https://indiegesindel.itch.io/hookcat",
        url: "res/art/hookcat.webp"
    },
    {
        type: ItemType.Video,
        title: "Mansion Night",
        description: "<b>3d Digital Media</b>\nAugust 2021\n<i>Transcendent Games</i>\n\nThis work shows a haunted mansion backlit by a stormy night. But who could lurk inside?",
        url: "res/art/mansionnight.webm"
    },
    {
        type: ItemType.Image,
        title: "Repairs",
        description: "<b>3d Digital Media</b>\nSeptember 2021\n<i>Independent Work</i>\n\nA Cable-Repair robot walks over a rocky landscape.",
        url: "res/art/repairs.webp"
    },
    {
        type: ItemType.Image,
        title: "Map of Cavdra",
        description: "<b>2d Digital Media</b>\nMarch 2022\n<i>Independent Work</i>\n\nThe map of a mysterious island in the pacific.",
        url: "res/art/map.webp"
    },
    {
        type: ItemType.Video,
        title: "Short Fuse",
        description: "<b>3d Digital Media</b>\nSeptember 2021\n<i>Independent Work</i>\n\nAn explosive-tempered character. Original sketch by Miles R.",
        url: "res/art/bombdude.webm"
    },
    {
        type: ItemType.Image,
        title: "Mountains",
        description: "<b>3d Digital Media</b>\nSeptember 2020\n<i>Independent Work</i>\n\nThis piece shows snowy peaks in the distance.",
        url: "res/art/mountainfinal.webp"
    },
    {
        type: ItemType.Video,
        title: "The Keep",
        description: "<b>2d Digital Media</b>\nMarch 2021\n<i>Independent Work</i>\n\nAn animated crest of arms.",
        url: "res/art/swordgif.webm"
    },
    {
        type: ItemType.Video,
        title: "Geometry Node Grids",
        description: "<b>3d Digital Media</b>\nMarch 2022\n<i>Independent Work</i>\n\nExperimenting with geometry nodes in blender, this works as a grid setup for DND campaigns.",
        url: "res/art/hexgrid.webm"
    },
    {
        type: ItemType.Image,
        title: "Bar and Grill",
        description: "<b>3d Digital Media</b>\nMay 2019\n<i>Independent Work</i>\n\nA neon-futuristic bilboard in a city of grime",
        url: "res/art/jones.webp"
    },
    {
        type: ItemType.Image,
        title: "Skyline",
        description: "<b>3d Digital Media</b>\nOctober 2019\n<i>Independent Work</i>\n\nA fading city, stretching for eternity. Made for OS3D",
        link: "https://gamejolt.com/games/Oneshot3d/463026",
        url: "res/art/Skyline.webp"
    },
    {
        type: ItemType.Video,
        title: "Pressing Buttons",
        description: "<b>3d Digital Media</b>\nFebuary 2021\n<i>Chargeman Ken Reanimated!</i>\n\nA scene from Chargeman Ken, a notoriously bad show from the 1980s. This was for \"Chargeman Ken Reanimated\" in which 100 animators attempted to remake one episode.",
        url: "res/art/pushingbutton.webm"
    },
    {
        type: ItemType.Image,
        title: "Pine Tree",
        description: "<b>2d Digital Media</b>\nDecember 2021\n<i>Independent Work</i>\n\ A pixel art drawing of a tree on a cliff.",
        url: "res/art/tree.webp"
    },
    {
        type: ItemType.Image,
        title: "Univerra",
        description: "<b>2d Digital Media</b>\nSeptember 2021\n<i>StorkLabs</i>\n\nI did a full overhaul of the artwork of Univerra. A tactical Civ-like centered around 30 minute games on your phone.",
        link: "https://play.google.com/store/apps/details?id=io.storklabs.Univerra",
        url: "res/art/univerra.webp"
    },
    {
        type: ItemType.Video,
        title: "Fireplace",
        description: "<b>3d Digital Media</b>\nDecember 2019\n<i>Independent Work</i>\n\nA blue hearth, burning with a mysterious wood. Made for OS3D",
        link: "https://gamejolt.com/games/Oneshot3d/463026",
        url: "res/art/fireplace.webm"
    },
    {
        type: ItemType.Video,
        title: "Fruit Basket Games Logo",
        description: "<b>2d Digital Media</b>\nJanuary 2021\n<i>Fruit Basket Games</i>\n\nFBG is what I publish most of my solo work under.",
        url: "res/art/fbloop.webm"
    },
    {
        type: ItemType.Image,
        title: "Inktober Sheet",
        description: "<b>2d Digital Media</b>\nOctober 2021\n<i>Independent Work</i>\n\nA collection of artwork made for 2021's Inktober challenge, in which artists made a drawing to match a prompt for each day of October.",
        url: "res/art/9daysheet.webp"
    },
    {
        type: ItemType.Video,
        title: "Found Footage",
        description: "<b>3d Digital Media</b>\nMarch 2022\n<i>Independent Work</i>\n\nA spooky video of a moving obelisk, made in blender.",
        url: "res/art/wtf.webm"
    },
    {
        type: ItemType.Image,
        title: "Skyline",
        description: "<b>2d Digital Media</b>\nAugust 2021\n<i>Independent Work</i>\n\nA cloudy night sky, the moon just peaking over the mist.",
        url: "res/art/skyline2big.webp"
    },
    {
        type: ItemType.Video,
        title: "Bouncing Ball",
        description: "<b>3d Digital Media</b>\nNovember 2020\n<i>Independent Work</i>\n\nExperimenting with a claymation artstyle, I wanted to make digital art that looked as real as possible.",
        url: "res/art/bouncingball.webm"
    },
    {
        type: ItemType.Image,
        title: "Campfire",
        description: "<b>2d Digital Media</b>\nNovember 2021\n<i>Independent Work</i>\n\nInspired by Outer Wilds, this work shows a campfire on a solitary planet",
        url: "res/art/smorelab.webp"
    },
    {
        type: ItemType.Video,
        title: "Hostile Machinery",
        description: "<b>3d Digital Media</b>\nNovember 2021\n<i>Independent Work</i>\n\nThis work shows an autonomous weapon, made to experiment with shape keys.",
        url: "res/art/Turrett.webm"
    },
    {
        type: ItemType.Video,
        title: "Syco Corp",
        description: "<b>2d Digital Media</b>\nSeptember 2021\n<i>Independent Work</i>\n\nHere at Syco Corp, we pledge to absolutely NEVER make killer robots",
        url: "res/art/sycocorp.webm"
    },
    {
        type: ItemType.Image,
        title: "Kelvin",
        description: "<b>3d Digital Media</b>\nNovember 2019\n<i>Independent Work</i>\n\nThe cats around this area seem to be attracted by the warmth. Made for OS3D Original Character and 2d image from Oneshot",
        link: "https://gamejolt.com/games/Oneshot3d/463026",
        url: "res/art/Kelvin.webp"
    },
    {
        type: ItemType.Video,
        title: "Botsune Miku",
        description: "<b>3d Digital Media</b>\nNovember 2020\n<i>Independent Work</i>\n\nA dancing robot.",
        url: "res/art/botsunemiku.webm"
    },
    {
        type: ItemType.Image,
        title: "Transcendent Games Logo",
        description: "<b>3d Digital Media</b>\nMay 2021\n<i>Transcendent Games</i>\n\nThis logo is for <i>Transcendent Games</i>, a group I've been working with as the artist for a year now.",
        url: "res/art/transcendentgames.webp"
    },
    {
        type: ItemType.Image,
        title: "SUPER MARBLE GAME",
        description: "<b>2d Interactive Media</b>\nMay 2021\n<i>Fruit Basket Games</i>\n\nA Retro-Futuristic logo for SUPER MARBLE GAME, a fast-paced platformer.",
        url: "res/art/supermarble.webp"
    },
    {
        type: ItemType.Image,
        title: "Flower",
        description: "<b>2d Digital Media</b>\nMay 2021\n<i>Independent Work</i>\n\nDetailed diagrams for a nonexistent flower",
        url: "res/art/flower.webp"
    },
    {
        type: ItemType.Image,
        title: "Assorted Ghouls",
        description: "<b>3d Digital Media</b>\nSeptember 2021\n<i>Transcendent Games</i>\n\nAssorted ghosts and ghouls that roam the halls of a haunted mansion.",
        url: "res/art/theghostsarebackintown.webp"
    },
    {
        type: ItemType.Image,
        title: "Blueberry",
        description: "<b>2d Digital Media</b>\nJanuary 2021\n<i>Independent Work</i>\n\nA Sentient fruit.",
        url: "res/art/blueberry.webp"
    },
    {
        type: ItemType.Video,
        title: "Witch Merchant",
        description: "<b>2d Digital Media</b>\nJune 2021\n<i>Independent Work</i>\n\n\"My wares are too powerful for you, traveler\"",
        url: "res/art/potionseller.webm"
    },
    {
        type: ItemType.Image,
        title: "Witch Merchant 2",
        description: "<b>2d Digital Media</b>\nJune 2021\n<i>Independent Work</i>\n\nA larger depiction of the witch merchant.",
        url: "res/art/potionsellerfullbodyhat.webp"
    },
    {
        type: ItemType.Image,
        title: "Octii",
        description: "<b>2d Digital Media</b>\nJanuary 2021\n<i>Innatical</i>\n\nOctii was meant to be the mascot of a chat-app that never happened",
        url: "res/art/newoctii_happy.webp"
    },
    {
        type: ItemType.Image,
        title: "Crystals",
        description: "<b>2d Digital Media</b>\nAugust 2021\n<i>Fruit Basket Games</i>\n\nA study on refractive surfaces with pixel art.",
        url: "res/art/crystals.webp"
    },
    {
        type: ItemType.Video,
        title: "Windmile Isle",
        description: "<b>3d interactive Media</b>\nAugust 2021\n<i>Fruit Basket Games</i>\n\nA serene island in a vast ocean.",
        url: "res/art/windmill_isle.webm"
    },
    {
        type: ItemType.Video,
        title: "Research In Progress",
        description: "<b>3d Digital Media</b>\nDecember 2021\n<i>Fruit Basket Games</i>\n\nRESEARCH 9.67% COMPLETE...",
        url: "res/art/Research.webm"
    },
]