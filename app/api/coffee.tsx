import { AppConstants } from '../constants/app-constants';

export const CoffeeApi = {
    /*Function that helps to fetch location detail using latitude and longitude of the location */
    fetchCoffeeDetails: (payload) => {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=coffee`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            if (res.status != AppConstants.SUCCESS_STATUS_CODE) {
                return res.status
            }
            else return res.json();
        }).catch((error) => {
            console.error('error', error);
        })
    },
};