//安山
ServerEvents.recipes(event => {
    //石磨
    event.remove({ output: 'create:millstone' })
    event.smithing(
        'create:millstone',
        'kubejs:inductive_pack',
        'minecraft:polished_diorite',
        'create:cogwheel'
    )
    //辊压机
    event.remove({ output: 'create:mechanical_press' })
    event.smithing(
        'create:mechanical_press',
        'kubejs:inductive_pack',
        'minecraft:iron_block',
        'create:piston_extension_pole'
    )
    //搅拌器
    event.remove({ output: 'create:mechanical_mixer' })
    event.smithing(
        'create:mechanical_mixer',
        'kubejs:inductive_pack',
        'create:whisk',
        'create:cogwheel'
    )
    //活塞
    event.remove({ output: 'create:mechanical_piston' })
    event.smithing(
        'create:mechanical_piston',
        'kubejs:inductive_pack',
        'create:linear_chassis',
        'create:piston_extension_pole'
    )
    //起重机
    event.remove({ output: 'create:gantry_carriage' })
    event.smithing(
        'create:gantry_carriage',
        'kubejs:inductive_pack',
        '#minecraft:wooden_slabs',
        'create:cogwheel'
    )
    //风车轴承
    event.remove({ output: 'create:windmill_bearing' })
    event.smithing(
        'create:windmill_bearing',
        'kubejs:inductive_pack',
        '#minecraft:wooden_slabs',
        'create:shaft'
    )
    //动力轴承
    event.remove({ output: 'create:mechanical_bearing' })
    event.smithing(
        'create:mechanical_bearing',
        'kubejs:inductive_pack',
        '#minecraft:wooden_slabs',
        'create:turntable'
    )
    //绳索滑轮
    event.remove({ output: 'create:rope_pulley' })
    event.smithing(
        'create:rope_pulley',
        'kubejs:inductive_pack',
        '#forge:plates/iron',
        'farmersdelight:rope'
    )
    //钻头
    event.remove({ output: 'create:mechanical_drill' })
    event.smithing(
        'create:mechanical_drill',
        'kubejs:inductive_pack',
        'thermal:drill_head',
        'create_dd:andesite_sheet'
    )
    //机械手
    event.remove({ output: 'create:deployer' })
    event.smithing(
        'create:deployer',
        'kubejs:inductive_pack',
        'create:brass_hand',
        'create:piston_extension_pole'
    )
    //收割机
    event.remove({ output: 'create:mechanical_harvester' })
    event.smithing(
        'create:mechanical_harvester',
        'kubejs:inductive_pack',
        'create:metal_bracket',
        'create:andesite_alloy'
    )
    //动力犁
    event.remove({ output: 'create:mechanical_plough' })
    event.smithing(
        'create:mechanical_plough',
        'kubejs:inductive_pack',
        'create:metal_bracket',
        'create_dd:andesite_sheet'
    )
    //切片机
    event.remove({ output: 'sliceanddice:slicer' })
    event.smithing(
        'sliceanddice:slicer',
        'kubejs:inductive_pack',
        'create:cogwheel',
        'farmersdelight:iron_knife'
    )
    //动力锯
    event.remove({ output: 'create:mechanical_saw' })
    event.smithing(
        'create:mechanical_saw',
        'kubejs:inductive_pack',
        'thermal:saw_blade',
        'minecraft:iron_ingot'
    )
    //鼓风机
    event.remove({ output: 'create:encased_fan' })
    event.smithing(
        'create:encased_fan',
        'kubejs:inductive_pack',
        'create:propeller',
        'create:shaft'
    )
    //造石机
    event.remove({ output: 'create_mechanical_extruder:mechanical_extruder' })
    event.smithing(
        'create_mechanical_extruder:mechanical_extruder',
        'kubejs:inductive_pack',
        'minecraft:piston',
        'create:piston_extension_pole'
    )
})

//铜
ServerEvents.recipes(event => {
    //滑轮
    event.remove({ output: 'create:hose_pulley' })
    event.smithing(
        'create:hose_pulley',
        'kubejs:sealed_pack',
        '#forge:plates/copper',
        'minecraft:dried_kelp'
    )
    //分液池
    event.remove({ output: 'create:item_drain' })
    event.smithing(
        'create:item_drain',
        'kubejs:sealed_pack',
        'create:fluid_tank',
        'minecraft:iron_bars'
    )
    //注液器
    event.remove({ output: 'create:spout' })
    event.smithing(
        'create:spout',
        'kubejs:sealed_pack',
        'create:fluid_tank',
        'minecraft:dried_kelp'
    )
    //打印机
    event.remove({ output: 'create_enchantment_industry:printer' })
    event.smithing(
        'create_enchantment_industry:printer',
        'kubejs:sealed_pack',
        '#forge:plates/iron',
        'minecraft:dried_kelp'
    )
    //单元
    event.remove({ output: 'thermal:energy_cell' })
    event.smithing(
        'thermal:energy_cell',
        'kubejs:sealed_pack',
        'thermal:energy_cell_frame',
        'thermal:rf_coil'
    )
    event.remove({ output: 'thermal:fluid_cell' })
    event.smithing(
        'thermal:fluid_cell',
        'kubejs:sealed_pack',
        'thermal:fluid_cell_frame',
        'create:fluid_tank'
    )
    //储罐
    event.remove({ output: 'mekanism:basic_fluid_tank' })
    event.smithing(
        'mekanism:basic_fluid_tank',
        'kubejs:sealed_pack',
        'ae2:quartz_glass',
        'create:fluid_tank'
    )
})

