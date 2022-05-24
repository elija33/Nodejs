console.log("User 1 made a request");
setTimeout(callback, 5000);

console.log("User 2 made a request");
setTimeout(callback, 5000);

console.log("User 3 made a request");
setTimeout(callback, 5000);


// funtion for callback date
function callback() {
    console.log("This funtion is for calling back all the date we are asking for in our app to work work");
}