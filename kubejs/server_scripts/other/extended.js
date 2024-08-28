ServerEvents.recipes(event => {
    //流明
    event.remove({ id: 'extendedcrafting:luminessence' })
    event.recipes.thermal.chiller('extendedcrafting:luminessence', Fluid.of('mekanismgenerators:bioethanol',30)) 
    //末影锭
    event.remove({ id: 'extendedcrafting:ender_ingot' })
    event.recipes.thermal.smelter('extendedcrafting:ender_ingot', ['thermal:enderium_ingot','2x minecraft:ender_eye','mekanism:ingot_uranium']) 
})