ServerEvents.recipes(event => {
    event.remove({ output: 'thermal:rubber' })
    event.recipes.create.compacting('thermal:rubber', [Fluid.of('thermal:latex', 150)])
})