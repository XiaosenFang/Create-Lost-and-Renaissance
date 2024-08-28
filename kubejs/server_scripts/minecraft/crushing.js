ServerEvents.recipes(event => {
    //青金石
    event.recipes.create.crushing('minecraft:lapis_lazuli', 'create_dd:potassic_asphalt_block')
    //火药
    event.recipes.create.crushing(Item.of('minecraft:gunpowder').withChance(0.75), 'minecraft:flint')
    event.recipes.create.milling(Item.of('minecraft:gunpowder').withChance(0.7), 'minecraft:flint')
})