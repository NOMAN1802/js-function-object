var shoppingCard = {
    book: 5,
    sunglass: 1,
    keyboard: 5,
    mouse:3,
    pen: 25,
    shoes: 2
}

const keys = Object.keys(shoppingCard);
console.log(keys);

const values = Object.values(shoppingCard);
console.log(values);
// var keys = [ 'book', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
for(var i =0; i < keys.length; i++){
    
    var propertyName = keys[i];
    var propertyValue = shoppingCard[propertyName];
    
    // console.log(propertyName, propertyValue);
}

// easy system= for in loop
for(var propertyName in shoppingCard){
    const value = shoppingCard[propertyName];
    console.log(propertyName, value);
}