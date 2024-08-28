ServerEvents.recipes(event => {
    //集成电路
    event.remove({ output: 'create_dd:integrated_circuit' })
    event.recipes.create.sequenced_assembly([
        Item.of('create_dd:integrated_circuit')
    ],
        'create_dd:lapis_sheet',
        [
            event.recipes.createDeploying('create_dd:incomplete_integrated_circuit', ['create_dd:incomplete_integrated_circuit', 'ae2:printed_logic_processor']),
            event.recipes.createDeploying('create_dd:incomplete_integrated_circuit', ['create_dd:incomplete_integrated_circuit', 'minecraft:redstone']),
            event.recipes.createDeploying('create_dd:incomplete_integrated_circuit', ['create_dd:incomplete_integrated_circuit', 'kubejs:screwdriver'])
        ]).transitionalItem('create_dd:incomplete_integrated_circuit').loops(1)
    //精密构件
    event.recipes.create.sequenced_assembly([
        Item.of('create:precision_mechanism')
    ],
        'create_dd:inductive_mechanism',
        [
            event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create_dd:integrated_circuit']),
            event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'thermal:redstone_servo']),
            event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'kubejs:handsaw'])
        ]).transitionalItem('create:incomplete_precision_mechanism').loops(1)
    //坚固板
    event.replaceInput(
        { output: 'create:sturdy_sheet' },
        'create:powdered_obsidian',
        '#forge:dusts/obsidian'
    )
    //酷热构件
    event.remove({ output: 'create_dd:infernal_mechanism' })
    event.recipes.create.sequenced_assembly([
        Item.of('create_dd:infernal_mechanism')
    ],
        'create:precision_mechanism',
        [
            event.recipes.createDeploying('create_dd:incomplete_infernal_mechanism', ['create_dd:incomplete_infernal_mechanism', 'create:electron_tube']),
            event.recipes.createDeploying('create_dd:incomplete_infernal_mechanism', ['create_dd:incomplete_infernal_mechanism', 'create_dd:ember_alloy']),
            event.recipes.createFilling('create_dd:incomplete_infernal_mechanism', ['create_dd:incomplete_infernal_mechanism', Fluid.of('minecraft:lava', 250)]),
            event.recipes.createPressing('create_dd:incomplete_infernal_mechanism', ['create_dd:incomplete_infernal_mechanism'])
        ]).transitionalItem('create_dd:incomplete_infernal_mechanism').loops(1)
    //电容
    event.remove({ output: 'createaddition:capacitor' })
    event.recipes.create.sequenced_assembly([
        Item.of('createaddition:capacitor')
    ],
        'kubejs:tube_placode',
        [
            event.recipes.createDeploying('kubejs:tube_placode', ['kubejs:tube_placode', '#forge:plates/copper']),
            event.recipes.createDeploying('kubejs:tube_placode', ['kubejs:tube_placode', '#forge:plates/iron']),
            event.recipes.createDeploying('kubejs:tube_placode', ['kubejs:tube_placode', 'thermal:cured_rubber']),
            event.recipes.createDeploying('kubejs:tube_placode', ['kubejs:tube_placode', 'minecraft:redstone_torch'])
        ]).transitionalItem('kubejs:tube_placode').loops(1)
    //气密
    event.replaceInput(
        { output: 'create_dd:sealed_mechanism' },
        'create_dd:rubber',
        'thermal:rubber'
    )
    //智能
    event.recipes.create.sequenced_assembly([
        Item.of('create_dd:calculation_mechanism')
    ],
        'create_dd:infernal_mechanism',
        [
            event.recipes.createDeploying('create_dd:incomplete_calculation_mechanism', ['create_dd:incomplete_calculation_mechanism', 'ae2:calculation_processor']),
            event.recipes.createDeploying('create_dd:incomplete_calculation_mechanism', ['create_dd:incomplete_calculation_mechanism', 'mekanism:hdpe_sheet']),
            event.recipes.createFilling('create_dd:incomplete_calculation_mechanism', ['create_dd:incomplete_calculation_mechanism', Fluid.of('create_enchantment_industry:hyper_experience', 25)]),
            event.recipes.createPressing('create_dd:incomplete_calculation_mechanism', ['create_dd:incomplete_calculation_mechanism'])
        ]).transitionalItem('create_dd:incomplete_calculation_mechanism').loops(1)
    //热力
    event.recipes.create.sequenced_assembly([
        Item.of('create_sa:heat_engine')
    ],
        'create_dd:infernal_mechanism',
        [
            event.recipes.createDeploying('kubejs:incomplete_heat_engine', ['kubejs:incomplete_heat_engine', 'thermalendergy:vibrating_core']),
            event.recipes.createDeploying('kubejs:incomplete_heat_engine', ['kubejs:incomplete_heat_engine', 'extendedcrafting:luminessence']),
            event.recipes.createDeploying('kubejs:incomplete_heat_engine', ['kubejs:incomplete_heat_engine', 'thermal:tar']),
            event.recipes.createPressing('kubejs:incomplete_heat_engine', ['kubejs:incomplete_heat_engine'])
        ]).transitionalItem('kubejs:incomplete_heat_engine').loops(1)
    //深邃
    event.recipes.create.sequenced_assembly([
        Item.of('create_dd:abstruse_mechanism')
    ],
        'create_sa:heat_engine',
        [
            event.recipes.createDeploying('create_dd:incomplete_abstruse_mechanism', ['create_dd:incomplete_abstruse_mechanism', 'create_dd:polished_spectral_ruby']),
            event.recipes.createDeploying('create_dd:incomplete_abstruse_mechanism', ['create_dd:incomplete_abstruse_mechanism', 'ae2:fluix_pearl']),
            event.recipes.createPressing('create_dd:incomplete_abstruse_mechanism', ['create_dd:incomplete_abstruse_mechanism'])
        ]).transitionalItem('create_dd:incomplete_abstruse_mechanism').loops(1)
    //fallen
    event.remove({ output: 'create_dd:fallen_stargaze_singularity' })
    event.recipes.create.sequenced_assembly([
        Item.of('create_dd:fallen_stargaze_singularity')
    ],
        'create_dd:compound_base',
        [
            event.recipes.createDeploying('create_dd:compound_base', ['create_dd:compound_base', 'create_dd:refined_radiance']),
            event.recipes.createDeploying('create_dd:compound_base', ['create_dd:compound_base', 'create_dd:shadow_steel']),
            event.recipes.createDeploying('create_dd:compound_base', ['create_dd:compound_base', 'create_dd:blaze_gold']),
        ]).transitionalItem('create_dd:compound_base').loops(1)
    //集成
    event.recipes.create.sequenced_assembly([
        Item.of('create_dd:integrated_mechanism')
    ],
        'create_dd:calculation_mechanism',
        [
            event.recipes.createDeploying('create_dd:incomplete_integrated_mechanism', ['create_dd:incomplete_integrated_mechanism', 'create_connected:control_chip']),
            event.recipes.createDeploying('create_dd:incomplete_integrated_mechanism', ['create_dd:incomplete_integrated_mechanism', 'mekanism:ingot_refined_glowstone']),
            event.recipes.createDeploying('create_dd:incomplete_integrated_mechanism', ['create_dd:incomplete_integrated_mechanism', 'create_sa:fan_component']),
            event.recipes.createPressing('create_dd:incomplete_integrated_mechanism', ['create_dd:incomplete_integrated_mechanism'])
        ]).transitionalItem('create_dd:incomplete_integrated_mechanism').loops(1)
    //振动
    event.remove({ output: 'create_things_and_misc:vibration_mechanism' })
    event.recipes.create.sequenced_assembly([
        Item.of('create_things_and_misc:vibration_mechanism')
    ],
        'create_dd:abstruse_mechanism',
        [
            event.recipes.createDeploying('create_dd:abstruse_mechanism', ['create_dd:abstruse_mechanism', 'create_dd:integrated_mechanism']),
            event.recipes.createDeploying('create_dd:abstruse_mechanism', ['create_dd:abstruse_mechanism', 'mekanism:teleportation_core']),
            event.recipes.createDeploying('create_dd:abstruse_mechanism', ['create_dd:abstruse_mechanism', 'create_dd:mithril_ingot']),
            event.recipes.createDeploying('create_dd:abstruse_mechanism', ['create_dd:abstruse_mechanism', 'kubejs:screwdriver']),
            event.recipes.createPressing('create_dd:abstruse_mechanism', ['create_dd:abstruse_mechanism'])
        ]).transitionalItem('create_dd:abstruse_mechanism').loops(1)
})