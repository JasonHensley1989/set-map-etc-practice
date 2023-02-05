//  Simple loops with a practical example

// for(let i = 0; i < 11; i++) {
//     for(let j = 0; j < 11; j++) {
//         console.log(` ${i} * ${j} = ${i * j}`)
//     }
//     console.log(`This is your ${i} time running the loop`)
// }



const storeInventory = [["Item: Computer", "Price: $1500", "Inventory: $25"],
["Item: Fridge", "Price: $1800", "Inventory: 245"],
["Item: Camera", "Price: $800", "Inventory: 65"],
["Item: Televison", "Price: $1200", "Inventory: 75"],
["Item: Album", "Price: $15", "Inventory: 95"]
];

for(let i = 0; i < storeInventory.length; i++) {
    // this returns an array, but I dont specifically want an array here
    // so I just converted to a string so which could be pushed to a div or section
    // to create an automatic lineup of products for example.
    let newStr = storeInventory[i].toString();
    console.log(newStr);
}

// this is another practical example, so the array items can be edited further down the line
// making them more dynamic

for(let i = 0; i < storeInventory.length; i++) {
    // this returns an array, but I dont specifically want an array here
    // so using an additional loop I will convert all these to strings
    let newStr = storeInventory[i].toString();
    console.log(newStr);
}