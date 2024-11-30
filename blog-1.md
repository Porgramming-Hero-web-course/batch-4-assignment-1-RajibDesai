# Union Types

## What Are Union Types?

Union types are used when a value can be more than a single type. Union types are defined using the pipe ( `|` ) operator and allow a value to conform to multiple possible types. 

```For example:
const  person = (params: string | number): void => {
    console.log(`The value is: ${params}`);
}

```
 Here, the `value` parameter can be either a `string` or a `number`

 ## Why Union Types Are Significant

 Union types make it easy to work with functions or variables that need to accept a range of inputs.Union types are used when a value can be more than a single type.