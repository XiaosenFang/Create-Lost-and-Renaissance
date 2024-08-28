ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:calibrated_sculk_sensor' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:amethyst_shard','minecraft:amethyst_shard','minecraft:amethyst_shard'],
        'minecraft:sculk_sensor',
        'minecraft:calibrated_sculk_sensor'
    )
})