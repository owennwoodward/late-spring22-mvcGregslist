import { ProxyState } from "../AppState.js";
import { getCarForm } from "../Components/CarForm.js";
import { carsService } from "../Services/CarsService.js";

function _drawCars() {
  let cars = ProxyState.cars
  let template = ''
  cars.forEach(c => {
    template += c.Template
  })
  document.getElementById('listings').innerHTML = template
}

export class CarsController {
  constructor() {
    // console.log('cars controller loaded', ProxyState.cars);
    ProxyState.on('cars', _drawCars)
    this.getCars()
    this.viewCars()
  }

  // NOTE view cars handles drawing the cars and injecting the new car form
  viewCars() {
    let form = getCarForm()
    document.getElementById('form-body').innerHTML = form
    _drawCars()
  }

  async getCars() {
    await carsService.getCars()
  }


  async createCar() {
    // NOTE prevent default keeps the form submit event from reloading the page
    window.event.preventDefault()
    let form = window.event.target
    console.log('form submitted', form);
    let carData = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value,
      color: form.color.value
    }
    console.log('the new car', carData);
    carsService.createCar(carData)
    form.reset()
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
  }

  async updateCar(id) {
    window.event.preventDefault()
    console.log('updating car', id);
    let form = window.event.target
    let carData = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value,
      color: form.color.value
    }
    await carsService.updateCar(carData, id)
  }

  openEditForm(id) {
    let car = ProxyState.cars.find(c => c.id == id)
    console.log('editing', car);
    let updateForm = getCarForm(car)
    document.getElementById('form-body').innerHTML = updateForm
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).show()
  }

  deleteCar(id) {
    console.log('deleting car', id);
    carsService.deleteCar(id)
  }
}