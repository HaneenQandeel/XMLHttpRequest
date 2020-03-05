var firstname = 'Haneen',
	lastname = 'Omar';
var age = 28;
var jobs;

///Dom

// const buttonMi = document.querySelector('button');
// console.log(buttonMi)
// buttonMi.addEventListener = ('click' , () => {
//   alert('hhhhshsheieimmmmmmmm55555555')
// });


// Type coercion
console.log(firstname + ' ' + age);

// Variable Mutation
age = 'twenty eight';
jobs = 'drivers';
isMarried = true;

console.log(age);
// alert(firstname + 'is a ' + age + 'years olds'
//       + jobs + 'Is he married ?' + isMarried);

// var lastname = prompt('Whats your last name?');
// console.log(firstname)

//Math Operator
var year = 2018;
var yearJon = year - 21;
console.log(year - 3);
console.log(year * 3);
console.log(year / 3);
console.log(yearJon);

// typeof Operator
console.log(typeof yearJon);
console.log(typeof isMarried);
console.log(typeof 'Haneen');

/*
 * if / else statement
*/
var firstName = 'John';
var sivilStatus = 'married';
if (sivilStatus === 'married') {
	console.log(firstName + ' ' + 'is married');
} else {
	console.log(firstName + '' + 'Is single');
}

var massMark = 72; //kg
var heightMark = 1.65; //meters

var massJohn = 72; //kg
var heightJohn = 1.65; //meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
	document.write("Mark' BMI is hIgher than John BMI");
} else {
	document.write("John' BMI is hIgher than Mark BMI");
}

console.log(BMIMark);

// Boolean logic
var age = 20;

if (age < 13) {
	console.log(firstName + 'is a boy');
} else if (age >= 13 && age < 20) {
	console.log(firstName + ' ' + 'is a teenager');
} else {
	console.log(firstName + ' ' + 'is a man');
}

//Ternary Operator

var kindergarten = age < 13 ? 'is a boy' : 'is a teenager';
console.log('hhh', kindergarten);

// Functions
var ageH = 30;
var haneenage = `${ageH} + nnnnnnnnnnnnnnsmsmsmsmnsmsmsm`;
console.log(haneenage)
const birth = (birthYear) => {
  console.log('hshshshs');
	return 2020 - birthYear;
}
console.log(birth(1994));
birth(2020)
ageH = 25;
//var ageHaneen = CalculateAge(1994);
console.log( ageH, 'ggggggggggggg');

// Arrays
var alpha = [ 'a', 'b', 'c' ];
var numeric = [ 1, 2, 3 ];
var alphaNumeric = alpha.concat(numeric);
document.write('alphaNumeric : ' + alphaNumeric);

var names = [ 'OMar', 'Salem', 'Haneen' ];
console.log(typeof names, 'jsmm');

names[1] = 'Mohammed';
console.log(names);

var Jahn = new Array();
Jahn[0] = 'Jahn';
Jahn[1] = 25;
Jahn.push('salem');
console.log(Jahn);
var haneen = [ 'haneen', 25, 'teacher', true ];
haneen.push('blue');
console.log(haneen[4]);

haneen.unshift(27);
haneen.shift();
haneen.unshift('salem');
console.log(haneen);
console.log(haneen.length);

// Objects

var Haneen = {
	firstname: 'Haneen',
	lastname: 'Qandeel',
	birthYear: 1994,
	family: [ 'Nouran', 'Razan', 'Rawan' ],
	job: 'Developer'
};
console.log(Haneen['firstname'], Haneen.birthYear, Haneen.family[2]);

Haneen['job'] = 'Designer';
Haneen['Hoppies'] = 'Swimming';
console.log(Haneen);

var Jahn = new Object();
Jahn.firstname = 'Jahn';
Jahn.age = 28;
Jahn['isMarried'] = false;
console.log(Jahn);

//For Loop

var pargh = document.getElementsByTagName('p');
for (i = 1; i < pargh.length; i++) {
	console.log('This is a paraghraph' + i);
	pargh[i].className = 'pargh-' + i;
}

//DOM

// var phM = document.createElement('p'),
//  myPText = document.createTextNode('Haneen Qandeel');

// phM.appendChild(myPText);
// phM.body.appendChild(phM);

var panetI = document.getElementById('panet');
panetI.innerHTML = 'Wellcome Haneen';

console.log(panetI);

var hello = document.getElementById('panet');
hello.innerText = document.forms[0].x1.value;


// CLASSES
class Product {

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }

}
const productList = {
  products: [
    new Product(
      'A Pillow',
      'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      'A carpet which you might like - or not.',
      89.99
    )
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodE = document.createElement('li');
      prodE.className = 'product-item';
      prodE.innerHTML =  `
      <div>
        <img src="${prod.imageUrl}" alt="${prod.title}" >
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
      prodList.append(prodE)
    }
    renderHook.append(prodList);
  }
}
productList.render();

// Getter && Setter

var user = {
  name:'Haneen',
  surname:'Qandeel',
  get FullName () {
    return `${this.name}  ${this.surname}`
  },
  set FullName (value) {
    [this.name, this.surname] = value.split(" ");

  }
}


// DOM

const button = document.querySelectorAll('button');
// console.log(buttonMi)
// buttonMi.addEventListener = ('click' , () => {
//   console.log('hhhhshsheiei')
// })
const buttonHandler = () =>{
  alert('jjjjjjjjjsj')
}
const buttonHandlerK = () =>{
  alert('mmmmm')
}

button.forEach(btn => {
  btn.addEventListener('click', event => {
    console.log(event.stopPropagation());
  });

})

setTimeout(() => {
  button.addEventListener('click', buttonHandlerK);
}, 2000);

//HTTP REQUEST
const xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
xhr.onload = function (){
  const listOfPost = JSON.parse(xhr.response);
  console.log(listOfPost);
};
xhr.send();


//
function calculateTax(tax){
  function calculateAmount(amount){
    return amount * tax;
  }
  return calculateAmount;

}
const calculateTaxAv = calculateTax(12)
console.log(calculateTaxAv(12))


//function vs Methods

const person = {
  name :'Max',
  greet: function greet(){
    console.log('haneeeeeeeeeeenJabbbbbbbbbber');
  }
};
person.greet();
console.log(person.name);
