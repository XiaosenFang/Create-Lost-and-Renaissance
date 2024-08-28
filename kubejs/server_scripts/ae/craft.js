ServerEvents.recipes(event => {
    //石英玻璃
    event.shaped(
        Item.of('ae2:quartz_glass',4),
        [
            "ABA",
            'BAB',
            'ABA'
        ],
        {
            A: '#forge:dusts/quartz',
            B: '#forge:glass',
        }
    )
    //无线接收器
    event.replaceInput(
        {  },
        'ae2:fluix_pearl',
        'ae2:fluix_block'
    )
    //样板
    event.remove({output:'ae2:blank_pattern'})
    event.shaped(
        Item.of('ae2:blank_pattern',2),
        [
            "ACA",
            'BDB',
            'EEE'
        ],
        {
            A: 'ae2:quartz_glass',
            B: 'thermal:beekeeper_fabric',
            C:'kubejs:ldpe',
            D:'#forge:gems/certus_quartz',
            E:"minecraft:iron_ingot"
        }
    )
})