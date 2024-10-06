const button = document.getElementById("button");
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");



let purchase = 150;
let discout = purchase >=100 ? 10 : 0;
let popo = purchase / discout
let popo1 = purchase - popo;
console.log(`you total is $${popo1} you save $${popo}`)

h2.textContent = `سعر المنتج $${purchase}`;


button.onclick = function(){
    h1.textContent = ` قيمة المنتج بعد الخصم $${(popo1)} لقد وفرت $${popo}`;
}

