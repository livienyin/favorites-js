favorites = ["mangoes", "pineapples", "dragonfruit", "guava"];

function favoritesList(array) {
    for(var i = 0; i < array.length; i += 1) {
        console.log("My #" + (i + 1) + " favorite fruit is " + array[i])
    };
}

console.log(favoritesList(favorites));
