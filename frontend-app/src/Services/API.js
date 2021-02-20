import axios from 'axios';

const restaurants = axios.create({
    baseURL: 'http://localhost:3004'
})

export function getAll(/*result*/){
    
    return restaurants.get('/restaurants')
}