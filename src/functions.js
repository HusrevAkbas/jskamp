function addToCart(productName="kampanyalı ürün", quantity=1) {
    console.log("Sepete ekle: " + quantity+ " adet " + productName)
}
addToCart(10)
addToCart("armut")
addToCart("simit",5)

let sayHallo = () => {
    console.log("hallo Welt")
}
sayHallo()

let products = [{pname: "p1", pprice:1, pq:1}, {pname:"p2", pprice:2,pq:2}]

function addToCart4(products) {
    console.log(products)
}

addToCart4(products)

function add(...numbers) {
    let total = 0 
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]     
    }
        console.log(total)   
}
add(10,20,30,40)

let newName, newPrice, newQuantity;
({proName: newName, proPrice: newPrice, proQuantity: newQuantity } 
= {proName: "ürün", proPrice: "preis", proQuantity: "wie viel"})
console.log(newPrice)

let text1 = {title:"başlık",metin:"paragraf"}

function yaz({title,metin}){
    console.log("<h1>" + title + "</h1>")
    console.log("<p>" + metin + "</p>")
}
yaz(text1);