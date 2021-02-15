import fetch from 'node-fetch'

export async function getAll() {
    return fetch('http://localhost:3004/restaurants')
        .then(response => response.json()
        .then(function(data){
            let res = data.map(function(item,index){
                console.log(item);
            })
        }));
    
}