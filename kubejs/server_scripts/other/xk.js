ServerEvents.recipes(event => {
    event.remove({ output: 'xkdeco:wooden_windmill',type:'minecraft:stonecutting' })
    event.shaped(
        Item.of('xkdeco:wooden_windmill'),
        [
            " B ",
            'BAB',
            ' B '
        ],
        {
            A: 'create:shaft',
            B:'create:white_sail'
        }
    )
})