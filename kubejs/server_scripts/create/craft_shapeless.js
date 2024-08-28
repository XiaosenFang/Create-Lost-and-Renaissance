ServerEvents.recipes(event => {
    event.remove({ output: 'create:encased_chain_drive' })
    event.shapeless(
        Item.of('create:encased_chain_drive', 2),
        [
            'create:andesite_casing',
            '3x minecraft:iron_nugget',
        ]
    )
    //风帆
    event.remove({ output: 'create:sail_frame' })
    event.shapeless(
        Item.of('create:sail_frame'),
        [
            Item.of('kubejs:handsaw'),
            '#minecraft:wooden_slabs',
        ]
    ).damageIngredient({item:Item.of('kubejs:handsaw')},2)
})