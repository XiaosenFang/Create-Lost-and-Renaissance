ServerEvents.recipes(event => {
  event.recipes.create.mixing(Fluid.of('kubejs:lemon_black_tea', 125), ['2x #minecraft:leaves', 'minecraft:sugar', 'fruitsdelight:lemon_slice', Fluid.of('minecraft:water', 125)]).heated()
  event.recipes.create.mixing(Fluid.of('kubejs:peach_oolong_tea', 125), ['2x #minecraft:leaves', 'mekanism:salt', 'fruitsdelight:peach', Fluid.of('minecraft:water', 125)]).heated()
  event.recipes.create.mixing(Fluid.of('kubejs:bayberry_juice', 125), ['fruitsdelight:lemon', 'fruitsdelight:blueberry', 'fruitsdelight:peach', Fluid.of('minecraft:water', 125)]).heated()
  event.recipes.create.mixing(Fluid.of('kubejs:carrot_bisque', 125), ['3x minecraft:carrot', 'mekanism:salt', Fluid.of('minecraft:water', 125)]).heated()
  event.recipes.create.mixing([Fluid.of('kubejs:tomato_sauce', 125), 'minecraft:bowl'], ['2x farmersdelight:tomato_sauce', 'mekanism:salt', 'minecraft:sugar', Fluid.of('minecraft:water', 25)]).heated()
  event.recipes.create.mixing([Fluid.of('kubejs:glow_ink', 250)], ["minecraft:glow_ink_sac", Fluid.of("create_enchantment_industry:ink", 250)])
  event.recipes.create.mixing([Fluid.of('kubejs:flux_gas', 300)], ["#kubejs:fluix_crystal", Fluid.of("thermal:refined_fuel", 150),Fluid.of("minecraft:water", 150)]).superheated()
})