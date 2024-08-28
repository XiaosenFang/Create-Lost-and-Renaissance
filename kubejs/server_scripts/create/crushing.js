ServerEvents.recipes(event => {
    //矿
    event.recipes.create.crushing([Item.of('create:crushed_raw_silver').withChance(0.3),Item.of('thermal:silver_nugget').withChance(0.3)],'kubejs:argentite')
    event.recipes.create.crushing([Item.of('create:crushed_raw_nickel').withChance(0.3),Item.of('thermal:nickel_nugget').withChance(0.3)],'kubejs:pentlandite')
    event.recipes.create.crushing([Item.of('create:crushed_raw_lead').withChance(0.3),Item.of('thermal:lead_nugget').withChance(0.3)],'kubejs:galena')
    event.recipes.create.crushing([Item.of('create:crushed_raw_uranium').withChance(0.3),Item.of('mekanism:nugget_uranium').withChance(0.3)],'kubejs:autunite')
    event.recipes.create.crushing([Item.of('create:crushed_raw_osmium').withChance(0.3),Item.of('mekanism:nugget_osmium').withChance(0.3)],'kubejs:osmium_iridium_ore')
    event.recipes.create.crushing('mekanism:sawdust','#minecraft:logs')
})