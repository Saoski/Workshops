// Fill in during tutorial! Make your own cheat sheet here!

function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

interface Author {
    name: string,
    avatar: string
}

const authorOne: Author = {name: 'mario', avatar: '/img/mario.png'}

interface Post {
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author
}

const newPost: Post = {
    title: 'My first post',
    body: "something interesting",
    tags: ['Gaming', 'TEch'],
    create_at: new Date(),
    author: authorOne
}

enum ResourceType { BOOK, FILM, DIRECTOR, PERSON, AUTHOR }

ResourceType.AUTHOR
