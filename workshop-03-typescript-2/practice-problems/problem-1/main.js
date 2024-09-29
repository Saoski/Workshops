var bookOne = {
    title: "Dune",
    author: "Frank Herbert",
    price: 20,
    quantity: 43,
    isDigital: false,
};
var bookTwo = {
    title: "Scythe",
    author: "Neal Shusterman",
    price: 15,
    quantity: 12,
    isDigital: false,
};
var bookThree = {
    title: "Wikipedia",
    author: "Everyone",
    price: 0,
    quantity: 1,
    isDigital: true,
};
var inventory = [bookOne, bookTwo, bookThree];
function addBook(book) {
    inventory.push(book);
}
function calculateInventoryValue() {
    var sum = 0;
    inventory.forEach(function (book) {
        sum += book.price * book.quantity;
    });
    return sum;
}
function getDigitalBooks() {
    return inventory.filter(function (book) { return book.isDigital; });
}
addBook({
    title: "The Stand",
    author: "Stephen",
    price: 30,
    quantity: 7,
    isDigital: false
});
var totalValue = calculateInventoryValue();
var digitalBooks = getDigitalBooks();
console.log("Inventory Value: ".concat(totalValue));
console.log("Digital Books: ".concat(digitalBooks.length));
