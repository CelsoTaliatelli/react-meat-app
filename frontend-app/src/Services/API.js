import axios from 'axios';

const restaurants = axios.create({
    baseURL: 'http://localhost:8000'
})

export function getAll(/*result*/){
    
    return restaurants.get('/restaurants')
}

export function getById(id){
    return restaurants.get('/restaurants',{ 
        params:
        {
            id:id
        } 
    })
}