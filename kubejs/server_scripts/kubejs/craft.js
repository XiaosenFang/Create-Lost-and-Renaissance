ServerEvents.recipes(event => {
    //锯子
    event.shaped(
        Item.of('kubejs:handsaw'),
        [
            " E ",
            'EAC',
            ' ED'
        ],
        {
            A: 'minecraft:iron_ingot',
            C: 'minecraft:stick',
            D: '#minecraft:planks',
            E: 'minecraft:iron_nugget'
        }
    )
    event.shaped(
        Item.of('kubejs:handsaw'),
        [
            "   ",
            'EA ',
            ' ED'
        ],
        {
            A: '#forge:plates/iron',
            D: '#minecraft:planks',
            E: 'minecraft:iron_nugget'
        }
    )
    function pack_craft(a, b, c) {
        event.shaped(
            Item.of(a),
            [
                [b, b, b],
                [b, c, b],
                [b, b, b]
            ]
        )
    }
    pack_craft('kubejs:abstruse_pack', 'create_dd:abstruse_mechanism', 'create_dd:shadow_steel_casing')
    pack_craft('kubejs:inductive_pack', 'create_dd:inductive_mechanism', 'create:andesite_casing')
    pack_craft('kubejs:sealed_pack', 'create_dd:sealed_mechanism', 'create:copper_casing')
    pack_craft('kubejs:steam_pack', 'create_sa:steam_engine', 'create_dd:zinc_casing')
    pack_craft('kubejs:precision_pack', 'create:precision_mechanism', 'create:brass_casing')
    pack_craft('kubejs:infernal_pack', 'create_dd:infernal_mechanism', 'create_dd:industrial_casing')
    pack_craft('kubejs:hydraulic_pack', 'create_sa:hydraulic_engine', 'create:railway_casing')
    pack_craft('kubejs:calculation_pack', 'create_dd:calculation_mechanism', 'create_dd:overburden_casing')
    pack_craft('kubejs:heat_pack', 'create_sa:heat_engine', 'create_dd:steel_casing')
    pack_craft('kubejs:integrated_pack', 'create_dd:integrated_mechanism', 'create_dd:hydraulic_casing')
    pack_craft('kubejs:vibration_pack', 'create_things_and_misc:vibration_mechanism', 'create_dd:infared_sand')
    //螺丝刀
    event.shaped(
        'kubejs:screwdriver',
        [
            [, , 'minecraft:iron_nugget'],
            [, 'minecraft:iron_ingot', ],
            ['#minecraft:planks', , ]
        ]
    )
    event.shaped(
        'kubejs:screwdriver',
        [
            [, 'createaddition:iron_rod'],
            ['#minecraft:planks', ,]
        ]
    )
})