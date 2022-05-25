import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";


class CarsService {
  createCar(carData) {
    console.log('arrived at service un-damaged', carData);
    ProxyState.cars = [...ProxyState.cars, new Car(carData)]
    console.log(ProxyState.cars);
  }
  deleteCar(id) {
    // console.log('arrived in service', id);
    // NOTE find is cool but not necessary here
    // let car = ProxyState.cars.find(c => c.id == id)
    // console.log('car found',car);
    // NOTE filter creates a copy of the cars array but only includes cars that don't have the id selected
    // effectively removing the one we selected from the array AND triggering our listener with =
    ProxyState.cars = ProxyState.cars.filter(c => c.id != id)
    ProxyState.cars = ProxyState.cars
  }

}

export const carsService = new CarsService()