"use strict";



// HOME TASK 1.

// let array = [65,34,88,91,75,20];
// let result = array.filter(item => item % 5 === 0);
// console.log(result);



// Another version

// let array = [65,34,88,91,75,20];
// let array2 = [];

// function filter()
// {
//     for(let i=0; i<array.length; i++)
//     {
//         if(array[i] % 5  === 0)
//         {
//             array2.push(array[i]);
            
//         }
//     }
//     return array2;
// }

// console.log(filter());



// HOME TASK 2.

// let array = [65,34,88,91,75,20];
// let result = array.map(item => item * 2);
// console.log(result);



// Another version

// let array = [65,34,88,91,75,20];
// let array2 = [];

// function map()
// {
//     for(let i=0; i<array.length; i++)
//     {
//         array2.push(array[i] * 2);
//     }
//     return array2;
// }

// console.log(map());



// HOME TASK 3.

// let array = [65,34,88,91,75,20];
// let result = array.filter(item => item %2 ===0).reduce((sum,current) => sum + current);
// console.log(result);



// Another version

// let array = [65,34,88,91,75,20];
// let sum = 0;

// function reduce()
// {
//     for(let i=0; i<array.length; i++)
//     {
//         if(array[i] % 2 ===0)
//         {
//             sum += array[i];
//         }
//     }
//     return sum;

// }

// console.log(reduce());



// HOME TASK 4.

// let array = ["user@gmail.com", "user@yahoo.com","user@code.edu.az","user@hotmail.com","user@code.edu.az","user@code.edu.az","user@code.edu.az"];
// let result = array.find(item => item.indexOf("code.edu.az") !== -1);             
// console.log(result);



// Another version

// function find()
// {
//     for(let i=0; i<array.length; i++)
//     {
//         if(array[i].indexOf("code.edu.az") !== -1)
//         {
//             // console.log(array[i]);
//             return array[i];
//         }
//     }
// }
  
// console.log(find());