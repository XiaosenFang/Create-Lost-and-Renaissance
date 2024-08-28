ServerEvents.recipes(event => {
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:purified_fluix_crystal')
    ], 
    'kubejs:crystal_seed_fluix', 
    [
        event.recipes.createFilling('kubejs:crystal_seed_fluix', ['kubejs:crystal_seed_fluix', Fluid.of('water',500)]),
    ]).transitionalItem('kubejs:crystal_seed_fluix').loops(12)
})