ServerEvents.recipes(event => {
    //余烬合金
    event.remove({ output: 'ae2:fluix_pearl' })
    event.recipes.create.filling(
        'ae2:fluix_pearl',
        [Fluid.of('kubejs:flux_gas', 450), 'torchmaster:frozen_pearl']
    )
})