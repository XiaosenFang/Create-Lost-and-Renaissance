ServerEvents.recipes(event => {
    event.replaceInput(
        { output: 'minecraft:stonecutter' },
        'minecraft:iron_ingot',
        'thermal:saw_blade'
    )
    //下界之星
    event.recipes.create.mechanical_crafting(
        Item.of('minecraft:nether_star'),
        [
            "AAA",
            'BBB',
            ' B '
        ],
        {
            A: 'minecraft:wither_skeleton_skull',
            B:'#minecraft:soul_fire_base_blocks'
        }
    )
})