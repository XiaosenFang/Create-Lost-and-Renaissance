ServerEvents.recipes(event => {
    //物质球
    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
            " A A ",
            "ABCBA",
            " CCC ",
            "ABCBA",
            " A A "
        ],
        "key": {
            "A": {
                "item": "minecraft:snowball"
            },
            "B": {
                "item": "minecraft:slime_ball"
            },
            "C": {
                "item": "minecraft:clay_ball"
            }
        },
        "result": {
            "item": "ae2:matter_ball"
        },
        "acceptMirrored": true
    })
    //奇点
    event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 50000,
        "inputCount": 16,
        "ingredient": {
            "item": "ae2:matter_ball"
        },
        "catalyst": {
            "item": "minecraft:crying_obsidian"
        },
        "result": {
            "item": "ae2:singularity"
        }
    })
})