let Arry = [['T-shert',150],['Jeans',250],['Shoes',200]];
let overAllPrice=0;
let newArry = [];

function buyTshert() {
    overAllPrice = overAllPrice +150;
    newArry.push(Arry[0]);
    document.getElementById('cart').innerHTML='';
    function check(x) {
        let newDiv = document.createElement('div');
        let textNode = document.createTextNode(x);
        newDiv.appendChild(textNode);
        document.getElementById('cart').appendChild(newDiv)
    }
    newArry.forEach(check);
}

function buyJeans() {
    overAllPrice = overAllPrice + 250;
    newArry.push(Arry[1]);
    document.getElementById('cart').innerHTML='';
    function check(x) {
        let newDiv = document.createElement('div');
        let textNode = document.createTextNode(x);
        newDiv.appendChild(textNode);
        document.getElementById('cart').appendChild(newDiv);

    }
    newArry.forEach(check);
}
function buyShoes() {
    overAllPrice = overAllPrice + 200;
    newArry.push(Arry[2]);
    document.getElementById('cart').innerHTML='';
    function check(x) {
        let newDiv = document.createElement('div');
        let textNode = document.createTextNode(x);
        newDiv.appendChild(textNode);
        document.getElementById('cart').appendChild(newDiv);

    }
    newArry.forEach(check);
}
function removeTshert(){
    overAllPrice = overAllPrice - 150;
    document.getElementById('cart').innerHTML='';
    let Tshert1 = false;
    for (let i = 0;i<newArry.length; i++) {
        if (Tshert1 ==false) {
            if (newArry[i].includes('T-shert')) {
                newArry.splice(i,1);
                Tshert1 = true;
            }
        }
}
function check(x) {
    let newDiv = document.createElement('div');
    let textNode = document.createTextNode(x);
    newDiv.appendChild(textNode);
    document.getElementById('cart').appendChild(newDiv);
}
newArry.forEach(check);
}

function removeJeans(){
    overAllPrice = overAllPrice - 250;
    document.getElementById('cart').innerHTML='';
    let Jeans1 = false;
    for (let i = 0;i<newArry.length; i++) {
        if (Jeans1 ==false) {
            if (newArry[i].includes('Jeans')) {
                newArry.splice(i,1);
                Jeans1 = true;
            }
        }
}
function check(x) {
    let newDiv = document.createElement('div');
    let textNode = document.createTextNode(x);
    newDiv.appendChild(textNode);
    document.getElementById('cart').appendChild(newDiv);
}
newArry.forEach(check);
}
function removeShoes(){
    overAllPrice = overAllPrice - 200;
    document.getElementById('cart').innerHTML='';
    let Shoes1 = false;
    for (let i = 0;i<newArry.length; i++) {
        if (Shoes1 ==false) {
            if (newArry[i].includes('Shoes')) {
                newArry.splice(i,1);
                Shoes1 = true;
            }
        }
}
function check(x) {
    let newDiv = document.createElement('div');
    let textNode = document.createTextNode(x);
    newDiv.appendChild(textNode);
    document.getElementById('cart').appendChild(newDiv);
}
newArry.forEach(check);
}
console.log(newArry);   

let newDivv = document.createElement('div');
let textNodee = document.createTextNode('you cart is:' + overAllPrice);
newDivv.appendChild(textNodee);
document.body.appendChild(newDivv);

console.log(overAllPrice);

