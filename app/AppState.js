import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Car').Car[]} */
  cars = []

  houses = [
    new House({ color: 'White', year: 1999, bedrooms: 3, bathrooms: 3, footage: 2500, price: 200000, description: 'Ugly and Stinky', imgUrl: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/dcf8df73-db1e-408d-8e20-3da3731a35ca-2000s-exterior-Redfin.jpg' }),
    new House({ color: 'White and Brown', year: 2020, bedrooms: 6, bathrooms: 9, footage: 8000, price: 500000, description: 'Stinky and Ugly', imgUrl: ' https://businessrecord.imgus11.com/public//14e9ef7e2e74cdf168c1dce946a649ad.jpg?r=1310804486' })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
