let errorDemo = function *() {
    yield 1;
    throw 'Error yielding the next result';
    yield 2;
}
 
let it = errorDemo();

console.log( it.next() );
// Object {value: 1, done: false}
 
console.log( it.next() );
// Uncaught Error yielding the next result
 
console.log( [...errorDemo()] );
//Uncaught Error yielding the next result
 
for ( let element of errorDemo() ) {
    console.log( element );
}
// Object {value: 1, done: false}
//Uncaught Error yielding the next result