ServerEvents.recipes(event => {
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [{
            "fluid": "kubejs:orange_juice",
            "amount": 1000
        }, {
            "fluid": "minecraft:water",
            "amount": 1000
        }],
        "result": {
            "item": "kubejs:pentlandite"
        }
    })
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [{
            "fluid": "kubejs:tomato_sauce",
            "amount": 1000
        }, {
            "fluid": "minecraft:water",
            "amount": 1000
        }],
        "result": {
            "item": "kubejs:osmium_iridium_ore"
        }
    })
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [{
            "fluid": "kubejs:peach_oolong_tea",
            "amount": 1000
        }, {
            "fluid": "minecraft:water",
            "amount": 1000
        }],
        "result": {
            "item": "kubejs:galena"
        }
    })
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [{
            "fluid": "kubejs:bayberry_juice",
            "amount": 1000
        }, {
            "fluid": "minecraft:water",
            "amount": 1000
        }],
        "result": {
            "item": "kubejs:argentite"
        }
    })
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [{
            "fluid": "kubejs:lemon_black_tea",
            "amount": 1000
        }, {
            "fluid": "minecraft:water",
            "amount": 1000
        }],
        "result": {
            "item": "kubejs:autunite"
        }
    })
})