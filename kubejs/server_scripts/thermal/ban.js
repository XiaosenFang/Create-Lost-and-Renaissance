ServerEvents.recipes(event => {
    //岩浆发电
    event.remove({ output: 'thermal:dynamo_magmatic' })
    //硫化橡胶
    event.remove({ id: 'thermal:smelting/cured_rubber_from_smelting' })
})