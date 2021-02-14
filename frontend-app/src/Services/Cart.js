export function addCart() {
    let products = [];
    products.push({productId:1,description:'Meu Produto',Quantity:1})
    localStorage.setItem('products',JSON.stringify(products));
    console.log(products)
}