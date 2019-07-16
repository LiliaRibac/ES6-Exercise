let getCountdownIterator =  function*(){ // Your code comes here

 for (let i = 10; i > 1; yield --i){{

 }}
} 
console.log([...getCountdownIterator()])
 
let myNumber = function *(){
    let num = 10
    while(num > 1){
        yield --num
    }
}
console.log([...myNumber()])