ServerEvents.recipes(event => {
    //余烬合金
    event.remove({ output: 'create_dd:ember_alloy' })
    event.recipes.create.filling(
        'create_dd:ember_alloy',
        [Fluid.of('kubejs:blazing_blood', 90), 'create_dd:industrial_iron_ingot']
    )
})