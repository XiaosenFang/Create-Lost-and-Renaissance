ServerEvents.recipes(event => {
    event.recipes.create.compacting(['2x minecraft:echo_shard','minecraft:sculk_vein'], ['minecraft:calibrated_sculk_sensor','minecraft:sculk',Fluid.of('thermal:ender',250)]).superheated()
})