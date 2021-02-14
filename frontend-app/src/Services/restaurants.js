import fetch from 'node-fetch'

export function getAll() {
    const host = fetch('http:://localhost:3000/restaurants')
        .then(response => response.json());
    console.log(host);
}