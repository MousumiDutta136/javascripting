//JavaScript has two scopes: global and local. A variable that is declared
//outside a function definition is a global variable, and its value is
//accessible and modifiable throughout your program. A variable that is
//declared inside a function definition is local. It is created and
//destroyed every time the function is executed, and it cannot be accessed
//by any code outside the function.
//IIFE, Immediately Invoked Function Expression, is a common pattern for
//creating local scopes.
//the output is a: 1, b: 8, c: 6
const a = 1; const b = 2; const c = 3;

(function firstFunction () {
  const b = 5; const c = 6;
  
  (function secondFunction () {
    const b = 8;
    
    (function thirdFunction () {
      const a = 7; const c = 9;
      
      (function fourthFunction () {
        const a = 1; const c = 8
        
      })()
    })(console.log(`a: ${a}, b: ${b}, c: ${c}`))
  })()
})()
 

