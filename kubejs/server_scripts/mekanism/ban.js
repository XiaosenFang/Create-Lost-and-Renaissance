ServerEvents.recipes(event => {
    //岩浆发电
    event.remove({ output: 'mekanismgenerators:heat_generator' })
    //盐水
    event.remove({ id: 'mekanism:oxidizing/brine' })
})