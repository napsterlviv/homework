/* eslint-disable guard-for-in */

let massiv = [
{
'_id': '5b5e3168c6bf40f2c1235cd6',
'index': 0,
'age': 39,
'eyeColor': 'green',
'name': 'Stein',
'favoriteFruit': 'apple'
},
{
'_id': '5b5e3168e328c0d72e4f27d8',
'index': 1,
'age': 38,
'eyeColor': 'blue',
'name': 'Cortez',
'favoriteFruit': 'strawberry'
},
{
'_id': '5b5e3168cc79132b631c666a',
'index': 2,
'age': 2,
'eyeColor': 'blue',
'name': 'Suzette',
'favoriteFruit': 'apple'
},
{
'_id': '5b5e31682093adcc6cd0dde5',
'index': 3,
'age': 17,
'eyeColor': 'green',
'name': 'Weiss',
'favoriteFruit': 'banana'
}
]

//task 1
function reverseNumber(num) {
  let x = (num<0?-1:1)* parseInt(num.toString().split('').reverse().join(''))
  return x;
}

//task 2
function forEach(arr, func) {
   for (let i = 0; i < arr.length; i++){
       func(arr[i])
   }
}

//task 3
function map(arr, func) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
       let num = func(arr[i])
       newArray.push(num)
    }
    console.log(newArray)
}
//map([2, 5, 8], function(el) { return el + 3; }) 
// returns [5, 8, 11]
//map([1, 2, 3, 4, 5], function (el) { return el * 2; }) 
// returns [2, 4, 6, 8, 10]

//task 4
function filter(arr, func) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
       let num = func(arr[i])
       if (num){
           newArray.push(arr[i])
        }
    }
    console.log(newArray)
}
//filter([2, 5, 1, 3, 8, 6], function(el) { return el > 3 }) 
//returns [5, 8, 6]
//filter([1, 4, 6, 7, 8, 10], function(el) { return el % 2 === 0 })
//returns [4, 6, 8, 10]



//task 5
function getAdultAppleLovers(data) {
    let appleLover = data.filter(function(apple) {
        return (
            apple.favoriteFruit === 'apple' && apple.age > 18)
    })
    console.log(appleLover)
}
//getAdultAppleLovers(massiv)


//task 6
function getKeys(obj) {
       let newArray = [];
        for (let k in obj) {
            newArray.push(k)
        }
        console.log(newArray)
}
//getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}) 
// returns [“keyOne”, “keyTwo”, “keyThree”]


// task 7
function getValues(obj) {
    let newArray = [];
    for (let k in obj) {
        newArray.push(parseInt(`${obj[k]}`))
    }
    console.log(newArray)
}
//getValues({keyOne: 1, keyTwo: 2, keyThree: 3}) 
// returns [1, 2, 3]



//task 8
function showFormattedDate(dateObj) {
    let monthNames = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct',
        'Nov', 'Dec'
      ];
    
      let day = dateObj.getDate();
      let monthIndex = dateObj.getMonth();
      let year = dateObj.getFullYear();
    
      return 'It is ' + day + ' of ' + monthNames[monthIndex] + ', ' + year;
}

