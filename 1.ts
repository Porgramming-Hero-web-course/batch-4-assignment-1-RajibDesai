{
    // 1.Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    const sumArray = (params: number[]): number => {
        let total = 0;
        for (let num of params) {
            total += num;
        }
        return total;
    }

    const total = sumArray([1, 2, 3, 4, 5]);
    console.log(total);
    // 
}