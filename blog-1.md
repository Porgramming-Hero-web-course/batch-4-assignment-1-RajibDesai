
## What Are Union Types?

### Union types are defined using the pipe ( | ) operator and allow a value to conform to multiple possible types. For example:

```typescript
function printValue(value: string | number): void {
    console.log(`The value is: ${value}`);
}
```