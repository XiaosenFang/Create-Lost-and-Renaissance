ServerEvents.recipes(event => {
    //玫瑰石英
    event.remove({ output: 'create:rose_quartz' })
    event.recipes.create.mixing(
        'create:rose_quartz', 
        ['#ae2:all_quartz',Fluid.of('thermal:redstone',150),]
    )
    //生物质
    event.remove({ output: 'createaddition:biomass' })
    event.recipes.create.mixing(
        '2x createaddition:biomass', 
        ['#forge:crops','2x #kubejs:bio_fuel',]
    )
    //经验
    event.remove({ id: 'create_enchantment_industry:mixing/hyper_experience' })
    event.recipes.create.mixing(
        Fluid.of('create_enchantment_industry:hyper_experience',15), 
        [Fluid.of('kubejs:enchanting_fluid',50),Fluid.of('kubejs:glow_ink',125)]
    )
    //光灵红宝石
    event.remove({ output: 'create_dd:spectral_ruby' })
    event.recipes.create.mixing(
        'create_dd:spectral_ruby', 
        ['extendedcrafting:ender_ingot','2x create_dd:refined_radiance','minecraft:amethyst_cluster']
    )
    //shimmer
    event.remove({ output: 'create_dd:shimmer_bucket' })
    event.remove({ id: 'create_dd:freezing/frozen_nugger' })
    event.recipes.create.mixing(
        Fluid.of('create_dd:shimmer',25), 
        [Fluid.of('create_dd:hot_chocolate',50),Fluid.of('create_dd:chromatic_waste',100)]
    )
    //秘银
    event.remove({ output: 'create_dd:mithril_ingot' })
    event.recipes.create.mixing(
        'create_dd:mithril_ingot', 
        [Fluid.of('create_dd:glowberry_milkshake',500),'2x create:experience_nugget','create_dd:fallen_stargaze_singularity','create_dd:frozen_nugget']
    ).superheated()
        //rubber
    event.remove({ output: 'create_dd:raw_rubber' })
    event.recipes.create.mixing(
        'create_dd:raw_rubber', 
        [Fluid.of('create_dd:sap',125)]
    )
})