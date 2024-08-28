ServerEvents.recipes(event => {
    //毒害隔离
    event.remove({ output: 'thermal:hazmat_fabric' })
    event.recipes.create.filling('thermal:hazmat_fabric', [Fluid.of('thermal:redstone',300),"thermal:beekeeper_fabric",])
    //沥青砂
    event.remove({ output: 'thermal:oil_sand' })
    event.recipes.create.filling('thermal:oil_sand', [Fluid.of('createdieselgenerators:crude_oil',250),"minecraft:sand",])
    event.recipes.create.filling('thermal:oil_red_sand', [Fluid.of('createdieselgenerators:crude_oil',250),"minecraft:red_sand",])
})