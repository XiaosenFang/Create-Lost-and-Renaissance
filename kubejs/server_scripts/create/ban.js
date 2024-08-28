ServerEvents.recipes(event => {
    //锌
    event.remove({ id: 'create_dd:pressing/zinc_sheet' })
    //黄铜零件
    event.remove({ id: 'create_dd:crafting/brass_hand' })
    //移动接口
    event.remove({ id: 'create:crafting/kinetics/portable_storage_interface' })
    event.remove({ id: 'create:crafting/kinetics/portable_fluid_interface' })
    //动态控制
    event.remove({ id: 'create:crafting/kinetics/contraption_controls' })
    //压路机
    event.remove({ id: 'create:crafting/kinetics/mechanical_rpller' })
    //琥珀金
    event.remove({ output: 'createaddition:electrum_ingot' })
    //钢
    event.remove({ output: 'create_dd:steel_ingot' })
    //磨制玫瑰石英
    event.remove({ id: 'create_dd:superheating/polished_rose_quartz' })
    //强力胶
    event.remove({ id: 'create:crafting/kinetics/super_glue' })
    //异彩化合物
    event.remove({ output: 'create:chromatic_compound' })
    //构件合成
    event.remove({ id: 'create_dd:crafting/gearbox_from_vertical_gearbox' })
    event.remove({ id: 'create_dd:crafting/vertical_gearbox_from_gearbox' })
    event.remove({ id: 'create_dd:crafting/adj_chain_gearshift' })
    event.remove({ id: 'create_dd:crafting/gearbox' })
    event.remove({ id: 'create_dd:crafting/vertical_gearbox' })
    event.remove({ id: 'create_dd:freezing/frozen_nugget' })
})