ServerEvents.recipes(event => {
    event.remove({ output: 'create:white_sail' })
    event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "item": "create:sail_frame"
          },
          {
            "tag": "minecraft:wool"
          }
        ],
        "results": [
          {
            "item": "create:white_sail"
          }
        ]
      })
})