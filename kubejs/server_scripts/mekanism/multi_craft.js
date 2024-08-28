ServerEvents.recipes(event => {
    //富集红石
    event.recipes.create.pressing(['mekanism:enriched_redstone'], 'thermal:redstone_mushroom_spores')
    //生物燃料
    event.remove({ output: 'mekanism:bio_fuel' })
    event.recipes.create.crushing(['2x mekanism:bio_fuel'], 'createaddition:biomass_pellet')
    event.recipes.thermal.pulverizer(['2x mekanism:bio_fuel'], 'createaddition:biomass_pellet')
    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": {
                "item": 'createaddition:biomass_pellet'
            }
        },
        "output": {
            "item": "mekanism:bio_fuel",
            "count":2
        }
    })
})