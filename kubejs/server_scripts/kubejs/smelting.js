ServerEvents.recipes(function (event) {
  event.smelting(
    Item.of('kubejs:kelp_brick'),
    [
      'kubejs:kelp_clay',
    ]
  )
})