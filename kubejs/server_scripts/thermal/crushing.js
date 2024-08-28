ServerEvents.recipes(event => {
    //矿
    event.recipes.create.crushing([Item.of('thermal_extra:soul_sand_dust')],'minecraft:soul_sand')
    event.recipes.create.crushing([Item.of('thermal:quartz_dust')],'minecraft:quartz')
    event.recipes.create.milling([Item.of('thermal:quartz_dust')],'minecraft:quartz')
})