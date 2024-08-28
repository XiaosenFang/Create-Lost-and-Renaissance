ServerEvents.recipes(event => {
    event.replaceInput(
        { output: 'torchmaster:megatorch' },
        'minecraft:torch',
        'aether:ambrosium_torch'
    )
    event.replaceInput(
        { output: 'torchmaster:feral_flare_lantern' },
        'minecraft:glowstone_dust',
        'aether:golden_amber'
    )
    event.remove({ output: 'torchmaster:frozen_pearl' })
    event.recipes.create.mixing(
        ['torchmaster:frozen_pearl'], 
        ['4x minecraft:packed_ice',Fluid.of('thermal_extra:refined_sunflower_oil',100),'ae2:quantum_entangled_singularity']
    )
})