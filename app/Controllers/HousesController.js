import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
// import { getHouseForm } from "../Components/HouseForm.js";




export class HousesController {
  constructor() {
    // ProxyState.on('houses', _drawHouses)
  }

  _drawHouses() {
    // get all the houses and build a template
    let houses = ProxyState.houses
    let template = ''
    houses.forEach(h => {
      template += h.Template
    })

    document.getElementById('listings').innerHTML = template
  }


  viewHouses() {
    let form = getHouseForm()
    console.log(form);
    document.getElementById('house-body').innerHTML = form
    _drawHouses()
  }

  // createHouse() {
  //   window.event.preventDefault()
  //   let form = window.event.target
  //   console.log('house submitted', form);
  // }

}