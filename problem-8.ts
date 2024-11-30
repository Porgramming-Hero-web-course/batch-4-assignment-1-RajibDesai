{


    type Person = {
        name: string;
        age: number;
        email: string
    }

    const person: Person = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    }

    const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean =>
        keys.every(key => Object.prototype.hasOwnProperty.call(obj, key));


    console.log(validateKeys(person, ["name", "age"]));


}