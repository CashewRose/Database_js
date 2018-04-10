const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
const HomeInventoryDatabase = loadDatabase("Home Inventory");
console.log(HomeInventoryDatabase);

// My version 

// var text = "";
// var x;
// var y;
// var z;
// for (x in home) {
//     text += x + ": ";
//     for (y in home[x]) {
//         for (z in home[x][y])
//         text += z + ": " + home[x][y][z];
//     }
// }
// document.getElementById("myStuff").innerHTML = text;

// Teacher's version

const inventoryEl = document.getElementById("myStuff");
for (let type in HomeInventoryDatabase) {
    const currentTypeArray = HomeInventoryDatabase[type];
    
    currentTypeArray.forEach(itemInArray => {
        const itemSection = document.createElement("section");

        for (let prop in itemInArray) {
            const pCompontent = document.createElement("p");
            pCompontent.textContent = itemInArray[prop];
            itemSection.appendChild(pCompontent);
        }

        // const nameP = document.createElement("p");
        // nameP.textContent = itemInArray.name;
        // itemSection.appendChild(nameP);
        
        // const locationP = document.createElement("p");
        // locationP.textContent = itemInArray.location;
        // itemSection.appendChild(locationP);

        // const descP = document.createElement("p");
        // descP.textContent = itemInArray.description;
        // itemSection.appendChild(descP);

        inventoryEl.appendChild(itemSection);

    });
}



