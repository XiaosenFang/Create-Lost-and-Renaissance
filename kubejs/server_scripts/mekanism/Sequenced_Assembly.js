ServerEvents.recipes(event => {
    event.remove({output:'mekanism:teleportation_core'})
    event.recipes.create.sequenced_assembly([
        Item.of('mekanism:teleportation_core')
    ], 
    'waystones:warp_stone', 
    [
        event.recipes.createDeploying('waystones:warp_stone', ['waystones:warp_stone', 'mekanism:pellet_plutonium']),
        event.recipes.createDeploying('waystones:warp_stone', ['waystones:warp_stone', 'mekanism:pellet_polonium']),
        event.recipes.createDeploying('waystones:warp_stone', ['waystones:warp_stone', 'minecraft:nether_star']),
    ]).transitionalItem('waystones:warp_stone').loops(1)
})