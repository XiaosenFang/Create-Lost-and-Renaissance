const $EventBuses = Java.loadClass("dev.architectury.platform.forge.EventBuses")
const $GasDeferredRegister = Java.loadClass("mekanism.common.registration.impl.GasDeferredRegister")
const GASES = new $GasDeferredRegister("kubejs")

//注册气体 (id, 颜色)
GASES.register("fluorescein", 0x49c2ea)
GASES.register("flux_gas", 0x8255e5)

GASES.register($EventBuses.getModEventBus("kubejs").get())