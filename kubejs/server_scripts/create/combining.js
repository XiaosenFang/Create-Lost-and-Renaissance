ServerEvents.recipes(function (event) {
    event.custom({
        "type": "mekanism:combining",
        "extra_input": {
            "count": 1,
            "tag": "forge:circuits/ultimate"
        },
        "main_input": {
            "count": 1,
            "tag": "kubejs:colorless_control_chip"
        },
        "output": {
            "count": 1,
            "id": "create_connected:control_chip"
        }
    })
})//