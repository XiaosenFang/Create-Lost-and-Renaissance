//安山合金
ServerEvents.recipes(function (event) {
    event.remove({ output: 'create:andesite_alloy', not: { id: 'create:crafting/materials/andesite_alloy_from_block' } })
    event.shaped(
        Item.of('create:andesite_alloy', 2),
        [
            "AB",
            'BA'
        ],
        {
            A: 'kubejs:kelp_brick',
            B: 'minecraft:andesite'
        }
    )
    event.shaped(
        Item.of('create:andesite_alloy', 2),
        [
            "AB",
            'BA'
        ],
        {
            B: 'kubejs:kelp_brick',
            A: 'minecraft:andesite'
        }
    )
    event.recipes.create.mixing('2x create:andesite_alloy', ['kubejs:kelp_brick', 'minecraft:andesite'])
    event.recipes.thermal.smelter('2x create:andesite_alloy', ['kubejs:kelp_brick', 'minecraft:andesite'])
})

//物流构件
ServerEvents.recipes(event => {
    event.remove({ output: 'create_dd:inductive_mechanism' })
    event.shapeless(
        Item.of('create_dd:inductive_mechanism'),
        [
            'create:andesite_alloy',
            'create:cogwheel',
            'kubejs:handsaw',
            '#forge:ingots/zinc'
        ]
    ).damageIngredient({item:'kubejs:handsaw'},1)
    event.recipes.create.sequenced_assembly([
        Item.of('create_dd:inductive_mechanism')
    ], 
    '#forge:plates/zinc', 
    [
        event.recipes.createDeploying('create_dd:incomplete_inductive_mechanism', ['create_dd:incomplete_inductive_mechanism', 'create:cogwheel']),
        event.recipes.createDeploying('create_dd:incomplete_inductive_mechanism', ['create_dd:incomplete_inductive_mechanism', 'create:cogwheel']),
        event.recipes.createDeploying('create_dd:incomplete_inductive_mechanism', ['create_dd:incomplete_inductive_mechanism', 'kubejs:handsaw'])
    ]).transitionalItem('create_dd:incomplete_inductive_mechanism').loops(1)
})