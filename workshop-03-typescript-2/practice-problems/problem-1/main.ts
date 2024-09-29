// Fill in for exercises!
interface Book {
  title: string;
  author: string;
  price: number;
  quantity: number;
  isDigital: boolean;
}

const bookOne: Book = {
  title: "Dune",
  author: "Frank Herbert",
  price: 20,
  quantity: 43,
  isDigital: false,
};

const bookTwo: Book = {
  title: "Scythe",
  author: "Neal Shusterman",
  price: 15,
  quantity: 12,
  isDigital: false,
};

const bookThree: Book = {
  title: "Wikipedia",
  author: "Everyone",
  price: 0,
  quantity: 1,
  isDigital: true,
};

const inventory: Book[] = [bookOne, bookTwo, bookThree];

function addBook(book: Book): void {
  inventory.push(book);
}

function calculateInventoryValue(): number {
  let sum = 0;
  inventory.forEach((book) => {
    sum += book.price * book.quantity;
  });
  return sum;
}

function getDigitalBooks(): Book[] {
    return inventory.filter((book) => book.isDigital)
}

addBook({
    title: "The Stand",
    author: "Stephen",
    price: 30,
    quantity: 7,
    isDigital: false
})

const totalValue: number = calculateInventoryValue()
const digitalBooks: Book[] = getDigitalBooks()

console.log(`Inventory Value: ${totalValue}`);
console.log(`Digital Books: ${digitalBooks.length}`);
