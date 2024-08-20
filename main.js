//TASK 1

let users = {};


for (let i = 1; i <= 10; i++) {
    const name = prompt('Enter your name: ' + i + ': ');
    const age = +prompt('Enter your age: ' + i + ': ')

    users['user'+i] = {
        name:  name,
        age: age
    };
}
 

for(let i = 1; i<=10; i++){
    const user = users['user' + i];
    console.log('USER - ' + i);
    console.log('name- ' + user.name);
    console.log('age - '+ user.age);
    
    
    
}


console.log(users);







// let cart = receipt()

// let text = 'Вы заказали'
// let delivery = 9000

// for(let key in cart) {
//     text = `${text} ${key} ${cart[key].info},`
//     delivery = delivery + cart[key]['price']
// }
// console.log(`${text} | Общая стоимость ${delivery}сумм с доставкой (9000)`);

//TASK 2


let cart = receipt()

let text = 'Вы заказали'
let delivery = 9000


for(let key in cart){
    text = `${text} ${key} ${cart[key].info},`
    delivery= delivery + cart[key] ['price']
}

console.log(`${text} | Общая стоимость ${delivery}сум с доставкой (9000)`);




