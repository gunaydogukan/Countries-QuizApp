import { api } from '../config';

export class CountryService{

    async getCountry(){
        const response = await fetch(api);
        return await response.json();
    }
}