
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
        type: ItemType.Image,
        title: "Office Concept Art",
        description: "<b>3d Digital Media</b>\nDecember 2023\n<i>Independent Work</i>\n\nA potential design for an office complex abandoned in the 60's. Made in Blender",
        url: "res/art/officetest.png"
    },
    {
        type: ItemType.Image,
        title: "Saprophytic Poster",
        description: "<b>2d Digital Media</b>\nOctober 2024\n<i>Independent Work</i>\n\nAn experiment on what promotional art for a horror game I've been designing would look like. Painted in Clip Studio Paint",
        url: "res/art/saprophyticposterformatted.png"
    },
    {
        type: ItemType.Video,
        title: "Soothshatter",
        description: "<b>3d Digital Media</b>\nAugust 2023\n<i>Independent Work</i>\n\nA husk of a person- their identity shattered to the winds. Made in Blender",
        url: "res/art/shatter.webm"
    },
    {
        type: ItemType.Video,
        title: "Maya",
        description: "<b>3d Digital Media</b>\nOctober 2024\n<i>Independent Work</i>\n\nA 3d model of Maya, from the webcomic Kill Six Billion Demons- Rigged to support a full range of motion and facial expressions. Made in Blender",
        url: "res/art/Maya.mp4"
    },
  
    {
        type: ItemType.Image,
        title: "Tarot Cards",
        description: "<b>2d Digital Media</b>\nAugust 2024\n<i>Independent Work</i>\n\nA series of lighting studies made through the form of Tarot Cards. From top left to bottom right: The High Priestess, The Magician, The Empress, and The Fool.",
        url: "res/art/tarotmerged.png"
    },
    {
        type: ItemType.Image,
        title: "Cover Art",
        description: "<b>2d Digital Media</b>\nJuly 2024\n<i>Independent Work</i>\n\nCover art for a story I've been writing in my spare time. Painted from scratch in Clip Studio Paint.",
        url: "res/art/parasiticinfluences.png"
    },
    {
        type: ItemType.Video,
        title: "Camcorder",
        description: "<b>3d Digital Media</b>\nJune 2024\n<i>Independent Work</i>\n\nA 3d model of a fictional tape camcorder, made Game Ready. 4,449 Tris, with a 2048x2048 PBR texture set.",
        url: "res/art/camcorder.webm"
    },
    {
        type: ItemType.Video,
        title: "Camcorder Viewmodel",
        description: "<b>3d Digital Media</b>\nJune 2024\n<i>Independent Work</i>\n\nA series of viewmodel animations for said camcorder. The hand and rigging are also made by me.",
        url: "res/art/viewmodelcam.webm"
    },
    {
        type: ItemType.Image,
        title: "Lillian Keyton",
        description: "<b>3d Digital Media</b>\nApril 2023\n<i>Independent Work</i>\n\nFanart of Lillian Keyton, from the webcomic 'Soulwinder'. Made in Blender",
        url: "res/art/soulwinder.webp"
    },
    {
        type: ItemType.Image,
        title: "Hollow Knight Cosplay",
        description: "<b>Physical Costume</b>\nOctober 2023\n<i>Independent Work</i>\n\nA costume of the Hollow Knight from 'Hollow Knight'- the mask is 3d printed with LEDS run through the eyes, the nail is foam sliced and stacked around a dowel rod, and the cloak is a curtain resewn into strands.",
        url: "res/art/theKnight.jpg"
    },
    {
        type: ItemType.Image,
        title: "Replacement",
        description: "<b>3d Digital Media</b>\nSeptember 2023\n<i>Independent Work</i>\n\nA fake advertisement for prosthetic upgrades. Made in Blender",
        url: "res/art/molddroid.webp"
    },
    {
        type: ItemType.Image,
        title: "Tourim Posters",
        description: "<b>3d Digital Media</b>\nDecember 2023\n<i>Independent Work</i>\n\nA series of fake tourism posters for locations in Canada. Made in Blender",
        url: "res/art/merge.png"
    },
    {
        type: ItemType.Video,
        title: "Mallory",
        description: "<b>3d Digital Media</b>\nAugust 2023\n<i>Independent Work</i>\n\nFan art of Mallory, from the webcomic 'The Beast of Hadingley Hill'. Made in Blender",
        url: "res/art/hadingleyturn2.mp4"
    },
    {
        type: ItemType.Image,
        title: "BC Tourism Poster",
        description: "<b>3d Digital Media</b>\nDecember 2022\n<i>Independent Work</i>\n\nA fake advertisement for the woods of BC. Made in Blender",
        url: "res/art/tourismposterbc.webp"
    },
    {
        type: ItemType.Video,
        title: "Forgotten Church",
        description: "<b>3d Digital Media</b>\nJanuary 2023\n<i>Independent Work</i>\n\nA shattered point in space- a eulogy to the forgotton. Made in Blender",
        url: "res/art/thestars.webm"
    },
    {
        type: ItemType.Image,
        title: "City Skyline",
        description: "<b>3d Digital Media</b>\nJune 2023\n<i>Independent Work</i>\n\nA city that never sleeps. Made in Blender",
        url: "res/art/skiview.webp"
    },
    {
        type: ItemType.Video,
        title: "Silver Fanart",
        description: "<b>3d Digital Media</b>\nJuly 2023\n<i>Independent Work</i>\n\nFanart of Silver, from the 2d RPG Oneshot. Made in Blender",
        url: "res/art/silver3d.webm"
    },
    {
        type: ItemType.Video,
        title: "Starfarer",
        description: "<b>3d Digital Media</b>\nJuly 2022\n<i>Independent Work</i>\n\nCharacter modelling and rigging practice, with an added cel shaded twist!",
        url: "res/art/starfarer.webm"
    },
    {
        type: ItemType.Video,
        title: "Lupe",
        description: "<b>3d Digital Media</b>\nOctober 2022\n<i>Independent Work</i>\n\nA 3d model of Lupe from the webcomic Four Leaf!",
        url: "res/art/lupefourleaf.webm"
    },
    {
        type: ItemType.Video,
        title: "The Sky.",
        description: "<b>3d Digital Media</b>\nFebuary 2023\n<i>Independent Work</i>\n\nNobody has seen the stars in a hundred years. Made in Blender",
        url: "res/art/thesky.webm"
    },
    {
        type: ItemType.Video,
        title: "Freefalling",
        description: "<b>3d Digital Media</b>\nSeptember 2022\n<i>Independent Work</i>\n\nFalling from the skyline. Made in Blender",
        url: "res/art/falling.webm"
    },
    {
        type: ItemType.Image,
        title: "Mage",
        description: "<b>3d Digital Media</b>\nAugust 2022\n<i>Independent Work</i>\n\nA mysterious alchemist hones her craft. Made in Blender",
        url: "res/art/render4.webp"
    },
    {
        type: ItemType.Video,
        title: "Fight Scene",
        description: "<b>3d Digital Media</b>\nJune 2023\n<i>Independent Work</i>\n\nPracticing animation and 2d effects with a fight scene! Made in Blender",
        url: "res/art/fightscene.webm"
    },
    {
        type: ItemType.Image,
        title: "Matsterna",
        description: "<b>3d Digital Media</b>\nJuly 2023\n<i>Independent Work</i>\n\nThe Creator of the cosmos. Made in Blender",
        url: "res/art/matsterna.webp"
    },
    {
        type: ItemType.Image,
        title: "Basic Lands",
        description: "<b>2d Digital Media</b>\nJune 2022\n<i>Independent Work</i>\n\nA set of custom cards designed to function in the card game 'Magic the Gathering'",
        url: "res/art/mtglands.webp"
    },
    {
        type: ItemType.Image,
        title: "Flumph",
        description: "<b>2d Digital Media</b>\nJune 2022\n<i>Independent Work</i>\n\nAnother custom art card, this time of 'Flumph', from Magic the Gathering",
        url: "res/art/flumph.webp"
    },
    {
        type: ItemType.Video,
        title: "Short Fuse",
        description: "<b>3d Digital Media</b>\nSeptember 2021\n<i>Independent Work</i>\n\nAn explosive-tempered character. Original sketch by Miles R.",
        url: "res/art/bombdude.webm"
    },
    {
        type: ItemType.Image,
        title: "So long, Geffen.",
        description: "<b>2d Digital Media</b>\nJune 2022\n<i>Independent Work</i>\n\n My graduation cap for school.",
        url: "res/art/schoolcap.webp"
    }
]
