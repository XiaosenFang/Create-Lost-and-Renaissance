ServerEvents.recipes(function (event) {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "  ABBBA  ",
          " C     C ",
          "A  DED  A",
          "B DDFDD B",
          "B EFGFE B",
          "B DDFDD B",
          "B  DED  B",
          "B       B",
          "HHHHHHHHH"
        ],
        "key": {
          "A": {
            "item": "ae2:quartz_glass"
          },
          "B": {
            "item": "minecraft:redstone_block"
          },
          "C": {
            "item": "ae2:quartz_vibrant_glass"
          },
          "D": {
            "item": "ae2:cell_component_256k"
          },
          "E": {
            "item": "ae2:certus_quartz_crystal"
          },
          "F": {
            "item": "mekanism:pellet_antimatter"
          },
          "G": {
            "item": "mekanism:qio_drive_supermassive"
          },
          "H": {
            "item": "minecraft:iron_block"
          }
        },
        "result": {
          "item": "ae2:creative_item_cell"
        }
      })
    //蛋糕
    event.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 2048,
        "ingredient": {
          "item": "create:blaze_cake"
        },
        "catalyst": {
          "item": "mekanism:pellet_antimatter"
        },
        "result": {
          "item": "create:creative_blaze_cake"
        }
      })
})