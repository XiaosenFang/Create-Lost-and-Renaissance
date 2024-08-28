ServerEvents.recipes(event => {
  event.remove({ output: 'createdieselgenerators:engine_piston' })
    event.recipes.create.mechanical_crafting('2x createdieselgenerators:engine_piston', [
        ' AB',
        ' CA',
        'D  ',
      ], {
        A: 'thermal:steel_plate',
        B:'create:andesite_alloy',
        C:'createaddition:iron_rod',
        D:'#forge:nuggets/zinc'
      })
})