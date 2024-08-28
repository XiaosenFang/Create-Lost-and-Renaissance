//酷热
ServerEvents.recipes(event => {
    function infernal_mekanism(a, b, c) {
        event.remove({ output: a })
        event.smithing(
            a,
            'kubejs:infernal_pack',
            b,
            c
        )
    }
    infernal_mekanism('mekanism:pressurized_reaction_chamber', 'mekanism:dynamic_tank', 'mekanism:basic_chemical_tank')
    infernal_mekanism('mekanism:rotary_condensentrator', 'mekanism:basic_fluid_tank', 'mekanism:basic_chemical_tank')
    infernal_mekanism('mekanism:electrolytic_separator', 'mekanism:electrolytic_core', 'mekanism:basic_chemical_tank')
    infernal_mekanism('mekanism:chemical_crystallizer', 'mekanism:steel_casing', 'mekanism:fluorite_gem')
    infernal_mekanism('mekanism:osmium_compressor', 'mekanism:steel_casing', 'minecraft:bucket')
    infernal_mekanism('mekanism:isotopic_centrifuge', '#forge:storage_blocks/lead', 'mekanism:basic_chemical_tank')
})

//液压
ServerEvents.recipes(event => {
    function hydraulic_mekanism(a, b, c, d) {
        event.remove({ output: d })
        event.smithing(
            a,
            'kubejs:hydraulic_pack',
            b,
            c
        )
    }
    hydraulic_mekanism('12x mekanism:basic_mechanical_pipe', '#forge:ingots/steel', 'minecraft:bucket','mekanism:basic_mechanical_pipe')
    hydraulic_mekanism('12x mekanism:basic_pressurized_tube', '#forge:ingots/steel', '#forge:glass','mekanism:basic_pressurized_tube')
    hydraulic_mekanism('12x mekanism:basic_logistical_transporter', '#forge:ingots/steel', 'minecraft:dropper','mekanism:basic_logistical_transporter')
    hydraulic_mekanism('12x mekanism:restrictive_transporter', '#forge:ingots/steel', 'minecraft:iron_bars','mekanism:restrictive_transporter')
    hydraulic_mekanism('12x mekanism:diversion_transporter', '#forge:ingots/steel', 'mekanism:basic_control_circuit','mekanism:diversion_transporter')
    hydraulic_mekanism('mekanism:logistical_sorter', 'mekanism:steel_casing', 'minecraft:piston','mekanism:logistical_sorter')
    hydraulic_mekanism('16x mekanism:basic_universal_cable', '#forge:ingots/steel', 'minecraft:redstone','mekanism:basic_universal_cable')
    hydraulic_mekanism('12x mekanism:basic_thermodynamic_conductor', '#forge:ingots/steel', 'minecraft:copper_ingot','mekanism:basic_thermodynamic_conductor')
})

//智能
ServerEvents.recipes(event => {
    function calculation_mekanism(a, b, c) {
        event.remove({ output: a })
        event.smithing(
            a,
            'kubejs:calculation_pack',
            b,
            c
        )
    }
    calculation_mekanism('mekanism:enrichment_chamber', 'mekanism:steel_casing', 'mekanism:basic_control_circuit')
    calculation_mekanism('mekanism:combiner', 'mekanism:steel_casing', 'mekanism:elite_control_circuit')
    calculation_mekanism('mekanism:crusher', 'mekanism:steel_casing', 'create:crushing_wheel')
    calculation_mekanism('mekanism:metallurgic_infuser', 'mekanism:steel_casing', 'minecraft:furnace')
    calculation_mekanism('mekanism:purification_chamber', 'mekanism:steel_casing', 'mekanism:advanced_control_circuit')
    calculation_mekanism('mekanism:energized_smelter', 'mekanism:steel_casing', 'minecraft:blast_furnace')
    calculation_mekanism('mekanism:electric_pump', 'mekanism:steel_casing', 'minecraft:bucket')
    calculation_mekanism('mekanism:chemical_infuser', 'mekanism:steel_casing', 'mekanism:basic_chemical_tank')
    calculation_mekanism('mekanism:chemical_oxidizer', 'mekanism:steel_casing', '#mekanism:personal_storage')
    calculation_mekanism('mekanism:chemical_injection_chamber', 'mekanism:steel_casing', 'create:spout')
    calculation_mekanism('mekanism:precision_sawmill', 'mekanism:steel_casing', 'create:mechanical_saw')
    calculation_mekanism('mekanism:chemical_dissolution_chamber', 'mekanism:steel_casing', 'mekanism:ultimate_control_circuit')
    calculation_mekanism('mekanism:chemical_washer', 'mekanism:steel_casing', 'mekanism:basic_fluid_tank')
    calculation_mekanism('mekanism:nutritional_liquifier', 'mekanism:steel_casing', 'minecraft:bowl')
    calculation_mekanism('mekanism:resistive_heater', 'mekanism:steel_casing', 'mekanism:energy_tablet')
    calculation_mekanism('mekanism:thermal_evaporation_controller', 'mekanism:thermal_evaporation_block', '#forge:glass_panes')
})

//集成
ServerEvents.recipes(event => {
    function integrated_mekanism(a, b, c) {
        event.remove({ output: a })
        event.smithing(
            a,
            'kubejs:integrated_pack',
            b,
            c
        )
    }
    integrated_mekanism('mekanismgenerators:fusion_reactor_controller', 'mekanismgenerators:fusion_reactor_frame', '#forge:glass_panes')
    integrated_mekanism('mekanismgenerators:control_rod_assembly', '#forge:storage_blocks/lead', 'mekanism:elite_control_circuit')
    integrated_mekanism('mekanismgenerators:fission_reactor_port', 'mekanismgenerators:fission_reactor_casing', 'mekanism:elite_control_circuit')
    integrated_mekanism('mekanismgenerators:rotational_complex', 'mekanismgenerators:turbine_casing', 'create:rotation_speed_controller')
    integrated_mekanism('mekanism:laser', 'mekanism:steel_casing', 'mekanism:alloy_reinforced')
    integrated_mekanism('mekanism:solar_neutron_activator', 'mekanism:steel_casing', 'mekanismgenerators:advanced_solar_generator')
})

//振动
ServerEvents.recipes(event => {
    function vibration_mekanism(a, b, c) {
        event.remove({ output: a })
        event.smithing(
            a,
            'kubejs:vibration_pack',
            b,
            c
        )
    }
    vibration_mekanism('mekanism:supercharged_coil', 'mekanism:laser', 'mekanism:ultimate_control_circuit')
    vibration_mekanism('mekanism:sps_port', 'mekanism:sps_casing', 'mekanism:ultimate_control_circuit')
})