//物流
ServerEvents.recipes(event => {
    function inductive_thermal(a, b,c) {
        event.remove({ output: a })
        event.smithing(
            a,
            'kubejs:inductive_pack',
            b,
            c,
        )
    }

    inductive_thermal('thermal:device_rock_gen','thermal:redstone_servo','minecraft:piston')
})

//酷热
ServerEvents.recipes(event => {
    function infernal_thermal(a, b,c) {
        event.remove({ output: a })
        event.smithing(
            a,
            'kubejs:infernal_pack',
            b,
            c,
        )
    }

    infernal_thermal('thermal:machine_furnace','thermal:machine_frame','minecraft:bricks')
    infernal_thermal('thermal:machine_sawmill','thermal:machine_frame','thermal:saw_blade')
    infernal_thermal('thermal:machine_smelter','thermal:machine_frame','minecraft:blast_furnace')
    infernal_thermal('thermal:machine_insolator','thermal:machine_frame','minecraft:dirt')
    infernal_thermal('thermal:machine_press','thermal:machine_frame','create:mechanical_press')
    infernal_thermal('thermal:machine_crucible','thermal:machine_frame','minecraft:nether_bricks')
    infernal_thermal('thermal:machine_chiller','thermal:machine_frame','minecraft:packed_ice')
    infernal_thermal('thermal:machine_pyrolyzer','thermal:machine_frame','minecraft:blaze_rod')
    infernal_thermal('thermal:machine_bottler','thermal:machine_frame','minecraft:bucket')
    infernal_thermal('thermal:machine_brewer','thermal:machine_frame','minecraft:brewing_stand')
    infernal_thermal('thermal:machine_crafter','thermal:machine_frame','minecraft:crafting_table')
    infernal_thermal('thermal:machine_refinery','thermal:machine_frame','create:mechanical_mixer')
})

//液压
ServerEvents.recipes(event => {
    function hydraulic_thermal(a, b, c, d) {
        event.remove({ output: d })
        event.smithing(
            a,
            'kubejs:hydraulic_pack',
            b,
            c
        )
    }
    hydraulic_thermal('2x thermal:turbo_servo_attachment', '#forge:ingots/invar', 'thermal:redstone_servo','thermal:turbo_servo_attachment')
    hydraulic_thermal('2x thermal:servo_attachment', '#forge:ingots/iron', 'thermal:redstone_servo','thermal:servo_attachment')
    hydraulic_thermal('tiab:time_in_a_bottle', 'minecraft:glass_bottle', 'minecraft:clock','tiab:time_in_a_bottle')
})

//热力
ServerEvents.recipes(event => {
    function heat_thermal(a, b, c) {
        event.remove({ output: a })
        event.smithing(
            a,
            'kubejs:heat_pack',
            b,
            c
        )
    }
    heat_thermal('thermal:device_collector', 'thermal:redstone_servo', 'minecraft:ender_pearl')
    heat_thermal('thermal:machine_crystallizer', 'thermal:machine_frame', 'ae2:certus_quartz_crystal')
    heat_thermal('thermal:machine_centrifuge', 'thermal:machine_frame', 'create:whisk')
    heat_thermal('thermal:machine_pulverizer', 'thermal:machine_frame', 'create:millstone')
    heat_thermal('functionalstorage:storage_controller', 'create:stockpile_switch', '#functionalstorage:drawer')
    heat_thermal('enderstorage:ender_chest', 'minecraft:ender_chest', '#forge:chests/wooden')
    heat_thermal('enderstorage:ender_tank', 'minecraft:ender_chest', 'create:fluid_tank')
    heat_thermal('cookingforblockheads:sink', 'minecraft:terracotta', 'minecraft:water_bucket')
    heat_thermal('createendertransmission:fluid_transmitter', 'minecraft:ender_chest', 'create:mechanical_pump')
    heat_thermal('createendertransmission:item_transmitter', 'minecraft:ender_chest', 'create:chute')
    heat_thermal('createendertransmission:energy_transmitter', 'minecraft:ender_chest', 'create:shaft')
})

//深邃
ServerEvents.recipes(event => {
    function abstruse_thermal(a, b, c) {
        event.remove({ output: a })
        event.smithing(
            a,
            'kubejs:abstruse_pack',
            b,
            c
        )
    }
    abstruse_thermal('ae2:quantum_link', 'ae2:quartz_glass', 'ae2:fluix_block')
    abstruse_thermal('expatternprovider:wireless_connect', 'ae2:quantum_link', 'ae2:wireless_receiver')
    event.remove({ id: 'fluxnetworks:fluxpoint' })
    event.smithing(
        'fluxnetworks:flux_point',
        'kubejs:abstruse_pack',
        'fluxnetworks:flux_block',
        'minecraft:redstone_block'
    )
    event.remove({ id: 'fluxnetworks:fluxplug' })
    event.smithing(
        'fluxnetworks:flux_plug',
        'kubejs:abstruse_pack',
        'fluxnetworks:flux_block',
        'fluxnetworks:flux_dust'
    )
    event.remove({ output: 'ae2:quantum_ring' })
    event.smithing(
        '8x ae2:quantum_ring',
        'kubejs:abstruse_pack',
        'ae2:energy_cell',
        'ae2:engineering_processor'
    )
})