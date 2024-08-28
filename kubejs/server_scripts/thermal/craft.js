ServerEvents.recipes(event => {
    //管道
    event.replaceInput(
        { output: 'thermal:energy_duct' },
        '#forge:ingots/lead',
        '#forge:ingots/steel'
    )
    event.replaceInput(
        { output: 'thermal:fluid_duct' },
        '#forge:ingots/lead',
        '#forge:ingots/steel'
    )
    event.remove({ output: 'thermal:fluid_duct_windowed' })
    event.shaped(
        Item.of('thermal:fluid_duct_windowed',8),
        [
            "AAA",
            'ABA',
            'AAA'
        ],
        {
            A: 'thermal:fluid_duct',
            B: '#thermal:glass/hardened'
        }
    )
})