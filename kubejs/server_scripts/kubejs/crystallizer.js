ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:crystallizing",
        "chemicalType": "gas",
        "input": {
          "amount": 50,
          "gas": "mekanism:ethene"
        },
        "output": {
          "item": "kubejs:ldpe"
        }
      })
})
