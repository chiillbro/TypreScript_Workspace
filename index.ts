import axios, { AxiosResponse } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Todo :", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error", error.message);

      if (error.response) {
        console.log("Status: ", error.response.status);
        console.log("Data: ", error.response.data);
      } else {
        console.error("Error", error.message);
      }
    }
  }
};

fetchData();
// import express, { Request, Response } from "express";

// const app = express();
// const port = 3000;

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello TypeScript from Express!");
// });
// app.listen(port, () => console.log(`server listening to port ${port}`));

// ---------------------------Interfaces( important)--------------------------

// interface Name {
//   first: string;
//   last: string;
//   printInfo(first: string, last: string): string;
// }

// const Name1: Name = {
//   first: "Siva Sankar Reddy",
//   last: "Asam",
//   printInfo: (first, last) => {
//     return `Name : ${first} ${last}`;
//   },
// };

// console.log(Name1.printInfo("Siva Sankar Reddy", "Asam"));

// interface Person {
//   first: string;
//   last: string;
//   sayHello(): void;
// }

// function greet(person: Person) {
//   person.sayHello();
//   console.log(`Hello ${person.first} ${person.last}`);
// }

// const Siva: Person = {
//   first: "Siva Sankar Reddy",
//   last: "Asam",
//   sayHello() {
//     console.log("Hi there!");
//   },
// };

// const Vijay: Person = {
//   first: "Vijay Kumar",
//   last: "Jaripity",
//   sayHello() {
//     console.log("Hi buddy!");
//   },
// };

// greet(Siva);
// greet(Vijay);

// function printNumber(itemName: string, value: number): [string, number] {
//   return [itemName, value];
// }

// console.log(printNumber("Shoe", 100));

// function printNumber<Type>(Name: Type, value: Type): [Type, Type] {
//   return [Name, value];
// }

// console.log(printNumber<any>("Nike Jordans", 200));

// function myFunc<T>(item: T, Default: T): [T, T] {
//   return [item, Default];
// }

// interface Dog {
//   Name: string;
//   Breed: string;
// }

// const Dog1 = myFunc<Dog>(
//   { Name: "Buddy", Breed: "Labrador" },
//   {
//     Name: "default",
//     Breed: "unknown",
//   }
// );

// console.log(Dog1);

// -----------------------Generics---------------------

// function printInfo<T>(obj: { [key: string]: T }): {
//   key: string;
//   value: T;
// } {
//   const keys = Object.keys(obj);
//   const randKey = keys[Math.floor(Math.random() * keys.length)];
//   return { key: randKey, value: obj[randKey] };
// }

// const stringObject = { a: "apple", b: "banana", c: "cherry" };
// const randomStringObject = console.log(printInfo<string>(stringObject));

// const numberObject = { one: 1, two: 2, three: 3 };

// const randomNumberObject = console.log(printInfo<number>(numberObject));

// function arrayFunc<T>(array: T[], condition: (item: T) => boolean): T[] {
//   return array.filter((item) => condition(item));
// }

// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = arrayFunc<number>(numberArray, (num) => num % 2 === 0);

// console.log(evenNumbers);

// interface Fruits {
//   name: string;
//   color: string;
// }

// const fruitsArray: Fruits[] = [
//   { name: "Apple", color: "Red" },
//   {
//     name: "Banana",
//     color: "Yellow",
//   },
//   {
//     name: "Strawberry",
//     color: "Red",
//   },
// ];

// const redFruit = arrayFunc<Fruits>(
//   fruitsArray,
//   (fruit) => fruit.color === "Red"
// );

// console.log(redFruit);

// class Box<T> {
//   public content: T;
//   constructor(initialContent: T) {
//     this.content = initialContent;
//   }

//   getContent(): T {
//     return this.content;
//   }

//   setContent(newContent: T): void {
//     this.content = newContent;
//   }
// }

// const Box1 = new Box<string>("Hello, TypeScript");

// console.log(Box1.getContent());

// Box1.setContent("New Content");
// console.log(Box1.getContent());

// class Dog {
//   bark(): void {
//     console.log("Bow Bow");
//   }
// }
// class Cat {
//   meow(): void {
//     console.log("Meow Meow");
//   }
// }

// function animalSound(animal: Dog | Cat): void {
//   if (animal instanceof Dog) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// const dog = new Dog();
// const cat = new Cat();

// animalSound(dog);
// animalSound(cat);
