ServerEvents.recipes(event => {
    //传送带
    event.remove({ output: 'create:belt_connector' })
    event.shaped(
        Item.of('create:belt_connector', 2),
        [
            "ABA",
            'ABA'
        ],
        {
            B: 'thermal:rubber',
            A: 'minecraft:dried_kelp'
        }
    )
    //蒸汽引擎
    event.remove({ output: 'create_sa:steam_engine' })
    event.shaped(
        Item.of('create_sa:steam_engine'),
        [
            " A ",
            'BCB',
            ' A '
        ],
        {
            A: 'create:brass_sheet',
            B: '#forge:plates/copper',
            C:'create:precision_mechanism'
        }
    )
    //液压构件
    event.remove({ output: 'create_sa:hydraulic_engine' })
    event.shaped(
        Item.of('create_sa:hydraulic_engine'),
        [
            [ ,'createaddition:capacitor', ],
            ['createdieselgenerators:engine_piston','create:precision_mechanism','createdieselgenerators:engine_piston'],
            [ ,'createaddition:capacitor', ]
        ],
    )
})