//黄铜
ServerEvents.recipes(event => {
    //蓄电池
    event.remove({ output: 'createaddition:modular_accumulator' })
    event.smithing(
        'createaddition:modular_accumulator',
        'kubejs:precision_pack',
        'create:brass_casing',
        'createaddition:capacitor'
    )
    //显示连接器
    event.remove({ output: 'create:display_link' })
    event.smithing(
        'create:display_link',
        'kubejs:precision_pack',
        '#forge:plates/copper',
        'minecraft:redstone_torch'
    )
    //发条轴承
    event.remove({ output: 'create:clockwork_bearing' })
    event.smithing(
        'create:clockwork_bearing',
        'kubejs:precision_pack',
        '#minecraft:wooden_slabs',
        'create:electron_tube'
    )
    //动力臂
    event.remove({ output: 'create:mechanical_arm' })
    event.smithing(
        'create:mechanical_arm',
        'kubejs:precision_pack',
        'create:brass_sheet',
        'create_dd:andesite_sheet'
    )
    //升降机滑轮
    event.remove({ output: 'create:elevator_pulley' })
    event.smithing(
        'create:elevator_pulley',
        'kubejs:precision_pack',
        '#forge:plates/iron',
        'farmersdelight:rope'
    )
    //智能侦测器
    event.remove({ output: 'create:content_observer' })
    event.smithing(
        'create:content_observer',
        'kubejs:precision_pack',
        'minecraft:observer',
        '#forge:plates/brass'
    )
    //转速控制器
    event.remove({ output: 'create:rotation_speed_controller' })
    event.smithing(
        'create:rotation_speed_controller',
        'kubejs:precision_pack',
        'create:large_cogwheel',
        'create:cogwheel'
    )
    //动力合成器
    event.remove({ output: 'create:mechanical_crafter' })
    event.smithing(
        '3x create:mechanical_crafter',
        'kubejs:precision_pack',
        'minecraft:crafting_table',
        'create:cogwheel'
    )
    //可编程齿轮箱
    event.remove({ output: 'create:sequenced_gearshift' })
    event.smithing(
        'create:sequenced_gearshift',
        'kubejs:precision_pack',
        'minecraft:comparator',
        'create:cogwheel'
    )
    //存量转性器
    event.remove({ output: 'create:stockpile_switch' })
    event.smithing(
        'create:stockpile_switch',
        'kubejs:precision_pack',
        'minecraft:comparator',
        'minecraft:redstone_torch'
    )
    //card
    event.remove({ output: 'create_things_and_misc:card_press' })
    event.smithing(
        'create_things_and_misc:card_press',
        'kubejs:precision_pack',
        'create:mechanical_press',
        'create:brass_sheet'
    )
})

//动力、列车
ServerEvents.recipes(event => {
    //燃油
    event.remove({ output: 'createdieselgenerators:diesel_engine' })
    event.smithing(
        'createdieselgenerators:diesel_engine',
        'kubejs:steam_pack',
        'create:brass_block',
        'minecraft:flint_and_steel'
    )
    //模块化
    event.remove({ output: 'createdieselgenerators:large_diesel_engine' })
    event.smithing(
        'createdieselgenerators:large_diesel_engine',
        'kubejs:steam_pack',
        'createdieselgenerators:diesel_engine',
        'create:brass_block'
    )
    //motor
    event.remove({ output: 'create_dd:accelerator_motor' })
    event.smithing(
        'create_dd:accelerator_motor',
        'kubejs:steam_pack',
        'create:rotation_speed_controller',
        'create:shaft'
    )
    //飞轮
    event.remove({ output: 'create_dd:furnace_engine' })
    event.smithing(
        '2x create_dd:furnace_engine',
        'kubejs:steam_pack',
        '#forge:storage_blocks/bronze',
        'farmersdelight:stove'
    )
    event.remove({ output: 'create_dd:flywheel' })
    event.smithing(
        'create_dd:flywheel',
        'kubejs:steam_pack',
        'create:flywheel',
        '#forge:ingots/lead'
    )
    //轧机
    event.remove({ output: 'createaddition:rolling_mill' })
    event.smithing(
        'createaddition:rolling_mill',
        'kubejs:steam_pack',
        'create:metal_bracket',
        'create:shaft'
    )
    //青铜东西
    event.remove({ output: 'create_dd:bronze_saw' })
    event.smithing(
        'create_dd:bronze_saw',
        'kubejs:steam_pack',
        'create:mechanical_saw',
        '#forge:plates/bronze'
    )
    event.remove({ output: 'create_dd:bronze_drill' })
    event.smithing(
        'create_dd:bronze_drill',
        'kubejs:steam_pack',
        'create:mechanical_drill',
        '#forge:plates/bronze'
    )
})

//液压
ServerEvents.recipes(event => {
    //引擎
    event.remove({ output: 'create:steam_engine' })
    event.smithing(
        'create:steam_engine',
        'kubejs:hydraulic_pack',
        'minecraft:copper_block',
        'create:andesite_alloy'
    )
    //液压机
    event.remove({ output: 'create_dd:hydraulic_press' })
    event.smithing(
        'create_dd:hydraulic_press',
        'kubejs:hydraulic_pack',
        'create_dd:hydraulic_casing',
        '#forge:storage_blocks/bronze'
    )
})