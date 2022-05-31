import { generateId } from "../Utils/generateId.js"



export class House {
    constructor(houseData) {
        this.id = generateId()
        this.year = houseData.year
        this.bedrooms = houseData.bedrooms
        this.description = houseData.description
        this.bathrooms = houseData.bathrooms
        this.footage = houseData.footage
        this.imgUrl = houseData.imgUrl
        this.price = houseData.price
    }

    get Template() {
        return `
    <div class=" col-6 col-md-3">
    <div class="rounded shadow p-2">
      <img class="img-fluid" src="${this.imgUrl}" alt="">
      <h5 class="text-center">Bathrooms: ${this.bathrooms} | Bedrooms: ${this.bedrooms} | Built in: ${this.year}</h5>
      <h4 class="text-center">$${this.price}</h4>
      <h5 class="text-center"><p>This house is very ${this.description}</p></h5>
      <input class="w-100" type="color" value="${this.color}">
      <button class="btn btn-danger" onclick="app.housesController.deleteCar('${this.id}')"><i class="mdi mdi-delete"></i></button>
    </div>
  </div>
    `
    }
}