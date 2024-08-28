ServerEvents.recipes(event => {
  //电子管
  event.remove({ output: 'create:electron_tube' })
  event.recipes.create.deploying(
    'create:electron_tube',
    ['create:polished_rose_quartz', 'kubejs:tube_placode']
  )
  //水车
  event.remove({ output: 'create:water_wheel' })
  event.recipes.create.deploying(['create:water_wheel'], ['create:large_cogwheel', '#minecraft:planks'])
  //infared
  event.replaceInput(
    { output: 'create_dd:infared_sand' },
    'minecraft:red_sand',
    'create_dd:overcharged_casing'
  )
  event.recipes.create.deploying(['create_connected:control_chip'], ['kubejs:colorless_control_chip', 'mekanism:ultimate_control_circuit'])
  //蛋糕
  event.remove({ output: 'create:blaze_cake_base' })
  event.recipes.create.deploying(['create:blaze_cake_base'], ['farmersdelight:cake_slice','create:cinder_flour', ])
})