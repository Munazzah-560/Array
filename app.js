// Array

// Question 1

// var studentName =[];
// console.log(studentName);

// Question 2

// var studentName ={
//     names:[]
// };
// console.log(studentName);

// Question 3

// var colors =["Red","Green","Yellow","Purple","Black"];
// console.log(colors);

// Question 4

// var numbers =["1","2","3","4","5"];
// console.log(numbers);

// Question 5

// var flags =["true","false","true","false"];
// console.log(flags);

// Question 6

// var mixedArray =[42, "hello", true, null, { name: "Alice" }, [1, 2, 3]];
// console.log(mixedArray)

// Question 7

// var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// console.log(educationQualifications)

// Question 8

// var studentNames = ["Michel", "John", "Tony"];
// var scores = [320, 230, 480];

// const totalMarks = 500;

// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (scores[i] / totalMarks) * 100;
//     console.log(`"Score of michal is ${studentNames[i]} ${scores[i]}. Percentage = ${percentage.toFixed(2)}%`);
// }


// Question 9

// var colors =["Red","Green","Yellow","Purple","Blue"]
//a
// var newColor = prompt("What color do you want to add to the beginning of the array?");

//     if (newColor) {
//         colors.unshift(newColor);
//           }

//         document.write("Updated colors array: "+ colors);
//b
// var newColor = prompt("What color do you want to add to the beginning of the array?");

//     if (newColor) {
//         colors.push(newColor);
//           }

//         document.write("Updated colors array: "+ colors);
//c
// var newColor1 = prompt("What color do you want to add to the beginning of the array?");
// var newColor2 = prompt("What is another color you want to add to the beginning of the array?");

//         if (newColor1) {
//             colors.unshift(newColor1);
//             if (newColor2) {
//                 colors.unshift(newColor2);
//             }
//         }
//       document.write("Updated colors array: "+ colors);
//d
// colors.shift();
// document.write(colors)
//e
// colors.pop();
// document.write(colors)
//f
// var newColor = prompt("What color do you want to add?"); 
// var index = parseInt(prompt("At which index do you want to add this color?"));

// if (index >= 0 && index <= colors.length) {
//     colors.splice(index, 0, newColor); 
// } else {
//     alert("Invalid index. Please enter a number between 0 and " + colors.length);
// }
// document.write("Updated colors array: " + colors);
//g

// Question 10

// var studentScore =["320","230","480","120"];
// studentScore.sort((a,b) => a - b);
// console.log("Ordered scores of Student",studentScore)

// Question 11

// var cities = ['Karachi', 'Quetta', 'Lahore', 'Islamabad', 'Peshawar'];
// var selectedCities = cities.slice(0, 2); 
// document.write("Cities list:<br>",cities,"<br>Selected Cities list:<br>", selectedCities);

//Question 12

// var singleString = ["This","is","my","cat"]
// var join = singleString.join(' ')
// document.write("Array<br>",singleString,"<br>Joining method<br>",join)

//Question 13

// Question 14

// Question 15

// var manufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

//     document.write("Choose a phone manufacturer:");
//     document.write('<select "phones">');

//     for (var i = 0; i < manufacturers.length; i++) {
//         document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
//     }

//     document.write('</select>');

         //Chapter 15 Array I

// Question 1

// var arr =[]
// console.log(arr)

// Question 2

// var element = ["Hello world"]
// console.log(element)

// Question 3

// var alphabet = ["h","i","j","k"]
// alert(alphabet[2])

// Question 4

// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];

//     var lengthOfArray = alphabet.length;
//     console.log("The total length of the array is: " + lengthOfArray);

// Question 5

// var myArray = ["First Element"];

// myArray[1] = "Second Element";

// alert("The new element added is: " + myArray[1]);

       // Chapter 16 rray II

// Question 1

// var myArray = ["First Element"];
// myArray.push("Second Element");
// alert("The last element added is: " + myArray[myArray.length - 1]);

// Question 2

// var alphabet =["h","i","j","k"]
// alphabet.splice(3,1)
// console.log(alphabet)

// Question 3

// var alphabet = ["h","i","j","k"]
// alphabet.push(5)
// console.log(alphabet)


          //Chapter 16 Array III

// Question 1

// var sizes = ["S","M","XL","XXL","XXXL"]
// sizes.shift(0)
// console.log(sizes)

// Question 2

// var sizes = ["S","M","XL","XXL","XXXL"]
// sizes.unshift(1,2,3)
// console.log(sizes)

// Question 3

// var myArray = ["First Element"];
// myArray.unshift("Second Element");
// console.log(myArray)

// Question 4

// var sizes = ["S","M","XL","XXL","XXXL"]
// sizes.splice(2, 0, "L");
// console.log(sizes)

// Question 5

// var sizes = ["S","M","XL","XXL","XXXL"]
// var regSizes = sizes.slice(0,3)
// console.log(regSizes)

// Question 6

// var pets = ["dog","cat","ox","duck","frog"]
// pets.splice(1,3)
// pets.splice(1,0,"Rabbit","Goat")
// console.log(pets)

// Question 7

// var pets = ["dog","cat","ox","duck","frog"]
// pets.splice(1,2)
// console.log(pets)

// Question 8

// var pets = ["dog","cat","ox","duck","frog" ,"flea"]
// var select = pets.slice(3,5)
// console.log(select)
