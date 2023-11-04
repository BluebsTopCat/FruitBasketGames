
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
        title: "Soothshatter",
        description: "<b>3d Digital Media</b>\nAugust 2023\n<i>Independent Work</i>\n\nA husk of a person- their identity shattered to the winds. Made in Blender",
        url: "res/art/shatter.mp4"
    },
    
    {
        type: ItemType.Image,
        title: "Lillian Keyton",
        description: "<b>3d Digital Media</b>\nApril 2023\n<i>Independent Work</i>\n\nFanart of Lillian Keyton, from the webcomic 'Soulwinder'. Made in Blender",
        url: "res/art/Soulwinder.png"
    },
    {
        type: ItemType.Image,
        title: "Replacement",
        description: "<b>3d Digital Media</b>\nSeptember 2023\n<i>Independent Work</i>\n\nA fake advertisement for prosthetic upgrades. Made in Blender",
        url: "res/art/molddroid.png"
    },
    
    {
        type: ItemType.Image,
        title: "BC Tourism Poster",
        description: "<b>3d Digital Media</b>\nDecember 2022\n<i>Independent Work</i>\n\nA fake advertisement for the woods of BC. Made in Blender",
        url: "res/art/TourismPosterBc.png"
    },
    {
        type: ItemType.Video,
        title: "Forgotten Church",
        description: "<b>3d Digital Media</b>\nJanuary 2023\n<i>Independent Work</i>\n\nA shattered point in space- a eulogy to the forgotton. Made in Blender",
        url: "res/art/TheStars.mp4"
    },
    {
        type: ItemType.Image,
        title: "City Skyline",
        description: "<b>3d Digital Media</b>\nJune 2023\n<i>Independent Work</i>\n\nA city that never sleeps. Made in Blender",
        url: "res/art/Skiview.png"
    },
    {
        type: ItemType.Video,
        title: "Silver Fanart",
        description: "<b>3d Digital Media</b>\nJuly 2023\n<i>Independent Work</i>\n\nFanart of Silver, from the 2d RPG Oneshot. Made in Blender",
        url: "res/art/Silver3d.mp4"
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
        url: "res/art/LupeFourLeaf.webm"
    },
    {
        type: ItemType.Video,
        title: "The Sky.",
        description: "<b>3d Digital Media</b>\nFebuary 2023\n<i>Independent Work</i>\n\nNobody has seen the stars in a hundred years. Made in Blender",
        url: "res/art/TheSky.mp4"
    },
    {
        type: ItemType.Video,
        title: "Freefalling",
        description: "<b>3d Digital Media</b>\nSeptember 2022\n<i>Independent Work</i>\n\nFalling from the skyline. Made in Blender",
        url: "res/art/Falling.mp4"
    },
    {
        type: ItemType.Image,
        title: "Mage",
        description: "<b>3d Digital Media</b>\nAugust 2022\n<i>Independent Work</i>\n\nA mysterious alchemist hones her craft. Made in Blender",
        url: "res/art/Render4.png"
    },
    {
        type: ItemType.Video,
        title: "Fight Scene",
        description: "<b>3d Digital Media</b>\nJune 2023\n<i>Independent Work</i>\n\nPracticing animation and 2d effects with a fight scene! Made in Blender",
        url: "res/art/FightScene.mp4"
    },
    {
        type: ItemType.Image,
        title: "Matsterna",
        description: "<b>3d Digital Media</b>\nJuly 2023\n<i>Independent Work</i>\n\nThe Creator of the cosmos. Made in Blender",
        url: "res/art/Matsterna.png"
    },
    {
        type: ItemType.Video,
        title: "Research In Progress",
        description: "<b>3d Digital Media</b>\nDecember 2021\n<i>Fruit Basket Games</i>\n\nRESEARCH 9.67% COMPLETE...",
        url: "res/art/Research.webm"
    },
    {
        type: ItemType.Image,
        title: "Science Fiction Fantasy Alliance",
        description: "<b>2d Digital Media</b>\nApril 2022\n<i>SFFA</i>\n\n I designed and organized a group of members of reddit to place this design on https://reddit.com/r/place, an art experiment in which each user could place one pixel on a grid every 5 minutes. our work turned out to be one of the largest there was!",
        url: "res/art/icon.png"
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
    },
    {
        type: ItemType.Image,
        title: "Propaganda Poster",
        description: "<b>2d Digital Media</b>\nJanuary 2022\n<i>Independent Work</i>\n\nMade as a joke, this poster was put up to parody election denial by comparing it to a student council election. The poster replicates cold-war fear designs with a stark red white black design.",
        url: "res/art/propaganda.webp"
    },
    {
        type: ItemType.Image,
        title: "Assorted Ghouls",
        description: "<b>3d Digital Media</b>\nSeptember 2021\n<i>Transcendent Games</i>\n\nAssorted ghosts and ghouls that roam the halls of a haunted mansion.",
        url: "res/art/theghostsarebackintown.webp"
    }
  
]
