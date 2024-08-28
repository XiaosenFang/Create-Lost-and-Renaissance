ServerEvents.recipes(event => {
    //聚合器
    event.remove({ output: 'ae2:condenser' })
    event.remove({ id: 'create_sa:quartz_gem_crushing' })
})