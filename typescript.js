// TALLEST MOUNTAIN
var mountain1 = { name: 'Kilimanjaro', height: 19341 };
var mountain2 = { name: 'Everest', height: 29029 };
var mountain3 = { name: 'Denali', height: 20310 };
// Declared an array with an array of type Mountain
var mountains = [mountain1, mountain2, mountain3];
// Declared a function
var findNameOfTallestMountain = function (mountains) {
    var tallestMountain = { name: '', height: 0 };
    for (var i = 0; i < mountains.length; i++) {
        if (mountains[i].height > tallestMountain.height) {
            tallestMountain = mountains[i];
        }
    }
    return tallestMountain;
};
var nameOfTallestMountain = findNameOfTallestMountain(mountains);
console.log("The tallest mountain is " + nameOfTallestMountain.name);
var product1 = { name: 'Final Fantasy VII Remake', price: 60 };
var product2 = { name: 'Final Fantasy VIII Remastered', price: 20 };
var product3 = { name: 'Final Fantasy XV', price: 80 };
var products = [product1, product2, product3];
var calcAverageProductPrice = function (products) {
    var sumProducts = 0;
    var avgProducts = 0;
    for (var i = 0; i < products.length; i++) {
        sumProducts += products[i].price;
    }
    avgProducts = sumProducts / products.length;
    return avgProducts;
};
var averagePrice = calcAverageProductPrice(products);
console.log("The average price is " + averagePrice);
var inventory1 = { name: 'motor', price: 10.00, quantity: 10 };
var inventory2 = { name: 'sensor', price: 12.50, quantity: 4 };
var inventory3 = { name: 'LED', price: 1.00, quantity: 20 };
var inventory = [inventory1, inventory2, inventory3];
var calcInventoryValue = function (inventory) {
    var sumInventory = 0;
    for (var i = 0; i < inventory.length; i++) {
        sumInventory += inventory[i].price * inventory[i].quantity;
    }
    return sumInventory;
};
var totalInventoryValue = calcInventoryValue(inventory);
console.log("The total value of all products are " + totalInventoryValue);
