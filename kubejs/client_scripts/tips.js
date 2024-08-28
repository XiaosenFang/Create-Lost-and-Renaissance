ItemEvents.tooltip(event => {
    // Add tooltip to all of these items
    event.add(['kubejs:crystal_seed_fluix'], Text.translatable('kubejs.lang.crystal_seed_fluix').red())
    event.add(['minecraft:enchanted_book'], Text.translatable('kubejs.lang.enchanted_book').blue())
})