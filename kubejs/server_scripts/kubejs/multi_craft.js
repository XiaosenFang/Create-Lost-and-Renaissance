//海草黏土
ServerEvents.recipes(function (event) {
    event.shapeless(
        Item.of('kubejs:kelp_clay', 2),
        [
            '2x minecraft:clay_ball',
            '2x minecraft:seagrass',
        ]
    )
    event.shapeless(
        Item.of('kubejs:kelp_clay', 2),
        [
            '2x minecraft:clay_ball',
            '2x minecraft:kelp',
        ]
    )
    event.recipes.create.mixing(
        Item.of('kubejs:kelp_clay'),
        [
            'minecraft:clay_ball',
            'minecraft:kelp'
        ]
    )
    event.recipes.create.mixing(
        Item.of('kubejs:kelp_clay'),
        [
            'minecraft:clay_ball',
            'minecraft:seagrass'
        ]
    )
})

//烈焰血
ServerEvents.recipes(function (event) {
    event.recipes.create.mixing(
        Fluid.of('kubejs:blazing_blood',360),
        [
            'quark:blaze_lantern',
        ]
    ).superheated()
    event.recipes.thermal.crucible(
        Fluid.of('kubejs:blazing_blood', 90), 
        'minecraft:blaze_rod'
    )
})