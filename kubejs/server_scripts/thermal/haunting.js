ServerEvents.recipes(event => {
    event.recipes.create.haunting([Item.of('thermal:apatite').withChance(0.75)], 'minecraft:prismarine_shard')
    event.recipes.create.haunting([Item.of('thermal:cinnabar')], 'create:rose_quartz')
    event.recipes.create.haunting([Item.of('thermal:niter').withChance(0.85)], 'ae2:charged_certus_quartz_crystal')
})