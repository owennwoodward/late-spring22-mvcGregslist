import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";



class HousesService {
    createHouse(houseData) {
        console.log('house service', houseData);
        ProxyState.houses = [...ProxyState.cars, new House(houseData)]
        console.log(ProxyState.houses);
    }
}

export const HousesService = new HousesService()