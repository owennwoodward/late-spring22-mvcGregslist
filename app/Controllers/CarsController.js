import { ProxyState } from "../AppState.js";
import { getCarForm } from "../Components/CarForm.js";
import { carsService } from "../Services/CarsService.js";

function _drawCars(){
  let cars = ProxyState.cars
  let template = ''
  cars.forEach(c => {
    template += c.Template
    // console.log(template);
  })
  document.getElementById('listings').innerHTML = template
}

export class CarsController{
  constructor(){
    console.log('cars controller loaded', ProxyState.cars);
    ProxyState.on('cars', _drawCars)
    this.viewCars()
  }

  // NOTE view cars handles drawing the cars and injecting the new car form
  viewCars(){
    let form = getCarForm()
    // console.log(form);
    document.getElementById('form-body').innerHTML = form
    _drawCars()
  }


  createCar(){
    // NOTE prevent default keeps the form submit event from reloading the page
    window.event.preventDefault()
    let form = window.event.target
    console.log('form submitted', form);
    // NOTE controller will collect all the information from the form...
    // NOTE the red underlines between form and value are ok
    let carData = {
      make : form.make.value,
      model : form.model.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value,
      color : form.color.value
    }
    console.log('the new car',carData);
    // ... and pass it to the service
    carsService.createCar(carData)
    form.reset()
    // NOTE don't look at boostrap docs they give a way that doesn't work as good look at this
    // it's best to close the modal here once the method is complete, closing it with the button click will not work later when things get more complicated
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
  }

  deleteCar(id){
    console.log('deleting car', id);
    carsService.deleteCar(id)
  }
}