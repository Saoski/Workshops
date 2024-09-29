// Create enum CharacterType here
enum CharacterType {
  CHEESE = "cheese",
  GREASE = "grease",
  COPPER = "copper",
  URINE = "urine",
  RGB = "rgb",
}

// Create interface Character here
interface Character {
  name: string;
  image: string;
  type: CharacterType;
  hp: number;
  description: string;
}

// Define array characters here
const char1: Character = {
  name: "Bob",
  image:
    "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  type: CharacterType.CHEESE,
  hp: 3,
  description: "It's just Bob. He eats cheese.",
};

const char2: Character = {
  name: "Louis XLIV",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Louis_XIV_of_France.jpg/1200px-Louis_XIV_of_France.jpg",
  type: CharacterType.RGB,
  hp: 7,
  description:
    "The 44th descendant of the one and only Louis. He loves rainbows.",
};

const char3: Character = {
  name: "Peek Achoo",
  image:
    "https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png",
  type: CharacterType.GREASE,
  hp: 4,
  description: "French fries?",
};

let characters: Character[] = [char1, char2, char3];

// Create function addCharacter here (include params for name, image, type, hp, description)
function addCharacter(
  name: string,
  image: string,
  type: CharacterType,
  hp: number,
  description: string
): void {
  const newCharacter: Character = {
    name: name,
    image: image,
    type: type,
    hp: hp,
    description: description,
  };
  characters.push(newCharacter);
}

// Create function removeCharacter here
function removeCharacter(name: string): void {
  characters = characters.filter((character) => character.name !== name);
}

export { Character, CharacterType, characters, addCharacter, removeCharacter };
