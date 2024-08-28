ServerEvents.recipes(event => {
    //收容罐
    event.remove({output:'ars_nouveau:mob_jar'})
    event.shaped(
        Item.of('ars_nouveau:mob_jar',),
        [
            "AAA",
            'BDB',
            'CBC'
        ],
        {
            A: 'ars_nouveau:archwood_slab',
            B: '#forge:glass',
            C:'#thermal:glass/hardened',
            D:'thermal:jar'
        }
    )
})