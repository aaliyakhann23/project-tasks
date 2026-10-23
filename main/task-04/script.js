//  a = prompt('enter any number')
//  b = prompt('enter any number')
//  c=prompt('enter any number')
// if (a > b && a>c) {
//     console.log("the a is greater", a);
    
// } else if (b > a && b > c) {
//     console.log("the b is greater", b);
// }
// else {
//     console.log('c is greateer',c);
// }


// let a = prompt('enter any number');
// let b =  prompt('enter any number')
// let c =  prompt('enter any number')

// if (a > b && a > c) {
//     console.log(a + " is greatest");
// } else if (b > a && b > c) {
//     console.log(b + " is greatest");
// } else {
//     console.log(c + " is greatest");
// }



// let ch = prompt('enter the char you want to check');

// if (
//     ch.toLowerCase() == "a" ||
//     ch.toLowerCase() == "e" ||
//     ch.toLowerCase() == "i" ||
//     ch.toLowerCase() == "o" ||
//     ch.toLowerCase() == "u"
// ) {
//     console.log("Vowel");
// }
// else {
//     console.log("Consonant");
// }


// num = Number(prompt('enter the number it will show you the day'))



// switch (num) {
//     case 1:
        
//         console.log('The day is monday');
//         break;
//     case 2:
       
//         console.log('The day is tuesday');
//         break;
//     case 3:
        
//         console.log('The day is wednesday');
//         break;
//     case 4:
//         console.log('the day is thursday');
//         break;
//     case 5:
//         console.log('The day is friday')
//         break;
//     case 6:
//         console.log('The day is saturday')
//         break;
//     case 7:
//         console.log('The day is sunday')
//         break;
//     default:
//         console.log('wrong number ! enter only between 1-7');
// }

// let username = prompt('enter the username')
// let password = prompt('enter the password: ')
// if (username === "admin" && password === '1234'){
//     console.log(`the username ${username} is correct .please enter in your website`);
    
// } else {
//     console.log('your user name and password is wrong')
// }


// let age = 11

// let num = age>=18 ? "YOu can vote" : "you can't vote";
 
// console.log(num)

// let name = 'Zikra Faheem'
// let age = 21
// let clg = 'Sant hirdaram girls college'
// let passion = 'Business owner'
// let goal = 'profitable business'
// let city = 'Bhopal'
// console.log(`Hey there ! my name is ${name}. I live in city ${city} and i study in the prominent college ${clg} my passion is to become ${passion} and the goal of my life is to have a ${goal}. `)

// let p = Number(prompt('enter the principal amount'))
// let r = Number(prompt('enter the rate of interest%'))
// let y = Number(prompt('enter the duration(years) of the amount you will pay'))
// totalamount = p*(1 + r/100 )** y
// let ci = totalamount - p 
// console.log('the simple interest of the loan is', ci)
// console.log('the total amount after including interest is',totalamount)


// let c = Number(prompt('enter the temperature'))
// let f = (c * 9 / 5) + 32
// console.log('temperature in fareinheit is ',f)


// let km = Number(prompt('enter the kilometer'))
// let m = km * 1000
// console.log('Distance in meters',m)


let units = Number(prompt('enter the units of electricity bill'))
let bill;
if (units <= 100) {
    bill = units * 2
    console.log('your monthly electricity bill is',bill);
} else if (units <= 200) {
    bill = units * 3
    console.log('your monthly electricity bill is',bill);
  
} else {
    bill = units * 5
    
}
console.log('your bill is ',bill)














