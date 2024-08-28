ServerEvents.recipes(event => {
    event.remove({ output: 'kubejs:colorless_control_chip' })
    event.recipes.create.filling(
        'kubejs:colorless_control_chip',
        [Fluid.of('mekanism:brine', 85), 'ae2:logic_processor']
    )
})