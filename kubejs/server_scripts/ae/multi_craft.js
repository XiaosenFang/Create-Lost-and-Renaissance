ServerEvents.recipes(event => {
    event.recipes.create.crushing('ae2:fluix_dust', 'kubejs:purified_fluix_crystal')
    event.recipes.thermal.pulverizer('ae2:fluix_dust', 'kubejs:purified_fluix_crystal')
    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": {
                "item": 'kubejs:purified_fluix_crystal'
            }
        },
        "output": {
            "item": "ae2:fluix_dust"
        }
    })
})