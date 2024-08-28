ServerEvents.recipes(event => {
  event.recipes.create.compacting(Fluid.of('kubejs:orange_juice', 125), ['minecraft:sugar', '2x fruitsdelight:orange', Fluid.of('minecraft:water', 125)])
})