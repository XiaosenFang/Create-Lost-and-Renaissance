ServerEvents.recipes(event => {
    event.recipes.create.haunting([Item.of('minecraft:diamond').withChance(0.73)], 'minecraft:coal_block')
    event.recipes.create.haunting([Item.of('minecraft:netherite_scrap').withChance(0.16)], 'create:bar_of_chocolate')
    event.recipes.create.haunting([Item.of('minecraft:lapis_lazuli',2),Item.of('minecraft:lapis_lazuli').withChance(0.17)], 'thermal:gunpowder_mushroom_spores')
    event.recipes.create.haunting([Item.of('minecraft:quartz')], 'ae2:certus_quartz_crystal')
})