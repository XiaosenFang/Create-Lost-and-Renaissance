ServerEvents.recipes(event => {
    function thermal_mixing(a,b){
        event.recipes.create.mixing(a, b).heated()
    }
    thermal_mixing ('4x thermal:bronze_ingot',['#forge:ingots/tin','3x #forge:ingots/copper'])
    thermal_mixing ('2x thermal:electrum_ingot',['#forge:ingots/silver','#forge:ingots/gold'])
    thermal_mixing ('3x thermal:invar_ingot',['#forge:ingots/nickel','2x #forge:ingots/iron'])
    thermal_mixing ('2x thermal:constantan_ingot',['#forge:ingots/nickel','#forge:ingots/copper'])
    thermal_mixing ('2x thermal:rose_gold_ingot',['#forge:ingots/gold','#forge:ingots/copper'])
})

ServerEvents.recipes(event => {
    //不稳红石
    event.remove({ output: Fluid.of('thermal:redstone') })
    event.recipes.create.mixing(
        [Fluid.of('thermal:redstone',150),'appflux:redstone_crystal'], 
        ['appflux:charged_redstone',Fluid.of('minecraft:water',150),'mekanism:enriched_redstone']
    )
})