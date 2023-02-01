var shoppingCard = {
    book: 5,
    sunglass: 1,
    keyboard: 5,
    mouse:3,
    pen: 25
}
//1. when you know the specific property name, use dot notation to get the property value.

var penCount = shoppingCard.pen;
// console.log(shoppingCard);
// alternative system
//2. when you know the specific property name, use dot notation to get the property value.
var penCount2 = shoppingCard['pen'];

// 3.third one 

var propertyName = 'book';
var propertyValue = shoppingCard[propertyName];
// console.log(propertyName, propertyValue);

// as like array & just keys are shown

var property = Object.keys(shoppingCard);
// console.log(property);

// as like array & just values are shown

var propertyValues = Object.values(shoppingCard);
// console.log(propertyValues);
console.log(shoppingCard);


// set property & value 
// 1.
shoppingCard.mouse = 15;
console.log(shoppingCard);
// 2.
shoppingCard['mouse'] =29
console.log(shoppingCard);

// 3.
var propertyName = 'mouse';
shoppingCard[propertyName]= 89;
console.log(shoppingCard);



