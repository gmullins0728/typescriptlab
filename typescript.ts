// TALLEST MOUNTAIN

// Declared an interface 
interface Mountain {
    name: string;
    height: number;
}

const mountain1: Mountain = {name: 'Kilimanjaro', height: 19341};
const mountain2: Mountain = {name: 'Everest', height: 29029};
const mountain3: Mountain = {name: 'Denali', height: 20310};

// Declared an array with an array of type Mountain
const mountains: Mountain[] = [mountain1, mountain2, mountain3];

// Declared a function
const findNameOfTallestMountain = (mountains: Mountain[]): Mountain => {
    let tallestMountain: Mountain = { name: '', height: 0};
    for (let i = 0; i < mountains.length; i++) {
        if (mountains[i].height > tallestMountain.height) {
            tallestMountain = mountains[i];
        }
    }
    return tallestMountain;
};
let nameOfTallestMountain = findNameOfTallestMountain(mountains);
console.log(`The tallest mountain is ${nameOfTallestMountain.name}`);


// PRODUCTS
interface Product {
    name: string;
    price: number;
}

const product1: Product = {name: 'Final Fantasy VII Remake', price: 60};
const product2: Product = {name: 'Final Fantasy VIII Remastered', price: 20};
const product3: Product = {name: 'Final Fantasy XV', price: 80};

const products: Product[] = [product1, product2, product3];

const calcAverageProductPrice = (products: Product[]): number => {
    let sumProducts = 0;
    let avgProducts = 0;
    for (let i = 0; i < products.length; i++) {
        sumProducts += products[i].price
    }
    avgProducts =  sumProducts / products.length;
    return avgProducts;
}
let averagePrice = calcAverageProductPrice(products);
console.log(`The average price is ${averagePrice}`);


// INVENTORY
interface InventoryItem extends Product {
    quantity: number;
}

const inventory1: InventoryItem = {name: 'motor', price: 10.00, quantity: 10};
const inventory2: InventoryItem = {name: 'sensor', price: 12.50, quantity: 4};
const inventory3: InventoryItem = {name: 'LED', price: 1.00, quantity: 20};

const inventory: InventoryItem[] = [inventory1, inventory2, inventory3];

const calcInventoryValue = (inventory: InventoryItem[]): number => {
    let sumInventory = 0;
    for (let i = 0; i < inventory.length; i++) {
        sumInventory += inventory[i].price * inventory[i].quantity
    }
    return sumInventory;
}
let totalInventoryValue = calcInventoryValue(inventory);
console.log(`The total value of all products are ${totalInventoryValue}`);