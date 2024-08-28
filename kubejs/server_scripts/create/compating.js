ServerEvents.recipes(event => {
    //工业铁
    event.remove({ id: 'create_dd:compacting/industrial_iron_ingot' })
    event.recipes.create.compacting('create_dd:industrial_iron_ingot', ['2x minecraft:iron_ingot','minecraft:coal']).heated()
    //生物质
    event.remove({ id: 'createaddition:compacting/biomass_pellet' })
    event.recipes.create.compacting(['4x createaddition:biomass_pellet',Fluid.of('minecraft:water',10),Fluid.of('create_dd:sap',40)], ['4x createaddition:biomass','create_dd:raw_rubber'])
})