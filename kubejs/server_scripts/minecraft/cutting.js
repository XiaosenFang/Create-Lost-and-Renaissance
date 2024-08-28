ServerEvents.recipes(event => {
    //线
    event.recipes.create.cutting(['minecraft:string',Item.of('minecraft:string').withChance(0.5)], 'thermal:flax')
})