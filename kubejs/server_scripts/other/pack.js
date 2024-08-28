ServerEvents.recipes(event => {
    function calculation_pack(a, b) {
        event.remove({ output: a })
        event.smithing(
            a,
            'kubejs:calculation_pack',
            b,
            'packagedauto:me_package_component'
        )
    }
    calculation_pack('packagedauto:packager', 'minecraft:piston')
    calculation_pack('packagedauto:packager_extension', 'packagedauto:packager')
    calculation_pack('packagedauto:unpackager', 'minecraft:hopper')
    calculation_pack('packagedauto:distributor', 'packagedauto:distributor_marker')
    calculation_pack('packagedauto:crafter', 'mekanism:formulaic_assemblicator')
    calculation_pack('packagedauto:fluid_package_filler', 'minecraft:bucket')
})

ServerEvents.recipes(event => {
    event.remove({ output: 'packagedauto:encoder' })
    event.smithing(
        'packagedauto:encoder',
        'kubejs:calculation_pack',
        'thermal:machine_crafter',
        'packagedauto:me_package_component'
    )
    event.replaceInput(
        { output: 'packagedauto:recipe_holder' },
        'minecraft:glowstone',
        'ae2:blank_pattern'
    )
})