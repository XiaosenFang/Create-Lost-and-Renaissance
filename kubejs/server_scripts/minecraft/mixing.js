ServerEvents.recipes(event => {
    //卷须
    event.recipes.create.mixing(
        'apotheosis:warden_tendril', 
        ['2x #quark:shards','minecraft:echo_shard','minecraft:sculk_vein']
    ).superheated()
})