function isPrime(number) {
    if(number<2) return false
    else if(number==2) return true
    else {
        for(let i=2;i<number;i++){
            if(number%i == 0) return false
        }
        return true
    }
}

function checkPrime(...numbers) {
    console.log(numbers.length)
    for(let i=0;i<numbers.length;i++){
        if(isPrime(numbers[i])){
            console.log(numbers[i] + " sayısı asaldır")
        } else {
            console.log(numbers[i] + " sayısı asal değildir")            
        }
    }
}
//checkPrime(23,22,21,503,7,99)

function isFriend(a, b) {
    let sumA = 0
    let sumB = 0
    for(let i=1;i<a;i++){
        if(a%i == 0) sumA +=i
    }
    for(let i=1;i<b;i++){
        if(b%i == 0) sumB +=i        
    }
    if(sumA == b & sumB == a) {
        console.log(a +" ve " +b +" sayıları arkadaştır")
    } else {
        console.log(a +" ve " +b +" sayıları arkadaş değildir")        
    }
}
//isFriend(17296 ,18415)

function perfectNumbers(num = 1000) {
    for(let i=2; i<num;i++){ 
        let sum = 0       
        for(let j=1; j<i;j++){
            if(i%j == 0) sum+=j
        }
        //console.log(sum,i)
        if(sum == i){
            console.log(i + " mükemmel bir sayıdır")
        } 
    }
}
//perfectNumbers()

function checkPrimeToTousend(){
    for(let i=0;i<1000;i++){
        if(isPrime(i)) console.log(i + " sayısı asaldır")
    }
}
//checkPrimeToTousend()