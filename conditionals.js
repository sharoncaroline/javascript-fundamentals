// comparison operrators
console.log(1 > 2);
console.log(1 < 2);
console.log(1 <= 2);
console.log(1 >= 2);
let rating = 2;
if (rating === 3) {
    console.log("YOU ARE A SUPERSTAR!");
}
else if(rating === 2) {
    console.log("MEETS EXPECTATIONS!");
}
// Declare a variable called days and give it a default value of 7
// use if and else if statements to print the 7 days of the week
let days = 2;
if (days === 1) {
    console.log("monday");
}
else if(days === 2) {
    console.log("tuesday");
}
else if(days === 3) {
    console.log("wedneday");
}
// creat a variable with the name password
// the value of the password must be a string
// pw value must be greater than or equals to 6 characters
// ensure that the value of the pw has no spaces btn it
let password ="sharon"
if (password.length >= 6) {
    if (password.indexOf( ' ' ) === -1){
        console.log("THE PASSWORD IS CORRECT");
    }
}
else {
    console.log("INCORECT PASSWORD");
}
