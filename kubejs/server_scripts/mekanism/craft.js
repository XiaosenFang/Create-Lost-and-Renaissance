ServerEvents.recipes(event => {
    //hdpe
    event.shaped(
        Item.of('mekanism:hdpe_sheet'),
        [
            "AAA",
            'A A',
            'AAA'
        ],
        {
            A: 'mekanism:hdpe_pellet',
        }
    )
    //电解核心
    event.remove({ output: 'mekanism:electrolytic_core' })
    event.shaped(
        Item.of('mekanism:electrolytic_core'),
        [
            "ABA",
            'CDC',
            ' D '
        ],
        {
            A: 'createaddition:copper_wire',
            B: 'mekanism:ingot_osmium',
            C:'createaddition:gold_rod',
            D:'#railways:internal/plates/iron_plates'
        }
    )
    //青金石粉
    event.replaceInput(
        { output: 'mekanismgenerators:solar_panel' },
        'minecraft:redstone',
        '#forge:dusts/lapis'
    )
    //太阳能板
    event.replaceInput(
        { output: 'mekanismgenerators:solar_panel' },
        'mekanism:ingot_osmium',
        'kubejs:ldpe'
    )
    //配置器
    event.shaped(
        Item.of('mekanism:configurator'),
        [
            " A ",
            'BCB',
            ' D '
        ],
        {
            A: 'minecraft:lapis_lazuli',
            B: 'extendedcrafting:redstone_ingot',
            C:'thermal:rf_potato',
            D:'#forge:rods/wooden'
        }
    )
})