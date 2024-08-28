ServerEvents.recipes(event => {
    //存储总线
    event.remove({ output: 'ae2:storage_bus' })
    event.smithing(
        'ae2:storage_bus',
        'kubejs:steam_pack',
        'minecraft:sticky_piston',
        'minecraft:piston'
    )
    //能源
    event.remove({ output: 'ae2:energy_acceptor' })
    event.smithing(
        'ae2:energy_acceptor',
        'kubejs:steam_pack',
        'ae2:vibration_chamber',
        'thermal:energy_cell_frame'
    )
    event.remove({ output: 'ae2:vibration_chamber' })
    event.smithing(
        'ae2:vibration_chamber',
        'kubejs:steam_pack',
        'minecraft:blast_furnace',
        'ae2:fluix_crystal'
    )
    //终端
    event.remove({ output: 'ae2:terminal' })
    event.smithing(
        'ae2:terminal',
        'kubejs:sealed_pack',
        'ae2:formation_core',
        'ae2:annihilation_core'
    )
    event.remove({ output: 'ae2:crafting_terminal' })
    event.smithing(
        'ae2:crafting_terminal',
        'kubejs:steam_pack',
        'ae2:terminal',
        'minecraft:crafting_table'
    )
})

//智能
ServerEvents.recipes(event => {
    function calculation_ae(a, b, c) {
        event.remove({ output: a })
        event.smithing(
            a,
            'kubejs:calculation_pack',
            b,
            c
        )
    }
    calculation_ae('ae2:spatial_pylon', 'ae2:quartz_vibrant_glass', 'ae2:fluix_crystal')
    calculation_ae('ae2:spatial_io_port', 'ae2:io_port', 'ae2:engineering_processor')
    calculation_ae('ae2:growth_accelerator', 'ae2:quartz_glass', 'ae2:fluix_block')
    calculation_ae('ae2:controller', 'ae2:smooth_sky_stone_block', 'ae2:engineering_processor')
    calculation_ae('ae2:drive', 'ae2:chest', 'ae2:engineering_processor')
    calculation_ae('ae2:chest', '#balm:wooden_chests', 'ae2:terminal')
    calculation_ae('ae2:io_port', 'ae2:drive', 'ae2:logic_processor')
    calculation_ae('ae2:crafting_unit', 'ae2:calculation_processor', 'ae2:logic_processor')
    calculation_ae('ae2:molecular_assembler', 'mekanism:formulaic_assemblicator', 'ae2:logic_processor')
    calculation_ae('ae2:pattern_encoding_terminal', 'thermal:machine_crafter', 'ae2:engineering_processor')
    calculation_ae('ae2:pattern_access_terminal', 'ae2:pattern_provider', 'ae2:engineering_processor')
    
    calculation_ae('appflux:flux_accessor', 'ae2:energy_acceptor', 'appflux:energy_processor')
    event.remove({ output: 'ae2:pattern_provider' })
    event.smithing(
        '2x ae2:pattern_provider',
        'kubejs:calculation_pack',
        'minecraft:hopper',
        'ae2:logic_processor'
    )
    event.remove({ output: 'ae2:export_bus' })
    event.smithing(
        '3x ae2:export_bus',
        'kubejs:calculation_pack',
        'ae2:formation_core',
        'minecraft:hopper'
    )
    event.remove({ output: 'ae2:import_bus' })
    event.smithing(
        '3x ae2:import_bus',
        'kubejs:calculation_pack',
        'ae2:annihilation_core',
        'minecraft:hopper'
    )
    event.remove({ output: 'ae2:interface' })
    event.smithing(
        '2x ae2:interface',
        'kubejs:calculation_pack',
        '#balm:wooden_chests',
        'ae2:logic_processor'
    )
    //成型破坏
    event.remove({ output: 'ae2:formation_plane' })
    event.smithing(
        'ae2:formation_plane',
        'kubejs:steam_pack',
        'ae2:formation_core', 
        'ae2:fluix_crystal'
    )
    event.remove({ output: 'ae2:annihilation_plane' })
    event.smithing(
        'ae2:annihilation_plane',
        'kubejs:steam_pack',
        'ae2:annihilation_core', 
        'ae2:fluix_crystal'
    )
})