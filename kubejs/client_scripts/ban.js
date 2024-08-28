ItemEvents.tooltip(event => {
    // Add tooltip to all of these items
    event.add(['mekanismgenerators:heat_generator', 'ae2:condenser', 'thermal:dynamo_magmatic', 'easy_villagers:auto_trader', 'create_dd:steel_ingot', 'create_dd:steel_ingot','functionalstorage:collector_upgrade'], Text.translatable('kubejs.lang.ban').red())
})