{

    const removeDuplicates = (T: number[]): number[] => {
        return [...new Set(T)];
    }

    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))

    // 
}