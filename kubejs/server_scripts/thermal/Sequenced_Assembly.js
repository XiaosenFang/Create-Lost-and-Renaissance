ServerEvents.recipes(event => {
    event.remove({ output: 'thermal:beekeeper_fabric' })
    event.recipes.create.sequenced_assembly([
        Item.of('thermal:beekeeper_fabric')
    ], 
    'create:sail_frame', 
    [
        event.recipes.createDeploying('create:sail_frame', ['create:sail_frame', '#mekanism:colorable/wool']),
        event.recipes.createPressing('create:sail_frame', ['create:sail_frame']),
        event.recipes.createDeploying('create:sail_frame', ['create:sail_frame', 'minecraft:string']),
        event.recipes.createDeploying('create:sail_frame', ['create:sail_frame', '#balm:wooden_rods']).keepHeldItem(),
        event.recipes.createFilling('create:sail_frame', ['create:sail_frame', Fluid.of('water',250)]),
        event.recipes.createPressing('create:sail_frame', ['create:sail_frame']),
    ]).transitionalItem('create:sail_frame').loops(1)
    //vibrating_core
    event.remove({ output: 'thermalendergy:vibrating_core' })
    event.recipes.create.sequenced_assembly([
        Item.of('thermalendergy:vibrating_core')
    ], 
    'minecraft:echo_shard', 
    [
        event.recipes.createDeploying('minecraft:echo_shard', ['minecraft:echo_shard', 'thermal:hazmat_fabric']),
        event.recipes.createDeploying('minecraft:echo_shard', ['minecraft:echo_shard', 'thermal:lumium_ingot']),
        event.recipes.createFilling('minecraft:echo_shard', ['minecraft:echo_shard', Fluid.of('thermal:glowstone',250)]),
    ]).transitionalItem('minecraft:echo_shard').loops(1)
    //流明
})