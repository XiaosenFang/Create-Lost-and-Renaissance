//安山
ServerEvents.recipes(event => {
    //漏斗
    event.remove({ output: 'create:andesite_funnel' })
    event.shapeless('2x create:andesite_funnel', ['create_dd:inductive_mechanism','minecraft:dried_kelp'])
    //隧道
    event.remove({ output: 'create:andesite_tunnel' })
    event.shapeless('create:andesite_tunnel', ['create:andesite_funnel','create:andesite_casing'])
})

//黄铜
ServerEvents.recipes(event => {
    //漏斗
    event.remove({ output: 'create:brass_funnel' })
    event.shapeless('create:brass_funnel', ['create:precision_mechanism','create:andesite_funnel'])
    //隧道
    event.remove({ output: 'create:brass_tunnel' })
    event.shapeless('create:brass_tunnel', ['create:precision_mechanism','create:andesite_tunnel'])
    //溜槽
    event.remove({ output: 'create:smart_chute' })
    event.shapeless('create:smart_chute', ['create:precision_mechanism','create:chute'])
    //无线红石
    event.remove({ output: 'create:redstone_link' })
    event.stonecutting('4x create:redstone_link', 'kubejs:precision_pack')
})