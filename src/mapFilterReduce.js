
let cart = [
    {id:1, productName: "Telefon1", quantity: 3, unitPrice: 1000},
    {id:2, productName: "Telefon2", quantity: 3, unitPrice: 2000},
    {id:3, productName: "Telefon3", quantity: 3, unitPrice: 3000},
    {id:4, productName: "Telefon4", quantity: 4, unitPrice: 4000},
    {id:5, productName: "Telefon5", quantity: 4, unitPrice: 5000},
    {id:6, productName: "Telefon6", quantity: 5, unitPrice: 6000},
    {id:7, productName: "Telefon7", quantity: 5, unitPrice: 7000}
]

console.log("<ul>")
cart.map(product =>{
    console.log("<li>" + 
    product.productName + " : " + 
    product.unitPrice*product.quantity + 
    "</li>")
})
console.log("</ul>")

let quantitiyFilter = cart.filter(product => product.quantity<4)
console.log(quantitiyFilter)

let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)
console.log(total)

function addToCart(sepet) {
    sepet.push({id:8, productName: "Telefon8", quantity: 6, unitPrice: 8000})
}

addToCart(cart)
console.log(cart)

let sayi = 10
function topla(number) {
    number += 1
}
topla(sayi)
//console.log(sayi) //10